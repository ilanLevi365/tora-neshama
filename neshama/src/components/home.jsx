import React from "react";
import { Link } from 'react-router-dom';
import './home.css';


export default () => {
    return (
        <div className="home">
            <div className="divDiscrption">
                <div className="discrption1">
                    <div id="discrption2">
                        <h2>רש"י </h2>
                        כמו שהאור מאיר לעולם תמיד כך התורה עומדת זכותה לעולם אל האדם וזכות מצוה לפי שעה כאור הנר
                        <br />
                        <br />
                        <h2>מצודת דוד</h2>
                        המצוה שאדם עושה מאירה לו כנר, והלומד תורה היא לו כאור היום
                        <br />
                        <br />
                        <h2>מלבי"ם</h2>
                        המצוה שהיא פרטית נמשלה לנר פרטי, "ותורה אור", והתורה שהיא כללית נמשלה לאור שהוא כללי, הנר אינו בוער רק בעוד שיש שם שמן ופתילה. וכן המצוה היא רק בעודו כלוא בגויה, והאור מאיר מצד עצמו כן אור התורה דבוק בנפש מצד שהיא נשמה אלהית, וגם אחרי הפרידה אור אלהים מאיר על ראשם ועטרותיהם בראשיהם, וכמו שעל ידי האור תאיר הנר, כן ע"י עסק התורה ישמור מצוה ולא ע"ה חסיד, האור בא מלמעלה והנר בא מלמטה, כן אור התורה מלמעלה ונר המצוה למטה בעניני הגויה וקשורה עם הנפש שדומה כשמן ופתילה שיתלהב בו האור ותאיר,
                        <br />
                        <br />
                        <h2>רלב"ג</h2>
                        וזה כי המצוה היא נר להראות הדרך והדברים הנראים, והתורה היא אור שהוא יותר חזק בזה הפועל, לכן ייחס מה שישפע משלמת התורה אל מה שישפע מספורים, ויחס האור אל הנר כמו שהתבאר מדברינו בפתיחת ביאורינו לדברי התורה, והיא ג"כ "דרך חיים", ר"ל דרך השגת החיים הנצחיים,
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <div className="options1">
                <Link id="Link" to="/Option_1" className="Option_1">
                    <div id="options_1">
                        <div id="options_2">
                            <br />
                            <h3 id='h3'>לימוד מסכת משניות</h3>
                            <p id='p'>  100 ש"ח</p>
                        </div>
                    </div>
                </Link>
                <br />
                <Link id="Link" to="/Option_2" className="Option_2">
                    <div id="options_1">
                        <div id="options_2">
                            <br />
                            <h3 id='h3'>לימוד סדר משניות</h3>
                            <p id='p'>1000 ש"ח</p>
                        </div>
                    </div>
                </Link>
                <br />
                <Link id="Link" to="/Option_3" className="Option_3">
                    <div id="options_1">
                        <div id="options_2">
                            <br />
                            <h3 id='h3'>לימוד ש"ס משניות</h3>
                            <p id='p'>5000 ש"ח</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
