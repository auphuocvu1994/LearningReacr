// ACTIONS
// Đầu tiên ta định nghĩa tất cả counter action. 
// Để ý mình vừa thêm parameter number cho các action để có thể tăng/giảm một giá trị theo ý muốn. 
// Các action lúc này ngoài tên của nó ra (type),
// nó còn mang theo data là number (payload là thuật ngữ thường được dùng thay cho data).

export  const increment = (number) => {
    return { 
        type: "INCREMENT",
        payload: number, 
    };
};
export const decrement = (number) => {
    return { 
        type: "DECREMENT",
        payload: number, 
    };
}; 

