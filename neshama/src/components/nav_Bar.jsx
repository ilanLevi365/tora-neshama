import React from "react";
import './nav_Bar.css';
import { Link } from 'react-router-dom';
import Img_Candle from '../images/candle.gif';

export default () => {
    return (
        <div className="home">
            <u id='basad'>בס"ד</u>
            <img className="candle" src={Img_Candle}></img>
            <div className="title"> תּוֹרָה לְעִלּוּי נְשָׁמָה</div>
            <Link to="/Home"><div className="homeLink">בית</div></Link>
            <Link to="/Us"><div className="us">עלינו</div></Link>
        </div>
    )
}
