
import React from "react";
function add(x,y){
    return (x+y);
}
function mul(x,y){
    return (x*y);
}
function sub(x,y){
    return (x-y);
}
function div(x,y){
    let divison = (x/y);
    divison = divison.toFixed(2);
    return divison ;
}
// export {add};
export default add;
export {mul,sub,div};

// <li>{add(40,4)}</li>
// <li>{mul(24,5643)}</li>
// <li>{sub(36,45)}</li>
// <li>{div(234,674)}</li>