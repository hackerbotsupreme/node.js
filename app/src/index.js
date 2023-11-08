// thapa technical - react js playlist 
// video 4 and 5

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <h1>Hello world</h1>
//  <React.StrictMode>
//  <App />
// </React.StrictMode>
// );
// C:\Users\rekha\OneDrive\Desktop\react-js(thapa technical)\live-civid-tracker-using-react

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
////////////////////////////////////////////////////////////////////////////////////////////////
// thapa technical - react js playlist 
// video 5 and 6

// there are two things in js that we must need 
// 1.we need to require react module 
// 2.and the react-dom , we also need to require it 

// var react = require('react');
// var ReactDOM = require('react-dom');//accesing the root from the one and only index.html through requiring dom 
// both are same 
// import React from 'react'; //here we are not writing 
// import ReactDOM from 'react-dom';// same here 
// if yu use es5 with npm , you can write ReactDOM = require('react-dom')
// npm start to start the development server 

// ReactDOM.render('kya dikhana hai ', ' kaha dikana hai ', ' callback function  ')
// render means print / show 
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'))// boom 
// note - <h1>Hello World!</h1> this part is not html , its jsx - just hover over it 
// when ever we reuires react we also gets a babbel(js compiler ) , wenbpack  (package )


////////////////////////////////////////////////////////////////////////////////////////////////
// vide0 7

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'))
// render syntax  - ReactDOM.render(kya dikana hai , kaha dikana hai , callback func))
// if we try this 
// ReactDOM.render(<h1>Hello World!</h1>
// <p>pls like and share </p>, document.getElementById('root'))
// this returns an error , parsing error --  Adjacent JSX elements must be wrapped in an enclosing tag. - failed to compile 
// this error is saying if want to use more than two elements(jsx elements) use enclosing tag to make it single element 
// ReactDOM.render(
//     <div>
//         <h1>Hello World!</h1>
//         <p>pls like and share </p>
//     </div>
//     , document.getElementById('root'))
//  we enclosed in div - so which enables us to use multiple jsx elements in one element 
// or in the above 16 version we can also do like 
// const arr = ['sd', 'ads']
// ReactDOM.render(
//     [
//         <h1>Hello World!</h1>,
//         <p>pls like and share </p>
//     ]
//     , document.getElementById('root')
// );

////////////////////////////////////////////////////////////////////////////////////////////////
// video 8

// in  above video we learned about how we can use multiple jsx elements in one elemen/enclosing tag 
// in this video we will learn aboout react fragments 
// one more thing if you go inspect it then you will see you are in root div , root is in index.html 
// ok when we use div as a enclosing tag then , its also gets added and whichh creates an extra node 
// and which also creates additional problems while we are using grid and flex-box ...
// and to prevent this extra node creation we use fragments .

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <React.Fragment>
//         <h1>Hello World!</h1>
//         <p>pls like and share </p>
//     </React.Fragment>
//     , document.getElementById('root')
// );

// and after this if you inspect , there will not be an extra node 
// or we can also make it shorter like 
// ReactDOM.render(
//     <>
//         <h1>Hello World!</h1>
//         <p>pls like and share </p>
//         <p>pls like and share </p>
//     </>
//     , document.getElementById('root')
// );
// // which makes it more convienient 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 9

// jsx challenge in react

// import React from 'react';
// import ReactDOM from 'react-dom';
// create a reacta app add one h1 
// add one p element 
// add list of fav 5 netflix series in it using an order list 

// ReactDOM.render(
//     <>
//     <h1>My fav 5 netflex series </h1>
//     <p>This is list of my top 5 netflix series </p>
//     <ol>
//         <li>Dark</li>
//         <li>My Hulu love</li>
//         <li>Fify Shades Of Grey</li>
//         <li>Mr Robot</li>
//     </ol>
//     </>,
//     document.getElementById('root')
// )
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 10
// jsx expressions in react 
import React from 'react';
import ReactDOM from 'react-dom';
const name = 'aloke pramanik'
ReactDOM.render(
    <>
    <h1>my name is {name} </h1>
    <p>my favourite nuber is 3+2</p>
    <p>my favourite nuber is {3+2}</p>
    <p>my favourite nuber is {Math.random()}</p>
    </>,
    document.getElementById('root')
)
// in order to place js inside html , which is already inside js 
// we use {}
// name,3+2 -> expressions
// remember we can only use expressions inside the {}, not statements  (if , forloop , )
// something like 
// <p>my favourite nuber is {
        
//     if(3>4){
//         console.log(true)
//     }else{
//         console.log(false)
//     }

// }</p> 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

