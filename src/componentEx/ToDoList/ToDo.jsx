import * as ReactBootstrap from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import './style.css';

export default function ToDoList(props) {

    const [lstNote, setlstNote] = useState([]);
    const [nameOfWord, setNameOfWord] = useState();

    const handleChange = (e) => {
        console.log(e);

        let value = e.target.value.trim()

        setNameOfWord(value)

        // setKeySearch(e, filterList())
    }
    const handleAdd = (e) => {
        console.log(e);

        setlstNote(arr => [...arr, nameOfWord])
        // setKeySearch(e, filterList())
    }

    return (
        <div className="wrapper">
            <div className="todo__box">
                <form action="" className="todo__form">
                    <input type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={e => handleChange(e.target.value)}
                    />
                    <button
                        className="btn__add"
                        onClick={handleAdd()} >Add</button>

                </form>
                <ul>
                    {
                        <ListGroup as="ul">
                            {
                                lstNote.map((item) => {
                                    return (
                                        <ListGroup.Item as="li">item</ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    }
                </ul>
            </div>
        </div>
    );
}