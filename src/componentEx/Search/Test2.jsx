class Test2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            filteredUsers: this.props.users,
            q: ''
        };

        this.filterList = this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                users: nextProps.users,
                filteredUsers: nextProps.users
            },
            () => this.filterList()
        );
    }

    onChange(event) {
        const q = event.target.value.toLowerCase();
        this.setState({ q }, () => this.filterList());
    }

    filterList() {
        let users = this.state.users;
        let q = this.state.q;

        users = users.filter(function (user) {
            return user.name.toLowerCase().indexOf(q) != -1; // returns true or false
        });
        this.setState({ filteredUsers: users });
    }

    render() {
        const userList = this.state.filteredUsers.map(user => {
            return <li>{user.name} {user.age}</li>;
        });

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.q}
                    onChange={this.onChange}
                />
                <ul>
                    {userList}
                </ul>
            </div>
        );
    }
}

const userList = [
    {
        name: 'Raul',
        age: 29
    },
    {
        name: 'Mario',
        age: 22
    }
];

ReactDOM.render(<Test2 users={userList} />, document.getElementById('root'));