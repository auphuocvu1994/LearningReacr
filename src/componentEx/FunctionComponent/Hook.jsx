//Gọi React và useState
import React, { useState } from "react";

//Component hiển thi thêm nội dung
const MoreContent = () => {
    return (
        <p>

            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
        </p>
    );
};

export default function Hook(props) {
    //Sử duụng useState 
    // isShow là một state
    // setShow là function giúp cập nhật state
    // Giá trị mặc định ban đầu của state là false

    const [isShow, setShow] = useState(false);
    return (
        <div>
            <p>Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the</p>

            {isShow === true ? <MoreContent /> : ''}
            {isShow === false ? <a href="/#" onClick={() => {
                // Khi click vào button
                // cập nhật state bằng cách gọi hàm
                // setShow đã được khai báo bên trên/
                setShow(true)
            }}>Read more</a> : ''}
        </div>
    );
}