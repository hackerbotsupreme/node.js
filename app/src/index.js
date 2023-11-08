///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 11
// in previous video we understood that we can use {} to use variables(not staements ) inside the html which is inside of js .
// in this video we will learn about the template literals 


// import React from 'react';
// import ReactDOM from 'react-dom';


// const fname = 'aloke  '
// console.log(`vinod ${fname} `)//template  literals 
// const lname= 'pramanik';
// ReactDOM.render(
//     <React.Fragment>
//     <p>my name is {fname+lname} using concatenation </p>
//     <p>my name is {fname+"  "+lname} using concatenation </p>
//     <p>my name is {fname} {lname}</p>
//     <p>so both works the same </p>
//     <h1>{`my name is ${fname}  ${lname}`}</h1>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// C:\Users\rekha\OneDrive\Desktop\(10-20)react-js-thapa-tecnical\react-thapaTechnical
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 12
// in this video we will do jsx challenge 2 

//create a react app
// add one h1 element ex. your name 
// add one p element in it wwith current date 
// add one p element  in it with current time  



// import React from 'react';
// import ReactDOM from 'react-dom';

// const name = ' ALOKE PRAMANIK '
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//     <React.Fragment>
//         <h1>HELLO,MY NAME IS {name} </h1>
//         <p>CURRENT NAME : {currDate}</p>
//         <p>CURRENT TIME IS : {currTime}</p>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 13
// // JSX ATTRIBUTES IN REACT JS 
// THE FORST THING IS WHAT IS JSX ATTRIBUTES 
// JUST LIKE in html 
// <a href="ksjaf" target="_main"></a>
// here a is tag and the href and target are the attribute/properties of it .
// we can also use properties here 
// here we writes attributes in camelCase (contentEditable)

// import React from 'react';
// import ReactDOM from 'react-dom';
// const imag2= 'https://picsum.photos/200';
// const imag3= 'https://picsum.photos/100';
// const imag4= 'https://picsum.photos/400';
// const imag5= 'https://picsum.photos/890';
// const link = 'https://www.google.com/'
// ReactDOM.render(
//     <React.Fragment>
//         <h1 contentEditable='true'>HELLO,MY NAME IS ALOKE PRAMANIK</h1>
//         <p>how we can add images in react js </p>
//         <p>remember we dont use closing tags in the tags which/as does not have the content  </p>
        
//         <p> search lorem ipsum images </p>
//         <p> these are demo images  </p>
//         <img  src='https://picsum.photos/200/300'  alt='amongUs'/>
//         <p>or we can also do </p>
//         <img  src={imag2}  alt='amongUs'/>
//         <p>also</p>
//         <img  src={imag3}  alt='amongUs'/>
//         <img  src={imag4}  alt='amongUs'/>
//         <img  src={imag5}  alt='amongUs'/>
//         <p>also</p>
        // <a href={link} target='_blank'>
        // <img src={imag4}  alt='jfksdnj'/>
        // </a>
        // <a href={link} target='_blashBlah'>
        // <img src={imag4}  alt='jfksdnj'/>
        // </a>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 14
// // add css in react  
//  we can add styling through index.css and we will add classes inside the tag and then 
// add  import './index.css'; below and add styling .heading{} in the  index.css 
// just write className(camelcase) insted of class 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// const imag2= 'https://picsum.photos/200';
// const imag3= 'https://picsum.photos/100';
// const imag4= 'https://picsum.photos/400';
// const imag5= 'https://picsum.photos/890';
// const link = 'https://www.google.com/'
// ReactDOM.render(
//     <React.Fragment>
//         <h1 contentEditable='true' className='heading' >HELLO,MY NAME IS ALOKE PRAMANIK</h1>
//         <p>how we can add images in react js </p>
//         <p>remember we dont use closing tags in the tags which/as does not have the content  </p>
        
//         <p> search lorem ipsum images </p>
//         <p> these are demo images  </p>
//         <img  src='https://picsum.photos/200/300'  alt='amongUs'/>
//         <p>or we can also do </p>
//         <img  src={imag2}  alt='amongUs'/>
//         <p>also</p>
//         <img  src={imag3}  alt='amongUs'/>
//         <img  src={imag4}  alt='amongUs'/>
//         <img  src={imag5}  alt='amongUs'/>
//         <p>also</p>
//         <a href={link} target='_blanghk'>
//         // write anything after _ underscore to open link in a new tab
//             <img src={imag4}  alt='jfksdnj'/>
//         </a>
//         <a href={link} target='_blashBlah'>
//             <img src={imag4}  alt='jfksdnj'/>
//         </a>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 15
// // adding google fonts in the react 
// go to google fonts , copy the url then paste that in the index.html 
// paste it inside the head tag and 
// pate the font family inside index.css

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// const imag2= 'https://picsum.photos/200';
// const imag3= 'https://picsum.photos/100';
// const imag4= 'https://picsum.photos/400';
// const imag5= 'https://picsum.photos/890';
// const link = 'https://www.google.com/'
// ReactDOM.render(
//     <React.Fragment>
//         <h1 contentEditable='true' className='heading' >HELLO,MY NAME IS ALOKE PRAMANIK</h1>
//         <p>how we can add images in react js </p>
//         <p>remember we dont use closing tags in the tags which/as does not have the content  </p>
        
