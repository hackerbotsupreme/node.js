import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


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
                        <Tooltip title="Add">
                            <Button onClick={incNum} className="btn_green"><AddIcon />Increament</Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button onClick={DecNum} className="btn_red"><RemoveIcon />Decrement</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TodoLList;

// remember in react the custom elements starts with capital letters
// where the normal ones are always capital 'so this is the difference between
// a normal and a custom element in react
// <button onClick={incNum}><AddIcon/>
// like between button and AddIcon  which one is custom
//  the AddIcon which starts with a capital letter