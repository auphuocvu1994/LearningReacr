import './style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component {

    constructor() {
        super()
        this.state = { //state is by default an object
            header: ['No', 'Name', 'Email', 'Address'],
            filteredUsers: '',
            value: '',
            lstArr: []
        }
    }

    async componentDidMount() {
        // try {
        //     const rawData= await fetch('http://jsonplaceholder.typicode.com/users')
        //     const data=rawData.json()
        //     this.setState({ lstArr: data })
            
        // } catch (error) {
        //     console.log(error)
        // }


        await fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ lstArr: data })
            })
            .catch(console.log)
    }


    renderTableHeader() {
        let header = this.state.header.map((item) =>
            <th key={item}>{item}</th>
        );

        return header;

        // return this.state.header.map((item) => {
        //     return (
        //         <th key={item}>{item}</th>
        //     )
        // })
    }

    renderUsers = (arr) => {
        if (arr === 'underfine' || arr === '') {
            arr = this.state.lstArr
        }


        let users = arr.map((data, index) =>
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.website}</td>
            </tr>
        );

        return users;
    }

    // renderTableData = (arr) => {

    //     if (arr === 'underfine' || arr === '') {
    //         arr = this.state.lstArr
    //     }

    //     console.log(arr);


    //     // return arr.map((item) => {
    //     //     // const { id, name, age, email } = student
    //     //     return (
    //     //         <tr key={item.id}>
    //     //             <td>{item.name}</td>
    //     //             <td>{item.height}</td>
    //     //             <td>{item.mass}</td>
    //     //             <td>{item.hair_color}</td>
    //     //         </tr>
    //     //     )
    //     // })
    // }

    // search = (e) => {
    //     console.log(e.target.value);
    //     this.setState({ value: this.setState.value + e }, () => this.filterList());
    // }

    handleChange = (e) => {

        // this.setState({
        //     value: e.target.value
        // },this.filterList())

        const value = e.target.value.toLowerCase();

        this.setState({ value }, () => this.filterList());

        // console.log(e.target.value)
    }

    filterList() {
        let users = this.state.lstArr;
        let keyWord = this.state.value;

        users = users.filter(function (user) {
            return user.name.toLowerCase().indexOf(keyWord) !== -1; // returns true or false
        });

        this.setState({ filteredUsers: users });
    }

    render() {
        return (
            <div>
                <input type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={this.handleChange}
                />

                <table className="table table-success">
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderUsers(this.state.filteredUsers)}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Search;