//         <p> search lorem ipsum images </p>
//         <p> these are demo images  </p>
//         <img  src='https://picsum.photos/200/300'  alt='amongUs'/>
//         <p>or we can also do </p>
//         <img  src={imag2}  alt='amongUs'/>
//         <p>also</p>
//         <img  src={imag3}  alt='amongUs'/>
//         <img  src={imag4}  alt='amongUs'/>
//         <img  src={imag5}  alt='amongUs'/>
//         <p>also</p>
//         <a href={link} target='_blanghk'>
//         // write anything after _ underscore to open link in a new tab
//             <img src={imag4}  alt='jfksdnj'/>
//         </a>
//         <a href={link} target='_blashBlah'>
//             <img src={imag4}  alt='jfksdnj'/>
//         </a>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 16
// // inline-css in react js 
// we have three types of css like - internal-css,external-css and inline-css
// the idea is  we will  write the same css which we are writing is index.css 
// inside this jsx/React.Fragment 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // heading is an obj with key value pairs 
// const heading = {
//     key : 'value',
//     backgroundColor: 'aqua',
//     color: 'red',
//     fontSize: '70px',
//     textDecoration: 'underline',
//     textTransform:'capitalize',
//     textShadow:'0px 2px 4px #ffe9c5',
//     fontFamily: 'Satisfy,cursive',
// }

// ReactDOM.render(
//     <React.Fragment>
//         <h1 contentEditable='true' className='heading'>HELLO,MY NAME IS ALOKE PRAMANIK</h1>
//         <p  
//          style=
//          {{
//             key : 'value',
//             backgroundColor: 'aqua',
//             color: 'red',
//             fontSize: '70px',
//             textDecoration: 'underline',
//             textTransform:'capitalize',
//             textShadow:'0px 2px 4px #ffe9c5'
//             // or we can write like this {heading}
//         }}
//         >how we can add images in react js </p>
//         <p  style={heading}> or we can write like (we will pass the object itself ) </p>
//         <p>remember we dont use closing tags in the tags which/as does not have the content  </p>
        
//         <p> search lorem ipsum images </p>
//         <p> these are demo images  </p>
//         <img  src='https://picsum.photos/200/300'  alt='amongUs'/>
//         <p>or we can also do </p>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 17
// // why inline styling is important 
// react challenge

// create a react app 
// show a heading hello,Aloke pramanik ,Good morning 
// and if time is night then show , hello,Aloke pramanik ,Good Night 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// // new Date(year,month,day,hours,minutes,seconds )
// let curDate = new  Date(2020,5,5,15);
// curDate = curDate.getHours();
// let greeting = '';

// const cssStyle ={
//     color:'green',
// };
// if(curDate>=1 && curDate<12){
//     greeting = 'Good Morning';
//     cssStyle.color= 'green';
// }else if(curDate>=12 && curDate<19){
//     greeting = 'Good Afternoon';
//     cssStyle.color= 'orange';
// }else{
//     greeting='Good Night';
//     cssStyle.color= 'blue';
// }
// ReactDOM.render(
//     <React.Fragment>
//         <div>
//             <h1>Hello ALoke Sir, <span style={cssStyle}> {greeting}  </span></h1>
//         </div>
//     </React.Fragment>,
//     document.getElementById('root')
// )
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 18
// // IN THIS VIDEO WE WILL LEARN ABOUT COMPONENTS OF REACT 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Main from './Main';
// ReactDOM.render(<Main/>,document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));
// the commented line does not work as the react confuses it(App) with App.js 
// so dont use the name - App as the name of teh partial's file 

// WE CAN DO LIKE THIS OR 
// remember the name name of jsx component always starts with  capital letters like 
// Content.jsx, Heading.jsx
// ReactDOM.render(
//     <React.Fragment>
//         <Heading></Heading>
//         <Content></Content>
//         <List></List>
//     </React.Fragment>,
//     document.getElementById('root')
// )
// or we can also do 
// ReactDOM.render(<App/>,document.getElementById('root'));
// <Heading/>,<Content/>, <List/> - this all are used for self closing tags 
// which refers to the tags that have no  child element/content 
// WE CAN MAKE COMPONENTS FOR EACH PART , H1,P,OL - COMPONENT FOR EACH ONE THEN WE WILL CALL

// now most of the times(most of react projects ) you will see that index.js 
// does not have much things thats because of app.jsx 




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 19
// // react challenge 
// split the video 17 in different components
// then render them to make the same thing 


import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
ReactDOM.render(<Main/>,document.getElementById('root'));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // video 20
// // 
// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <React.Fragment>
    
//     </React.Fragment>,
//     document.getElementById('root')
// )

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

