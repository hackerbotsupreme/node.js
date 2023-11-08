import React from "react";
const SlotM = (props) => {
    // let x = '🤡';
    // let y = '👌';
    // // let z = '😡';
    // let z = '😡';
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if ((x === y) && (y === z)) {
        return (
            <React.Fragment>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h1>This is matching</h1>
                    <hr />
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h1>This is not matching</h1>
                    <hr />
                </div>
            </React.Fragment>
        )
    }
}
export default SlotM;