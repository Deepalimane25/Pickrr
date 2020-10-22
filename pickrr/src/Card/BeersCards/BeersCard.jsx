import React, { useState } from 'react'
import Style from './BeersCard.module.scss'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, BsFillHeartFill } from "react-icons/ai";
import { addToFavourate } from '../../Redux/Actions/ActionsCreators/addToFavorateActionCreator';
function BeersCard({ id, title, image_url, tagline, description, beer }) {
    let dispatch = useDispatch();
    let [added, setadded] = useState(false)

    let handleAddToFavourate = (e, beer) => {
        dispatch(addToFavourate(beer));
        console.log(e);
        setadded(true)
    }
    return (
        <div className={`card ${Style.BeersCard}`} style={{ width: "25rem", height: "380px",marginLeft:"15px" }}>
            <div className="img-fluid" style={{ width: "100%", height: "200px", marginTop: "4px", marginLeft:"5px" }}>
                <AiFillHeart className={Style.heart} onClick={(e) => handleAddToFavourate(e, { ...beer, isAddedToFavourates: true })} />

                <img style={{ objectFit: 'contain', objectPosition: "center" }} src={image_url} className={`card-img-right image`} alt="Beers" width="100%" height="100%">

                </img></div>
            <div className={`card-body`} style={{ width: "100%", height: "25px" }}>
                <h5 style={{ textAlign: "center", marginTop: "5px" }} className={`card-title`}>{title.length > 24 ? title.slice(0, 24) + "..." : title}</h5>
                <p style={{ textAlign: "center" }} className={`card-text`}>{tagline.length > 55 ? tagline.slice(0, 55) + "..." : tagline}</p>
                {/* <p style={{textAlign: "center"}} className={`card-text`}>{description.length > 80 ? description.slice(0, 80) + "..." : description}</p> */}
                <NavLink to={`/${id}`}>   <button style={{ marginLeft: "140px", marginTop: "5px" }} className={`btn btn-info `}>Description</button></NavLink>
            </div>
        </div>
    )
}

export default BeersCard;
