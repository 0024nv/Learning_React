// Component part

// import React from 'react';
// import Heading from './Heading';
// import Pra from './Para';
// import Grp from './Group';

// function App(){

//     return(
//         <>
//             <Heading/>
//             <Pra/>
//             <Grp/>
//         </>

//     )
// }
// export default App;


// Import - Export

// import React from "react";
// import book from './Export';
// import {film,song,fun} from './Export';

// function App(){
//     return (
//     <ol>
//         <ul>Hlo! Bro</ul>
//         <ul>{book}</ul>
//         <ul>{film}</ul>
//         <ul>{song}</ul>
//         <ul>{fun()}</ul>
//     </ol>
//     );
// }

// export default App;




// PROPS

// import React from "react";
// import Cards from './Cards';
// import "./index.css"
// import data from './Carray';
// import Netflix from "./Netflix";

// // function fun(val){
// //     return(
// //         <Cards img_src = {val.img_src} title ={val.title} link ={val.link} />
// //     );
// // }

// // Adding If else
// const favseries = 'Netflix';
// const Favs = ()=>{
//     if(favseries==='Netflix'){
//        return <Netflix/>
//     }
//     else {
//         return <Cards img_src = {data[3].img_src} title ={data[3].title} link ={data[3].link}/>
//     }
// }

// function App(){
//     return (<>
//     <h1 className="NetHeading">Top 5 Netflix Flims</h1>
//     <div className="div_card">
//     {/* <Cards img_src = {data[0].img_src} title ={data[0].title} link ={data[0].link} />
//     <Cards img_src = {data[1].img_src} title ={data[1].title} link ={data[1].link} />
//     <Cards img_src = {data[2].img_src} title ={data[2].title} link ={data[2].link} />
//     <Cards img_src = {data[3].img_src} title ={data[3].title} link ={data[3].link} />
//     <Cards img_src = {data[4].img_src} title ={data[4].title} link ={data[4].link} /> */}
//     {/* {data.map(fun)} */}
//     {/* {data.map((val,index)=>{
//         return(
//             <Cards
//             Key ={val.id}       // for each child unique key prop
//              img_src = {val.img_src} 
//              title ={val.title} 
//              link ={val.link} />
//         );
//     })} */}
//     <Favs/>
//     </div>
//     </>)
// }
// export default App;


// Challenge -6 >> Build slot machine 

// import React from 'react';
// import './index.css';
// import Slot from './Slot';
// import Emojy from './Emojy';

// function App(){
//     return <>
//     <h1 className='NetHeading'> 🎰 Welcome! to <span style={{color: 'orange'}}>Slot Machine Game </span>🎰 </h1>
//     {Emojy.map((val,index)=>{
//         return<Slot x={val.x} y={val.y} z={val.z} />
//     })}
//     </>
// }

// export default App ;



//  Reack Hooks

// import React from 'react';
// import { useState } from 'react';
// import './index.css';

// function App(){
//     // React hook
//     const [count,Inc] = useState(1);

//     const CntInc=()=>{
//         Inc(count+2);
//     }
//     return (
//         <>
//     <h1 className='cnt'>{count}</h1>
//     <button className='btn_count' onClick={CntInc} > Click </button>
//         </>
//     )
// }
// export default App;



// Challenge -6 >> React Hooks Current time show on onlick
// import {React ,useState } from 'react';
// import './index.css';

// function App(){

//     var dt = new Date();
//     var t = dt.toLocaleTimeString();
//     var [time ,UseF] = useState(t);

//     const currTime =()=>{
//         console.log('Clicked');
//         var dt = new Date();
//     var tt = dt.toLocaleTimeString();
//         UseF(time = tt);
//     }
//     return (
//         <>
//         <h1 className='NetHeading'>{time}</h1>
//         <div className="btn_count" onClick={currTime}>Click</div>
//         </>
//     )
// }
// export default App;



// Creating Clock


// import {React ,useState } from 'react';
// import './index.css';

// function App(){

//     var t = new Date().toLocaleTimeString();
//    var [time,Tinc] = useState(t);

//    const currTime=()=>{
//     t = new Date().toLocaleTimeString();
//     Tinc(time = t);
//    }

//    setInterval(currTime,1000);

//     return (
//         <>
//         <h1 className='NetHeading'>{time}</h1>
//         </>
//     )
// }
// export default App;


// Events In JS

// import React from "react";
// import Events from './Events';

// function App(){
//     return(
//         <>
//         <Events/>
//         </>
//     )
// }
// export default App;

// Forms in React
import React from "react";
// import { useContext } from "react";
// import { createContext } from "react";

// import Forms from './Forms';
// import Forms2 from './Forms2';
// import Spread from './Spread';
// import ListMainTD from './ListMainTD'
// import Challenge6IncDesc from "./Challenge6IncDesc";
// import UiIcons from "./UiIcons";
// import NPM from "./NPM";

// import Accordion from "./Accordion";
// import KeepMain from "./KeepMain";


// useContext
// import ComA from './ComA';


// const Fname = createContext();
// const Lname = createContext();

// import UseEfect from "./UseEffect";

// Fetch API
// import GitHubUser from "./FetchAPI/GitHubUser";
// import Covid19 from "./FetchAPI/Covid19";
// import Pokemon from "./FetchAPI/Pokemon";

// REACT ROUTER
// import About from "./Router/About";
// import Contact from "./Router/Contact";
// import Error from "./Router/Error";
// import Service from "./Router/Service";
// import User from "./Router/User";
// import Search from "./Router/Search";

// REACT ROUTER
// import {Switch,Route} from "react-router-dom";
// import { Route,Routes,Navigate} from "react-router-dom";
// import Menu from "./Router/Menu";


// Web
// import AppCpy from "./Web/AppCpy";

// Weather
import AppCpy from "./Weather/AppCpy";

// ToDo
// import Appcpy from "./Todo/Appcpy";

// Food
// import Appcpy from "./Food/Appcpy";

// pop up
// import Appcpy from "./popup/Appcpy";

function App() {
// const Name=()=>{
//   return(
//     <>
//     I am name component of contact
//     </>
//   )
// }

  return (
    <>
      {/* <Forms/> */}
      {/* <Forms2/> */}
      {/* <Spread/> */}
      {/* <ListMainTD/> */}
      {/* <Challenge6IncDesc/> */}
      {/* <UiIcons/> */}
      {/* <NPM/> */}
      {/* <Accordion/> */}
      {/* <KeepMain/> */}

      {/* Context API
      Passing data directly from App.js to ComC
      */}
      {/* <Fname.Provider value={'Pushpa'}>
        <Lname.Provider value={'Razz'}>
          <ComA />
        </Lname.Provider>

      </Fname.Provider> */}

      {/* <UseEfect/> */}
      {/* <GitHubUser/> */}
      {/* <Covid19/> */}
      {/* <Pokemon/> */}


      {/* React Router */}

      {/* <Menu/>
      < Routes>
      // passing props 
        <Route exact path={"/"} element={ <About name='About us' />} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/contact/name" element={<Name/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/user/:fname" element={<User/>}/>
        <Route path="/search" element={<Search/>} />
        
        
        <Route path="*" element={<Navigate to={'/'}/>}/>
        {/* <Route path="*" element={<Error/>}/> */}
        {/* <Redirect to='/' /> */}
      {/* </Routes> } */}

      {/* <About/>
      <Contact/>
      <Error/> */}

      <AppCpy/>
    </>
  )
}
export default App;
// export { Fname,Lname };





