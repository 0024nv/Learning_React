import React from "react";

function Cards(props){
    return(<>
    <div className="cards">
        <div className="card">
            <img src={props.img_src} alt="web_img" className="card_img" />
            <div className="card_info">
                <div className="card_category">A Original Netflix Series</div>
                <h3 className="card_title">{props.title}</h3>
                <a href={props.link}>
                    <button className="btn">Watch now</button>
                </a>
            </div>
        </div>
    </div>
    </>);
}
export default Cards;