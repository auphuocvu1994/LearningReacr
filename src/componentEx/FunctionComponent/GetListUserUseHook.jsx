//Gọi React và useState
import React, { useState, useEffect } from "react";
import axios from "axios"; //Sử dụng axios
import * as ReactBootstrap from 'react-bootstrap';
import './style.css';

//Component hiển thị danh sách người dùng
const ShowUser = (props) => {
    //Lấy giá tri của props listUser
    const { listUserFilter } = props;
    const { numSelect } = props;
    // Render ra list user
    // React.Fragment cho phép bọc JSX lại.
    // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
    return (
        <div className="card-list">
            {listUserFilter.slice(0, numSelect).map((user, index) => {
                return (
                    <React.Fragment key={user.id}>
                        <div className="card">
                            <img src='https://gravatar.com/avatar/a7fdb76722865a89c90c1474b4eb1997?s=400&d=mp&r=x' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};


export default function GetListUserUseHook(props) {
    //Khai báo state, sử dụng hook: useState
    const [listUser, setListUser] = useState([]);
    const [listFilteredUsers, setlistFilteredUsers] = useState([]);
    const [numSelect, setNumSelect] = useState();
    const [keySearch, setKeySearch] = useState("");
    const [isLoading, setLoading] = useState(false);

    //Sử dụng useEffect hook như componentDidMount
    useEffect(() => {
        const getUserAPI = 'https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users'

        //Gọi API bằng axios
        axios.get(getUserAPI).then((res) => {
            // Cập nhật lại listUser bằng 
            setlistFilteredUsers(res.data)
            setListUser(res.data);
        }).catch((err) => {
            //Trường hợp xảy ra lỗi
            console.log(err);
            alert("Xảy ra lỗi");
        }).finally(() => {
            // Câu lệnh trong này được khởi chạy mỗi khi call API xong
            // bất kể thất bại hay không.
            // ...
            setLoading(false); //Cập nhật giá trị của state isLoading
            console.log(isLoading);
        });

    }, [])

    const handleChange = (e) => {
        console.log(e);
        setKeySearch(e, filterList())
    }

    const filterList = () => {
        let users = listUser;
        let keyWord = keySearch;

        users = users.filter(function (user) {
            return user.name.toLowerCase().indexOf(keyWord) !== -1 || user.email.toLowerCase().indexOf(keyWord) !== -1; // returns true or false
        });
        setlistFilteredUsers(users)
    }

    const change = (eventkey) => {
        // a.persist();
        // alert(`you chosen: ${eventkey}`);
        if (eventkey === 'all') {
            eventkey = listUser.length
        }
        setNumSelect(eventkey);
    };

    return (
        <>
            <div className="top-content">
                <input type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={e => handleChange(e.target.value)}
                />

                <ReactBootstrap.Dropdown
                    onSelect={e => change(e)}
                >
                    <ReactBootstrap.Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select
                    </ReactBootstrap.Dropdown.Toggle>

                    <ReactBootstrap.Dropdown.Menu>
                        <ReactBootstrap.Dropdown.Item eventKey="all">All</ReactBootstrap.Dropdown.Item>
                        <ReactBootstrap.Dropdown.Item eventKey="10">10</ReactBootstrap.Dropdown.Item>
                        <ReactBootstrap.Dropdown.Item eventKey="20">20</ReactBootstrap.Dropdown.Item>
                        <ReactBootstrap.Dropdown.Item eventKey="30">30</ReactBootstrap.Dropdown.Item>
                    </ReactBootstrap.Dropdown.Menu>
                </ReactBootstrap.Dropdown>
            </div>

            {/* {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>} */}
            <ShowUser listUserFilter={listFilteredUsers} numSelect={numSelect} listUser={listUser} />
        </>
    );
}