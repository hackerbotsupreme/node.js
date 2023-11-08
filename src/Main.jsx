import React from "react";

// function Main() {
//     let curDate = new Date();
//     curDate = curDate.getHours();
//     let greeting = '';
//     const cssStyle = {
//         color: 'green',
//     };
//     if (curDate >= 1 && curDate < 12) {
//         greeting = 'Good Morning';
//         cssStyle.color = 'green';
//     } else if (curDate >= 12 && curDate < 19) {
//         greeting = 'Good Afternoon';
//         cssStyle.color = 'orange';
//     } else {
//         greeting = 'Good Night';
//         cssStyle.color = 'blue';
//     }

//     return(
//         <React.Fragment>
//             <div>
//                 <h1>Hello ALoke Sir, <span style={cssStyle}> {greeting}  </span></h1>
//             </div>
//         </React.Fragment>
//     )
// }
// export default Main;
import add from './Calc';
import {mul,sub,div} from './Calc';
function Main(){
    return (
        <ul>
            <li>{add(40,4)}</li>
            <li>{mul(24,5643)}</li>
            <li>{sub(36,45)}</li>
            <li>{div(234,674)}</li>
        </ul>
    )
}
export default Main;