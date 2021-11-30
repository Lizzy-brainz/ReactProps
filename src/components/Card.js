import React from "react";
import Star from '../images/Star1.png'
// import Image1 from '../images/image.png';
// import Wedding from '../images/wedding.png';

const Card = (props) => {
    let badgeText
    if (props.item.openSpots ===0){
        badgeText="SOLD OUT"
    }else if(props.item.locations === "Online"){
        badgeText="ONLINE"
    }
  return (
        <div className="wrap">
           {badgeText && <div className="card--wrapper">
                 <p className="sold--out">{badgeText}</p>
            </div>}
        <img src={props.item.image} className="card--image" alt="img"/>
        <div className="card">
      <img src={Star} className="star" alt="star" />
      <span>{props.item.rating}</span>
      <span className="gray">{props.item.count}</span>
      <span className="gray">{props.item.location}</span>
      <p className="text">{props.item.title}</p>
      <p><span className="bold">{props.item.price}</span> / person</p>
        </div>
     </div>
      
  );
};

export default Card;