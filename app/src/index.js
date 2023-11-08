//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 19
// topic - react challenges - we 
// will use partials to  spereate the video 17 project 
// and render it to remake that 

// files used as partials/components  Main.jsx, index.css


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Main from './Main';


// new Date(year,month,day,hours,minutes,seconds )
// let curDate = new  Date(2020,5,5,16);

// ReactDOM.render(
//     <Main/>,
//     document.getElementById('root')
// )
// C:\Users\rekha\OneDrive\Desktop\(19--)react-js-thapa-tecnical\react-thapaTechnical


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 20
// topic- every time we see that in every component we see import and export(export default) but we dont 
// realize that this is how they communicating to each other 
// actually realize how these are working in this video we will understand that 

// files used Imp.jsx

// we use import and export to communicate 
// and share the data of one file to another 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import youtuber from './Imp';
// import youtuber,{favprog, myName,otherxe} from './Imp';
// import * as anything from './Imp';
// here index.js received youtuber as an object 
// and lets understand what that default    in export default   means 
// it means that element will be served as default when  something unknown is asked like 
// import sjdfsdf from './Imp';
// import xyz from './Imp';
// we can use default in only one value in one file 
// so how do we pass/import another var written on it -> go to imp.jsx
// // only one will be dafault it does not matter how many functions/variables yu have 
// export {favprog};
// and remember if you want anything other than react then you have to spell it right .
// we cant use random thing , that is only valid for default 


// <ol>
//     <li>Best hacker of the world </li>
//     <li>{youtuber}</li>
//     <li>{favprog}</li>
//     <li>{myName()}</li>
//     <li>{otherxe()}</li>
// </ol>
// or 
// ReactDOM.render(
//     <React.Fragment>
//     <ol>
//         <li>Best hacker of the world </li>
//         <li>{ anything.youtuber}</li>
//         <li>{ anything.favprog}</li>
//         <li>{ anything.myName()}</li>
//         <li>{ anything.otherxe()}</li>
//     </ol>
//     </React.Fragment>,
//     document.getElementById('root')
// )


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 21
// topic- import , export challenge 

// files used main.jsx


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {add} from './Calc';

// import mul from './Calc';
// import sub from './Calc';
// import div from './Calc';

// import Main from './Main';
// // import skf from './Calc';
// // <li>{add(40,4)}</li>
// ReactDOM.render(
//     <Main/>,
//     document.getElementById('root')
// )
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video 22 and 23 and 24
// topic - props in rreact js , react js project 


// files used Card.jsx,index.css,sdate.jsx,Images.jsx

// import React from 'react';
// import ReactDOM from 'react-dom';
// function names and component names  always starts witj capital letter 
// theh Card is our element 
// function Card(props) {
//     console.log(props)
//     return (
//         <React.Fragment>
//             <div className='cards'>
//                 <div className='card'>
//                     <img src={props.imgsrc} height='600px' alt='myPic' className='card_img' />
//                     <div className='card__info'>
//                         <span className='card__category'>{props.title}</span>
//                         <h3 className='card__title'>{props.sname} </h3>
//                         <a href={props.link} target='_blank'>
//                             <button>  Watch Now </button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
// import Card from './Card';
// import './index.css';
// import Sdata from './Sdata';

// // console.log(Sdata[0].sname)
// ReactDOM.render(
//     <React.Fragment>

//         <h1 className='heading-style'>List of top 3 netflix series</h1>
//         <Card
//         // card is taking it as a property that s why styles dont work 
//         className="first"
//             imgsrc={Sdata[0].imgsrc}
//             title={Sdata[0].sname}
//             sname={Sdata[0].title}
//             link={Sdata[0].links}
//         // imgsrc="https://cdn.wallpapersafari.com/95/42/xfONpY.jpg"
//         // title="A NetFlix Original Series "
//         // sname="Dark"
//         // link="https://www.netflix.com/in/title/80100172"
//         />,
//         <Card
//             imgsrc={Sdata[1].imgsrc}
//             title={Sdata[1].sname}
//             sname={Sdata[1].title}
//             link={Sdata[1].links}
//         // imgsrc="https://w0.peakpx.com/wallpaper/71/926/HD-wallpaper-women-art-beauty-feminism-she-woman-womenpower-thumbnail.jpg"
//         // title="A NetFlix Original Series "
//         // sname="SHe"
//         // link="https://www.netflix.com/in/title/80100172"
//         />,
//         <Card
//             imgsrc={Sdata[2].imgsrc}
//             title={Sdata[2].sname}
//             sname={Sdata[2].title}
//             link={Sdata[2].links}
//         // imgsrc="https://wallpapercave.com/wp/wp7418550.jpg"
//         // title="A NetFlix Original Series "
//         // sname="Extra Curricular"
//         // link="https://www.netflix.com/in/title/80100172"
//         />,
//     </React.Fragment>,
//     document.getElementById('root')
// )
// now we will do it with only one card using map 
// remember that map method needs a unique key , keys are neccesary to improve performence of our site .
//  we silmplified the above using function 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Card from './Card';
// import Sdata from './Sdata';
// map(function(currentValue,index,arr),thisValue)
// function ncard(val){
//     console.log(val);
//     return (<Card
//         // card is taking it as a property that s why styles dont work 
//         className="first"
//             imgsrc={val.imgsrc}
//             title={val.sname}
//             sname={val.title}
//             link={val.links}
//         />)
// }
// <Card
// card is taking it as a property that s why styles dont work 
// className="first"
//     imgsrc={val.imgsrc}
//     title={val.sname}
//     sname={val.title}
//     link={val.links}
//  we can simplify this furthur using fat arrow function 
// console.log(Sdata[0].sname)
// ReactDOM.render(
//     <React.Fragment>

