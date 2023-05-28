import React from "react";
import Common from "./Common";
function About(){

    return (
        <>
        <Common
        title={'Welcome to about page'}
        btnText={'Contact'}
        desc ={'We are team of talented developer making professional websites'}
        btnLink = {'/contact'}
        imgLink={'https://www.faceandfragrance.co.nz/wp-content/uploads/2020/09/web-development-process-img.png'}
        />
        </>
    )
}
export default About;