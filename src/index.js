
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 38 - spread operator in react js 
// the objective is to convert all that line of code of our previious code into 
//  two lines of code 
// watch spread parameter and rest parameters and default parameters in modern js of thapa techniacal 

// also shortening the menthod of adding 
// watch es6 spread operator 


// import React, { Suspense, useState } from "react";
// import React from "react";
// import ReactDOM from 'react-dom';
// import './index.css';


// const App = () => {
//     return (
//         <React.Fragment >

//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );


//  we have an array , and we have an empty array and we 
//  want to add fullname into the biodata 
// if i can add/concatenate  i can spread and add 
// can we do this yes 
// this is called spread operator .
// the syntax is three dots(...) followed by the array(or any iterable ) . it can expand the array into individual elements .
// so it can be used to expand the arraya in a places where zero or more elements are expected .

// const fullName = ['vinod','thapa'];
// const biodata = [1,...fullName,26,'male']
// console.log(fullName)
// console.log(biodata) // [ 1,'vinod','thapa',26,'male']


// // one more exmaple 

// var shooterGames = ['call of duty' , 'far city ']
// var racingGames = [ ' nned for speed', ' gran turismo']
// var games = [...shooterGames,...racingGames]

// console.log(games)


// // now 

// const fullname = {
//     fname: 'vinod',
//     lname: 'thapa'
// }

// const  biodata = {
//     id:1,
//     ...fullname,
//     age:26,
//     gender: 'male',
// }

// console.log(biodata)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 39 - completing the login form in react js in hindi , how to turn 100 s of lines of code in  2 lines 
// the objective is to convert all that line of code of our previious code into 
//  two lines of code 
// in this one we will use spread operator to combine with the objects 


// what the situation right now is when we are writing anything that goes to the state 
// which are creating object 
// but to do this we ave to write so many lines of code .





// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';


// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: '',
//         lname: '',
//         email: '',
//         phone: '',
//         qua: '',
//     });
//     const onsubmit = (event) => {
//         event.preventDefault();
//         alert('Form Submitted!')
//     }
//     const inputEvent = (event) => {
//         const { value, name } = event.target;
//         setFullName((preValue) => {
//             // console.log(preValue)
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//             // if (name === 'fname') {
//             //     return {
//             //         fname: value,
//             //         lname: preValue.lname,
//             //         email:preValue.email,
//             //         phone:preValue.phone,
//             //     }
//             // }else if(name === 'lname') {
//             //     return {
//             //         fname: preValue.fname,
//             //         lname: value,
//             //         email:preValue.email,
//             //         phone:preValue.phone,
//             //     }
//             // }
//             // else if(name === 'email') {
//             //     return {
//             //         fname: preValue.fname,
//             //         lname:preValue.lname ,
//             //         email:value,
//             //         phone:preValue.phone,
//             //     }
//             // }
//             // else if(name === 'phone') {
//             //     return {
//             //         ffname: preValue.fname,
//             //         lname:preValue.lname ,
//             //         email:preValue.email,
//             //         phone:value,
//             //     }
//             // }
//         })
//     }
//     // watch es6 spread operator 
//     return (
//         <React.Fragment >
//             <div className="main_div">
//                 <form onSubmit={onsubmit}>
//                     <div>
//                         <h1>Hello   {fullName.fname}    {fullName.lname}</h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.qua}</p>
//                         <p>{fullName.phone}</p>
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae"
//                             name='fname'
//                             onChange={inputEvent}
//                             value={fullName.fname} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae Last Name "
//                             name='lname'
//                             onChange={inputEvent}
//                             value={fullName.lname} />
//                         <br />
//                         <input
//                             type="email"
//                             placeholder="Enter Your email "
//                             name='email'
//                             onChange={inputEvent}
//                             value={fullName.email}
//                             autoComplete="off" />
//                         <br />
//                         <input
//                             type="number"
//                             placeholder="Enter Your Nmae mobile number  "
//                             name='phone'
//                             onChange={inputEvent}
//                             value={fullName.phone} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your qualification "
//                             name='qua'
//                             onChange={inputEvent}
//                             value={fullName.qua} />
//                         <br />
//                         <button onClick={onsubmit} type="submit" >Click Me 🙂</button>
//                     </div>
//                 </form>
//             </div>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );



// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';


// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: '',
//         lname: '',
//         email: '',
//         phone: '',
//         qua: '',
//     });
//     const onsubmit = (event) => {
//         event.preventDefault();
//         alert('Form Submitted!')
//     }
//     const inputEvent = (event) => {
//         const { value, name } = event.target;
//         setFullName((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//         })
//     }
//     return (
//         <React.Fragment >
//             <div className="main_div">
//                 <form onSubmit={onsubmit}>
//                     <div>
//                         <h1>Hello   {fullName.fname}    {fullName.lname}</h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.qua}</p>
//                         <p>{fullName.phone}</p>
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae"
//                             name='fname'
//                             onChange={inputEvent}
//                             value={fullName.fname} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae Last Name "
//                             name='lname'
//                             onChange={inputEvent}
//                             value={fullName.lname} />
//                         <br />
//                         <input
//                             type="email"
//                             placeholder="Enter Your email "
//                             name='email'
//                             onChange={inputEvent}
//                             value={fullName.email}
//                             autoComplete="off" />
//                         <br />
//                         <input
//                             type="number"
//                             placeholder="Enter Your Nmae mobile number  "
//                             name='phone'
//                             onChange={inputEvent}
//                             value={fullName.phone} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your qualification "
//                             name='qua'
//                             onChange={inputEvent}
//                             value={fullName.qua} />
//                         <br />
//                         <button onClick={onsubmit} type="submit" >Click Me 🙂</button>
//                     </div>
//                 </form>
//             </div>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video 40 - to do list in react js 


// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import ToDoList from "./todoList";


// const App = () => {
//     // for onchange we have to create a state variable 
//     const [inputList, setInputList] = useState('')
//     const [Items, setItems] = useState([])

//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     };


//     const listOfItems = (event) => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList]
//         });
//         setInputList('');
//     };
//     const deleteItems = (id)=>{
//         console.group('deleted')
//         setItems((oldItems)=>{
//             return oldItems.filter((arrElem,index)=>{
//                 return index !== id;
//             })
//         })
//     }
//     // useState is a hook(function) that allows you to have state variables infunctional components .
//     // you pass the initial state to this function , and it returns a variable with the current state 
//     // value (not neccesariy the initial state ) and another funcyion to update this value .

//     return (
//         <React.Fragment >
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1>ToDo list </h1>
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="add a Item"
//                         onChange={itemEvent}
//                         value={inputList}
//                     />
//                     <button onClick={listOfItems}> + </button>
//                     <ol>
//                         {/*<li>{inputList}</li>*/}
//                         {Items.map((itemval,index) => {
//                             return <ToDoList   key={index} id={index}  text={itemval}   onSelect={deleteItems}/>
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 41 - react js challenge  
// incrementing and decrementing the  state variable on button 



// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import TodoLList from "./todoList2";


// const App = () => {

//     return (
//         <React.Fragment >
//         <TodoLList/>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 41 - how to use material ui icons in react 
// incrementing and decrementing the  state variable on button 
// The most popular React UI framework is Material-UI (MUI). It comes with pre-built material components and themes for using React to develop user interface elements
// search material ui icons npm


// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import AddIcon from '@mui/icons-material/Add';
// const App = () => {

//     return (
//         <React.Fragment >
//             <button>
//                 <AddIcon />
//             </button>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );
//  npm install --save-dev @babel/plugin-proposal-private-property-in-object


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 38 - spread operator in react js 
// the objective is to convert all that line of code of our previious code into 
//  two lines of code 
// watch spread parameter and rest parameters and default parameters in modern js of thapa techniacal 

// also shortening the menthod of adding 
// watch es6 spread operator 


// import React, { Suspense, useState } from "react";
// import React from "react";
// import ReactDOM from 'react-dom';
// import './index.css';


// const App = () => {
//     return (
//         <React.Fragment >

//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );


//  we have an array , and we have an empty array and we 
//  want to add fullname into the biodata 
// if i can add/concatenate  i can spread and add 
// can we do this yes 
// this is called spread operator .
// the syntax is three dots(...) followed by the array(or any iterable ) . it can expand the array into individual elements .
// so it can be used to expand the arraya in a places where zero or more elements are expected .

