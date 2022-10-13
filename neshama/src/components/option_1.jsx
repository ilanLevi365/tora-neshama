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
            <u>  מסכת אחת שלמה של משניות </u>
            לעילוי נשמת יקירך בעולם האמת, על ידי בן תורה, אשר יאמר בפיו את השם של יקירך לפני הלימוד, כדי שלימוד המסכת יהיה לעילוי נשמת יקירך
          </div>
        </div>
      </div>
      <Nams_Fields dealDetails={{ price: 100, description: 'מסכת משניות לעילוי נשמה', qty: 1 }} />
    </div >
  );
}


