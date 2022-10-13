import React from 'react';
import Nams_Fields from './nams_Fields.jsx';
import './option_1.css';

export default () => {
  return (
    <div className="option_1">
      <div className="right_Side">
        <div className="disc">
          <h3>
            ... מִשְׁנָה אותיות נְשָׁמָה
          </h3>
          <div className="disc1">
            לימוד התורה הקדושה של
            <u>  סדר אחד שלם מתוך שישה סדרי משנה </u>
            לעילוי נשמת יקירך בעולם האמת, על ידי בן תורה, אשר יאמר בפיו את שם יקירך לפני הלימוד, כדי שלימוד סדר אחד שלם יהיה לעילוי נשמתו 
          </div>
        </div>
      </div>
      <Nams_Fields dealDetails={{ price: 1000, description: 'סדר שלם של משניות לעילוי נשמה', qty: 1 }} />
    </div >
  );
}