// const fullName = ['vinod','thapa'];
// const biodata = [1,...fullName,26,'male']
// console.log(fullName)
// console.log(biodata) // [ 1,'vinod','thapa',26,'male']


// // one more exmaple 

// var shooterGames = ['call of duty' , 'far city ']
// var racingGames = [ ' nned for speed', ' gran turismo']
// var games = [...shooterGames,...racingGames]

// console.log(games)


// // now 

// const fullname = {
//     fname: 'vinod',
//     lname: 'thapa'
// }

// const  biodata = {
//     id:1,
//     ...fullname,
//     age:26,
//     gender: 'male',
// }

// console.log(biodata)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 39 - completing the login form in react js in hindi , how to turn 100 s of lines of code in  2 lines 
// the objective is to convert all that line of code of our previious code into 
//  two lines of code 
// in this one we will use spread operator to combine with the objects 


// what the situation right now is when we are writing anything that goes to the state 
// which are creating object 
// but to do this we ave to write so many lines of code .





// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';


// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: '',
//         lname: '',
//         email: '',
//         phone: '',
//         qua: '',
//     });
//     const onsubmit = (event) => {
//         event.preventDefault();
//         alert('Form Submitted!')
//     }
//     const inputEvent = (event) => {
//         const { value, name } = event.target;
//         setFullName((preValue) => {
//             // console.log(preValue)
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//             // if (name === 'fname') {
//             //     return {
//             //         fname: value,
//             //         lname: preValue.lname,
//             //         email:preValue.email,
//             //         phone:preValue.phone,
//             //     }
//             // }else if(name === 'lname') {
//             //     return {
//             //         fname: preValue.fname,
//             //         lname: value,
//             //         email:preValue.email,
//             //         phone:preValue.phone,
//             //     }
//             // }
//             // else if(name === 'email') {
//             //     return {
//             //         fname: preValue.fname,
//             //         lname:preValue.lname ,
//             //         email:value,
//             //         phone:preValue.phone,
//             //     }
//             // }
//             // else if(name === 'phone') {
//             //     return {
//             //         ffname: preValue.fname,
//             //         lname:preValue.lname ,
//             //         email:preValue.email,
//             //         phone:value,
//             //     }
//             // }
//         })
//     }
//     // watch es6 spread operator 
//     return (
//         <React.Fragment >
//             <div className="main_div">
//                 <form onSubmit={onsubmit}>
//                     <div>
//                         <h1>Hello   {fullName.fname}    {fullName.lname}</h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.qua}</p>
//                         <p>{fullName.phone}</p>
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae"
//                             name='fname'
//                             onChange={inputEvent}
//                             value={fullName.fname} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae Last Name "
//                             name='lname'
//                             onChange={inputEvent}
//                             value={fullName.lname} />
//                         <br />
//                         <input
//                             type="email"
//                             placeholder="Enter Your email "
//                             name='email'
//                             onChange={inputEvent}
//                             value={fullName.email}
//                             autoComplete="off" />
//                         <br />
//                         <input
//                             type="number"
//                             placeholder="Enter Your Nmae mobile number  "
//                             name='phone'
//                             onChange={inputEvent}
//                             value={fullName.phone} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your qualification "
//                             name='qua'
//                             onChange={inputEvent}
//                             value={fullName.qua} />
//                         <br />
//                         <button onClick={onsubmit} type="submit" >Click Me 🙂</button>
//                     </div>
//                 </form>
//             </div>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );



// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';


// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: '',
//         lname: '',
//         email: '',
//         phone: '',
//         qua: '',
//     });
//     const onsubmit = (event) => {
//         event.preventDefault();
//         alert('Form Submitted!')
//     }
//     const inputEvent = (event) => {
//         const { value, name } = event.target;
//         setFullName((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//         })
//     }
//     return (
//         <React.Fragment >
//             <div className="main_div">
//                 <form onSubmit={onsubmit}>
//                     <div>
//                         <h1>Hello   {fullName.fname}    {fullName.lname}</h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.qua}</p>
//                         <p>{fullName.phone}</p>
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae"
//                             name='fname'
//                             onChange={inputEvent}
//                             value={fullName.fname} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your Nmae Last Name "
//                             name='lname'
//                             onChange={inputEvent}
//                             value={fullName.lname} />
//                         <br />
//                         <input
//                             type="email"
//                             placeholder="Enter Your email "
//                             name='email'
//                             onChange={inputEvent}
//                             value={fullName.email}
//                             autoComplete="off" />
//                         <br />
//                         <input
//                             type="number"
//                             placeholder="Enter Your Nmae mobile number  "
//                             name='phone'
//                             onChange={inputEvent}
//                             value={fullName.phone} />
//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your qualification "
//                             name='qua'
//                             onChange={inputEvent}
//                             value={fullName.qua} />
//                         <br />
//                         <button onClick={onsubmit} type="submit" >Click Me 🙂</button>
//                     </div>
//                 </form>
//             </div>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video 40 - to do list in react js 


// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import ToDoList from "./todoList";


// const App = () => {
//     // for onchange we have to create a state variable 
//     const [inputList, setInputList] = useState('')
//     const [Items, setItems] = useState([])

//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     };


//     const listOfItems = (event) => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList]
//         });
//         setInputList('');
//     };
//     const deleteItems = (id)=>{
//         console.group('deleted')
//         setItems((oldItems)=>{
//             return oldItems.filter((arrElem,index)=>{
//                 return index !== id;
//             })
//         })
//     }
//     // useState is a hook(function) that allows you to have state variables infunctional components .
//     // you pass the initial state to this function , and it returns a variable with the current state 
//     // value (not neccesariy the initial state ) and another funcyion to update this value .

//     return (
//         <React.Fragment >
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1>ToDo list </h1>
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="add a Item"
//                         onChange={itemEvent}
//                         value={inputList}
//                     />
//                     <button onClick={listOfItems}> + </button>
//                     <ol>
//                         {/*<li>{inputList}</li>*/}
//                         {Items.map((itemval,index) => {
//                             return <ToDoList   key={index} id={index}  text={itemval}   onSelect={deleteItems}/>
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 41 - react js challenge  
// incrementing and decrementing the  state variable on button 



// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import TodoLList from "./todoList2";


// const App = () => {

//     return (
//         <React.Fragment >
//         <TodoLList/>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 42 - how to use material ui icons in react 
// incrementing and decrementing the  state variable on button 
// The most popular React UI framework is Material-UI (MUI). It comes with pre-built material components and themes for using React to develop user interface elements
// search material ui icons npm


// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import TodoLList from "./todoList2";





// const App = () => {

//     return (
//         <React.Fragment >
//         <TodoLList/>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );

//  npm install --save-dev @babel/plugin-proposal-private-property-in-object



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 42 - how to use material ui components  in react / material ui framework
// incrementing and decrementing the  state variable on button 
// The most popular React UI framework is Material-UI (MUI). It comes with pre-built material components and themes for using React to develop user interface elements
// search material ui icons npm

// import React, { Suspense, useState } from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import TodoLList from "./todoList2";

// material ui core npm
// material ui icons npm
// material ui - popular react ui framework 
//  keep notes of this in material ui
// Please note that react >= 16.3.0 and react-dom >= 16.3.0 are peer dependencies.


// const App = () => {
//     return (
//         <React.Fragment >
//         <TodoLList/>
//         </React.Fragment>
//     );
// };
// ReactDOM.render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>, document.getElementById('root')
// );



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// video 43 -  npm+react -> node package manager with npm 
// mini project 

// npm is the world's largest registry 
// the registry contains over 800,000 code packages .
// what is the code packages - npm is the warehouse where all the code have been kept 
//  for developers .for programmers , its like a warehouse where all the required 
// code have kept in packages . just call and use , 
// first install npm , and how you do it by installing node.js 
// npm comes with the node =js , node -v , npm  -v
// next imortant thing is software packge manager .
// software packge manager takes note of which packages have you used in your prject(dependencies) .
// all npm packages are defined in files called package.json .
// use npm init to do it .
// it has its own version .
// npm mages 
// npm is free bcz its open-source dependencies.



// search npm react digital clock .
// npm i react-clock

import React, { Suspense, useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Clock from 'react-live-clock';

const App = () => {
    return (
        <React.Fragment >
            <div className="main_div">
                <div className="center_div">
                    <h1> <Clock format="HH:mm:ss" interval={1000} ticking={true} /></h1>
                </div>
            </div>
        </React.Fragment>
    );
};
ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>, document.getElementById('root')
);

// challenge - countdown using npm 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
