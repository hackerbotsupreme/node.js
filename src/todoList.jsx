import React from "react";
const ToDoList = (props) => {

// props are immutable 

    return (
        <React.Fragment>
            <div className="todo_style">
                <i class="fa-solid fa-circle-xmark fa-times"  onClick={()=>{
                    props.onSelect(props.id)
                }}></i>
                <li>{props.text}</li>
            </div>
        </React.Fragment>
    );
}
export default ToDoList;
// {props.onSelect}