//         <h1 className='heading-style'>List of top 3 netflix series</h1>

//         <p>ncard is the callback function </p>
//         {Sdata.map(ncard)}
//     </React.Fragment>,
//     document.getElementById('root')
// )
//     const ncard=(val)=>{
//     return (<Card
//                     className="first"
//                     imgsrc={val.imgsrc}
//                     title={val.sname}
//                     sname={val.title}
//                     link={val.links}
//                 />)
// } 
// and as this was giving error bcs the map expects 3 parameters(not arguments ) and so we wrote it as it is 
// watch thapa technical map method 
// console.log(Sdata[0].sname)
// like 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Card from './Card';
// import Sdata from './Sdata';
// ReactDOM.render(
//     <React.Fragment>
//         <h1 className='heading-style'>List of top 3 netflix series</h1>
//         {Sdata.map(
//             (val, index) => {
//                 console.log(index)
//                 return (<Card
//                     key={val.id}
//                     className="first"
//                     imgsrc={val.imgsrc}
//                     title={val.sname}
//                     sname={val.title}
//                     link={val.links}
//                 />)
//             }
//         )}
//     </React.Fragment>,
//     document.getElementById('root')
// )
// export all of the above inside app.jsx and we will use that App.jsx
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// ReactDOM.render (
//     <App />,
//     document.getElementById('root')
// )
// remember that when ever i am using app.something it tells me error 
// ReactDOM.render  is updated , so remember toupdate it 
// function myname(a,b){
// return (a+b)
// }
// we can write the above like - with fat arrow function 
// const myname = (a,b)  =>  {
// return (a+b)
// }
// this one can also like
// const myname = (a,b)  =>  {(a+b)}
// or 
// const myname = (a,b)  => a+b
// search thapa technial fat arroe function 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video - 25 
// topic -  react dev tools , debugging , error handling in react js 
// in this video we are gonna solve all the eerror s that are in the console means 

// in the console tab , all the warning and wrrors are shown 

// war: each child in the lsit should have a unique key prop . (important warning )
// warning is about the unique key , kys are neccesary to improve performence of react app.

// to resolve this we havea added  key={val.id} in the Card element 
// and id inside the Sdata 
//  error is resoved .  

// secondly when we  go to click on the components 
// we gets all the components represented by their keys 
// now when yu click on the card we get to see all the properties 
// and from the structuring we gets the idea that we have heading element 
// inside the card component which has these properties . its like a hirerachy
// this inside this , this inside this .

// now we will doenload ectensions for our react dev tools .
// go to the extensions of the chrome 
// then open the chrome web store .
// type react dev tools 
// reopen the firefox 
// then to confirm just open any react app
// look for components option 
// then click on the element you see the properties 


// we added app.jsx to make index.js more prettier and efficient 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// video - 26  
// if - else statement in react 

// sybtax  -
// if(condition){
//     // block of code 
// }else if(condition){
//     //block of code 
// }else{
//     // block of code 
// }

//  remember in the video they are using app.jsx but 
// as the app is not working in our case 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// const root= ReactDOM.createRoot(document.getElementById('root'));

// root.render (
//     <React.StrictMode>
//     <App />
//     </React.StrictMode>
// )
//  we will work in the index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Netflix from './Netflix';
import Amazon from './Amazon';
// as its not working so we will update reactdom to createroot later 
// just work with this now , remember this is the app.jsx  eleement after all 
const favSeries = 'Netflix';
const FavS = () => {
    if (favSeries === 'Netflix') {
        return <Netflix/>;
    } else {
        return <Amazon/>;
    }
}

ReactDOM.render(
    <React.Fragment>
        <h1 className='heading-style'>List of top 3 netflix series</h1>
        <FavS />
    </React.Fragment>,
    document.getElementById('root')
)
// {Sdata.map(
//     (val, index) => {
//         console.log(index)
//         return (<Card
//             key={val.id}
//             className="first"
//             imgsrc={val.imgsrc}
//             title={val.sname}
//             sname={val.title}
//             link={val.links}
//         />)
//     }
// )}
