import React from 'react';
import Cards from './Cards';
import data from './Carray';

function Netflix (){
    return <>
      <Cards img_src = {data[0].img_src} title ={data[0].title} link ={data[0].link}/>
    </>
}
export default Netflix;