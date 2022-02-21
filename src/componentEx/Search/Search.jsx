import './style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component {
    constructor() {
        super()
        this.state = { //state is by default an object
            names: ['James', 'John', 'Paul', 'Ringo', 'George'],
            header: ['STT', 'Ho ten', 'Tuoi', 'Email'],
            students: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
        }

        this.search= this.search.bind(this)
    }

    renderTableHeader() {
        return this.state.header.map((item) => {
            return (
                <th key={item}>{item}</th>
            )
        })
    }

    renderTableData = (arr) => {
        return arr.map((item) => {
            // const { id, name, age, email } = student
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                </tr>
            )
        })
    }

    search = (e) => {


        
        return this.state.names.filter(name => name.includes('J')).map(filteredName => (
            <li key={filteredName}>
                {filteredName}
            </li>
        ))
    }



    render() {
        return (
            <div>
                <input type="text" className='form-control' onChange={this.search()}></input>

                <table className="table table-success">
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderTableData(this.state.students)}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Search;