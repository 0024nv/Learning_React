import React from "react";

function Spread(){
    const fname = ['Nikhil','Vinay'];
    const desc = [...fname,21,'M'];  // Concade Array
    console.log(fname);
    console.log(desc);

// concade object
    const name={
        fname:'Nik',
        lname:'Vin'
    }
    const bio={
        ...name,
        age:21,
        gender:'M'
    }
    console.log(name);
    console.log(bio);

// destructing Array
const fruits = [ 'apple','banana','orange','pineapple','mango'];
var [ap, ...remaning] = fruits;
console.log(ap);
console.log(remaning);

    return(
        <>

        </>
    )
}
export default Spread;