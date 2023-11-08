import React, { useState } from "react";

const TodoLList = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1)
    }
    const DecNum = () => {
        if (num > 0) {
            setNum(num - 1)
        } else {
            alert('sorry , zero is the limit ')
            setNum(0)
        }
    }
    return (
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <button onClick={incNum}>Increament</button>
                        <button onClick={DecNum}>Decrement</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TodoLList;