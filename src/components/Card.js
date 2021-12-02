import React from 'react'

const Card = (props) =>{
    return(
    <div className="card--wrapper">
        <img src={props.data.mount} className="mount" alt="Mount"/>
        <div className="card--text">
            <span><img src={props.data.locationIcon} className="location--icon" alt="location-icon"/></span>
            <span className="location">{props.data.location}</span>
            <span><a href="#" className="google--link">{props.data.googleLink}</a></span>
            <p className="card--title">{props.data.title}</p>
            <p className="card--start-date">{props.data.startDate} - <span className="card--end-date">{props.data.endDate}</span></p> 
            <p className="description">{props.data.description}</p>
        </div>
    </div>
    )
}

export default Card;