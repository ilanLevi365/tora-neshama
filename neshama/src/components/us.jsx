import React, { useEffect } from "react";
import Agreement_1 from '../images/Agreement_1.jpg';
import Agreement_2 from '../images/Agreement_2.jpg';
import './us.css';

export default () => {
    useEffect(() => {
        document.getElementById('Agreement1_2').style.width = "0%";
        document.getElementById('Agreement2_2').style.width = "0%";
    }, [])
    let func_Agreement_1 = () => {
        document.getElementById('agreement').style.width = "100%";
        document.getElementById('Agreement1_2').style.width = "100%";
        document.getElementById('Agreement_1_2').style.opacity = 1;
    }
    let func_Agreement_2 = () => {
        document.getElementById('agreement').style.width = "100%";
        document.getElementById('Agreement2_2').style.width = "100%";
        document.getElementById('Agreement_2_2').style.opacity = 1;
    }
    let func_Agreement = () => {
        document.getElementById('agreement').style.width = "0%";
        document.getElementById('Agreement1_2').style.width = "0%";
        document.getElementById('Agreement2_2').style.width = "0%";
        document.getElementById('Agreement_1_2').style.opacity = 0;
        document.getElementById('Agreement_2_2').style.opacity = 0;
    }
    return (
        <div className="div_us">
            <div className="div_right">
                <h3>תורה - נשמה</h3>
                <p id="p1">  הינו אירגון מרכזי ארצי, אשר מטרתו אחת והיא : עילוי נשמותיהם של מתיי ישראל על ידי בני תורה, אשר קרוביהם של הניפטרים מעוניינים לעלות את נשמותיהם בעולם האמת, אשר ידוע שלימוד התורה הינו המעשה הגבוהה ביותר אשר ניתן לעשות בעולם הזה, לצורך עילוי נשמה של כל יהודי/יהודיה באשר הוא/היא, אשר דברים אלו ידועים ומפורסמים בכל ספרי הקודש, ואשר נעשים באירגון זה על ידי משניות, אשר רמזו עליהם חכמים מִשְׁנָה אותיות נְשָׁמָה</p>
            </div>
            <div className="div_left">
                <h2>הסכמות</h2>
                <div className="div_pages">
                    <h4>הרב אהרון זיאת שליט"א</h4>
                    <div onClick={func_Agreement_1} id="div_img1">
                        <img id="Agreement_1_1" src={Agreement_1}></img>
                    </div>
                    <h4>הרב משה זכאים שליט"א</h4>
                    <div onClick={func_Agreement_2} id="div_img2">
                        <img id="Agreement_2_1" src={Agreement_2}></img>
                    </div>
                </div>
                <div className="div_phon">
                    0585-759-822  :<u>קוו מידע מענה אנושי</u>
                </div>
            </div>
            <div id="agreement" onClick={func_Agreement}>
                <div id="Agreement_1_2"><img id="Agreement1_2" src={Agreement_1}></img></div>
                <div id="Agreement_2_2"><img id="Agreement2_2" src={Agreement_2} ></img></div>
            </div>
        </div >
    )
}
