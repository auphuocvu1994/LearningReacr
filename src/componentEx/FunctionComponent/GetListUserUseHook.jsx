//Gọi React và useState
import React, { useState, useEffect } from "react";
// import axios from "axios"; //Sử dụng axios
import { Dropdown, Card } from 'react-bootstrap';
import './style.css';
import { getListUser } from '../../ultil/api'


//Component hiển thị danh sách người dùng
// const ShowUser = ({ listUserFilter }, { numSelect }) => {
//     //Lấy giá tri của props listUser
//     // const { listUserFilter } = props;
//     // const { numSelect } = props;



//     // Render ra list user
//     // React.Fragment cho phép bọc JSX lại.
//     // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
//     return (
//         <div className="card-list">
//             {listUserFilter.slice(0, numSelect).map((user, index) => {
//                 return (
//                     <React.Fragment key={user.id}>
//                         <div className="card">
//                             <img src='https://gravatar.com/avatar/a7fdb76722865a89c90c1474b4eb1997?s=400&d=mp&r=x' className="card-img-top" alt="" />
//                             <div className="card-body">
//                                 <h5 className="card-title">{user.name}</h5>
//                                 <p className="card-text">{user.email}</p>
//                             </div>
//                         </div>
//                     </React.Fragment>
//                 );
//             })}
//         </div>
//     );
// };


export default function GetListUserUseHook(props) {
    //Khai báo state, sử dụng hook: useState
    const [listUser, setListUser] = useState([]);
    const [listFilteredUsers, setlistFilteredUsers] = useState([]);
    const [numSelect, setNumSelect] = useState(10);
    const [keySearch, setKeySearch] = useState("");
    // const [isLoading, setLoading] = useState(false);

    //Sử dụng useEffect hook như componentDidMount
    useEffect(() => {

        //Gọi API bằng axios
        getListUser(
            {
                results: numSelect,
                seed: keySearch
            }

        ).then((data) => {
            // console.log(data.results);
            setlistFilteredUsers(data.results)
            setListUser(data.results);
        })
        // axios.get(getUserAPI)
        // .then(
        //     (res) => {
        //     // Cập nhật lại listUser bằng 
        //     setlistFilteredUsers(res.data)
        //     setListUser(res.data);
        //     }
        // )
        // .catch(
        //     (err) => {
        //     //Trường hợp xảy ra lỗi
        //     console.log(err);
        //     alert("Xảy ra lỗi");
        //     }
        // )
        // .finally(() => {
        //     // Câu lệnh trong này được khởi chạy mỗi khi call API xong
        //     // bất kể thất bại hay không.
        //     // ...
        //     setLoading(false); //Cập nhật giá trị của state isLoading
        //     console.log(isLoading);
        // });

    }, [keySearch, numSelect])

    const handleChange = (e) => {
        setKeySearch(e, filterList())
    }

    const filterList = () => {
        let users = listUser;
        let keyWord = keySearch;

        users = users.filter(function (user) {
            const fullName = Object.values(user.name).join(" ");
            return fullName.toLowerCase().includes(keyWord); // returns true or false
        });
        setlistFilteredUsers(users)
    }

    const handleChangeLimit = (eventkey) => {

        const limit = eventkey === 'all' ? 1000 : eventkey;
        setNumSelect(limit);
    };

    return (
        <>
            <div className="top-content">
                <input type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={e => handleChange(e.target.value)}
                />

                <Dropdown onSelect={e => handleChangeLimit(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="all">All</Dropdown.Item>
                        <Dropdown.Item eventKey="10">10</Dropdown.Item>
                        <Dropdown.Item eventKey="20">20</Dropdown.Item>
                        <Dropdown.Item eventKey="30">30</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>} */}
            {/* <ShowUser listUserFilter={listFilteredUsers} numSelect={numSelect} listUser={listUser} /> */}

            <div className="card-list">
                {
                    listFilteredUsers.map((user) => {
                        const fullName = Object.values(user.name).join(" ");
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={user.picture.medium} />
                                <Card.Body>
                                    <Card.Title>{fullName}</Card.Title>
                                    <Card.Text>
                                        {user.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    );
}