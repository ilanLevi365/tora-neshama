import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Invoicing.css';
import Company_Logo from '../../images/candle.gif';
import My_Cart_Item from './My_Cart_Item.jsx';
import Pdf from 'react-to-pdf';


export default ({ newItem }) => {
    let item = newItem;
    const [total_Price, set_total_Price] = useState(item.price);
    const [total_Count, set_total_Count] = useState(0);
    const purchase_Time = new Date().toString();
    const ref = React.createRef();
    return (
        <div id="background_Invoicing">
            <div id="all_Invoicing">
                <div className="stick">
                    <Pdf targetRef={ref} fileName='Springs-Invoicing.pdf'>
                        {({ toPdf }) => <button className="btn_download" onClick={toPdf}>PDF - הורדה </button>}
                    </Pdf>
                    <br />
                    <br />
                    <Link id="end" to="/Home">
                        <button className="btn_end" onClick={() => { }}>סיום</button>
                    </Link>
                </div>
                <div className="invoicing" >
                    <div className="frame_Invoicing" ref={ref}>
                        <div className="div_word_Invoicing">
                            <div id="word_Invoicing1">תּוֹרָה</div>
                            <img id="img_company_Logo" src={Company_Logo} />
                            <div id="word_Invoicing2">נְשָׁמָה</div>
                        </div>
                        <div className="div_Content">
                            <div className="right_Part">
                                <p id="title">סכום לתשלום (ש"ח)</p>
                                <p id="amount" className="p_Total_Price">&#8362; {total_Price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div id="discrp_rite">
                                    <p id="title1">פרטי הניפטר/ת</p>
                                    <div className="billed_To">
                                        <div className="profil">{`${item.name} ${item.gender} ${item.parents_names}`}</div>
                                    </div>
                                    <br />
                                    <br />
                                    <p id="title2">מספר הזמנה</p>
                                    <p id="content2">{item.orderId}</p>
                                    <br />
                                    <br />
                                    <p id="title3">זמן ביצוע</p>
                                    <p id="content3">{purchase_Time}</p>
                                </div>
                            </div>
                            <div className="left_Part">
                                <div className="first">
                                    <div className="titls">
                                        <p id="titls">תיאור</p>
                                        <p id="titls">כמות</p>
                                        <p id="titls">סה"כ שורה</p>
                                    </div>

                                    <div className="contents">
                                        <div id="my_Cart_Item"> <My_Cart_Item item_Data={item} /><br /></div>
                                    </div>

                                </div>
                                <div className="midel">
                                    <ul id="midel_title">
                                        <div id="kav" />
                                        <li id="last_line">סכום ששולם:</li>
                                    </ul>
                                    <ul id="midel_contents">
                                        <li id="last_line">&#8362; {total_Price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        </div>
    );
}
