import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from "react";
import './style.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ListItem(props) {
    const [show, setShow] = useState(false);
    const { name } = props;

    return (
        <li className={`list-item ${show ? "disable" : ""}`} onClick={() => setShow(prev => !prev)}>
            <span>{name}</span>
            <FontAwesomeIcon className='btnDelete' icon={faTrash}

                onClick={() => props.handleDelete(name)}
            />
        </li>
    );
}


export default function ToDoList(props) {

    const [lstNote, setlstNote] = useState([]);
    const [nameOfWord, setNameOfWord] = useState();


    useEffect(() => {
        const lst = JSON.parse(localStorage.getItem('lstNote'));
        if (lst) {
            setlstNote(lst);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('lstNote', JSON.stringify(lstNote))

    }, [lstNote]);

    const handleDelete = (name) => {
        console.log(name);
        var arrayCopy = [...lstNote]; // make a separate copy of the array
        var index = arrayCopy.indexOf(name)
        if (index !== -1) {
            arrayCopy.splice(index, 1);
            setlstNote(arrayCopy);
        }
    }

    const handleChange = (e) => {
        let value = e.target.value

        setNameOfWord(value);
    }

    const handleAdd = (e) => {
        e.preventDefault()
        // console.log(nameOfWord)

        setlstNote([...lstNote, nameOfWord]);

    }

    return (
        <div className="wrapper">
            <div className="todo__box">
                <form action="" className="todo__form">
                    <input type="text"
                        className="form-control"
                        placeholder="..."
                        onChange={e => handleChange(e)}
                    />
                    <button
                        className="btn__add"
                        onClick={e => handleAdd(e)} >Add</button>

                </form>
                <ListGroup as="ul">
                    {
                        lstNote.map((item) => {
                            return (
                                <ListItem
                                    key={item}
                                    name={item}
                                    listData={lstNote}
                                    handleDelete={handleDelete}
                                >
                                </ListItem>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </div>
    );
}