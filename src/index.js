
import './index.css';
// import './index.css';
// // import Heading from './Heading';
// // import Pra from './Para';
// // import Grp from './Group';
import App from './App';

// // var React = require("react");
import React from 'react';

// // var ReactDom = require("react-dom");
import ReactDom from 'react-dom';


// REACT ROUTER
import {BrowserRouter} from 'react-router-dom';

// // Challenge-5
// import sm from './Claculator';
// import {sb,mul,div} from './Claculator';

// // ReactDom.render(what to display,where to display);
// ReactDom.render(<h1>Hello World!</h1>,document.getElementById('root'));

// // JSX
// //  Above h1 tag is not HTML it is JSX
// //  To use JSX we import react

// // Above code is seen by browser as  
// ReactDom.render(React.createElement("h1", null, "Hello World!"), document.getElementById('root'));

// // writing above code only by using JS
// var h1 = document.createElement('h1');
// h1.innerHTML = 'I am using JS';
// document.getElementById('root').appendChild(h1);


// // Render Multiple elements 
// ReactDom.render(<> <h1>First Element</h1> <p> Second Element is para </p> <h2>Third is h2 tag</h2> </>,document.getElementById('root'));

// // Render also can return array of JSX tag
// ReactDom.render([<h1>Array id = 0</h1> , <p>Array id = 1</p>],document.getElementById('root'));


// // Expressions in JSX { }
// const nam = 'NIKHIL';
// ReactDom.render(<>
// <p>my name is {nam}</p>
// <p>
//     my age is {2022-2000}
// </p>
// </>,document.getElementById('root'));

// // Template Literals `${}`
// const na = 'NIKHIL';
// const ln = 'Vinay';
// ReactDom.render(<>
// <p>{`My name is ${na} ${ln}`}</p>
// </>,document.getElementById('root'));


// // Challenge 2 >> to show date and time
// const dt = new Date().toLocaleDateString();
// const tm = new Date().toLocaleTimeString();
// ReactDom.render(<>
// <p>Nikhil Vinay</p>
// <p>{`Date: ${dt}`}</p>
// <p>{`Time: ${tm}`}</p>
// </>,document.getElementById('root'));



// // JSX Attributes
// const name = 'Nikhil';
// const img1 = "https://picsum.photos/id/1/200/300";
// const img2 = "https://picsum.photos/id/2/200/300";
// const img3 = "https://picsum.photos/id/3/200/300";
// const lkToGoogle = "https://www.google.co.in/";

// const heading = {
//     border: '2px solid red',
//     fontWeight:'bold',
//     textAlign: 'center',
//     padding: '6px',
//     color: 'blue'
// };
// ReactDom.render(<>
//     {/* <p className='heading'>{`Welcome to ${name} Gallery`}</p>  */}

// {/* Adding Inline CSS ... By creating an Object */}
//     <p style={heading} >{`Welcome to ${name} Gallery`}</p> 
//     <div className="img_div">
//     <img src={img1} alt="img1" />
//     <img src={img2} alt="img2" />
//     <a href={lkToGoogle} target='_'>
//     <img src={img3} alt="img3" />
    
//     </a>
//     </div>
   
// </>,document.getElementById('root'));


// // Challenge - 3 : to create an greating site with changing value wrt time


// const hello = {
//     color:'orange',
//     textAlign: 'center',
//     fontWeight: 'bolder',
//     fontSize:'30px',
//     margin:'15px'
// };
// const grt ={
//     color :''
// }

// let greet = '';
// // var dt = new Date();
// // var time = dt.getHours();
// var dat = new Date(2022,5,2,5);
// var time = dat.getHours();

// if(time >=0 && time <=12){
// greet = 'Good Morning';
// grt.color = 'green';
// }
// else if(time >12 && time<=19){
//     greet = 'Good Afternoon';
//     grt.color = 'yellow'
// }
// else{
//     greet = 'Good Night';
//     grt.color='black';
// }
// ReactDom.render(
//     <>
//         <h1 style={hello} >Hello Friends! <span style={grt} >{greet}</span></h1>
//     </>,
//     document.getElementById('root')
// );


// // Components


// ReactDom.render(<>
// {/* <Heading/>
// <Pra/>
// <Grp/> */}
// <App/>
// </>,document.getElementById('root'));



// // Import Export
// ReactDom.render(<App/>,document.getElementById('root'));


// // Challenge-5 >> simple calculator
// ReactDom.render(<>
// <ul>
//     <li>Sum : {sm(5,6)}</li>
//     <li>Sub: {sb(5,6)}</li>
//     <li>Mul: {mul(5,6)}</li>
//     <li>Div: {(div(5,6)).toPrecision(2)}</li>
// </ul>
// </>,document.getElementById('root'));



// PROPS

// ReactDom.render(<App/>,document.getElementById('root'));


ReactDom.render(
<BrowserRouter><App/></BrowserRouter>
,document.getElementById('root'));
