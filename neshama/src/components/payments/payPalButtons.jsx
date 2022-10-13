import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import Invoicing from "./Invoicing.jsx";
import '../option_1.css';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 2,
                    bottom: 21,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'gold',
                }}
            >
                <Typography variant="caption" component="div" color="gold">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box >
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default ({ dealDetails }) => {
    const { price, description, newData, qty } = dealDetails;
    const [message, setMessage] = useState('');
    const [nMessage, setnMessage] = useState('');
    const [show, setShow] = useState(true);
    const [invoicing, setInvoicing] = useState(false);
    const [orderId, setOrderId] = useState(Math.round((Math.random()) * 100000));
    const [loading, setLoading] = React.useState(true);
    const [progress, setProgress] = React.useState(10);
    let use_History = useHistory();
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const createOrder = (data, actions) => {
        setLoading(false)
        return actions.order.create({
            purchase_units: [
                {
                    description: description,
                    amount: {
                        currency: 'ILS',
                        value: 1//price
                    },
                },
            ],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
            .then((orderID) => {
                setOrderId(orderID)
                return orderID
            })
    }

    async function newFetch(data) {
        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        try {
            let get_Data = await fetch(process.env.REACT_APP_API_URL, options);
            // let get_Data = await fetch('http://localhost:5000/', options);
            let result = await get_Data.json();
            console.log(result);
            if (result.conect === 1 && result.creating_user === 1) { setMessage('.התשלום בוצע בהצלחה! והשמות נרשמו במערכת'); }
            else if (result.creating_user === 0) { console.log(result.conect, result.error); setnMessage('התשלום בוצע בהצלחה, יש לעדכן את השמות, במענה אנושי במספר: 0585-759-822'); };
        } catch (error) {
            console.log(`${error} - .אין חיבור למבנה הנתונים`);
            setnMessage('יש לעדכן שוב את השמות במספר: 0585-759-822');
        }
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            setShow(false);
            setInvoicing(true);
            // console.log(newData);
            newFetch(newData);
            const { payer } = details;
            document.getElementById('noMan').style.width = "250px";
            document.getElementById('noWoman').style.width = "250px";
            // console.log(payer);
        })
    }
    const onError = (data, actions) => {
        setShow(true);
        setMessage('.אירעה שגיאה בתשלום, יש לנסות שנית');
        setTimeout(() => { setMessage('') }, 7000);
    }
    let Data = { title: description, price: price, qty: qty, name: newData.name, parents_names: newData.parents_names, gender: newData.gender, orderId: orderId }
    return (
        <div>
            <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID, 'currency': 'ILS' }} >
                {show ? (
                    <div className="newPayPal">
                        <div className="payPal">
                            <div id="payPalButtons" >
                                <div id="loading" > {loading ? <CircularProgressWithLabel value={progress} style={{ color: "gold", width: '35px' }} /> : ""}</div>
                                <PayPalButtons onClick={() => { document.getElementById('payPalButtons').style.height = "504px" }} style={{
                                    shape: 'rect',
                                    color: 'silver',
                                    layout: 'vertical',
                                    label: 'paypal'
                                }} createOrder={createOrder}
                                    onApprove={onApprove}
                                    onError={onError} />
                            </div>
                        </div>
                    </div >
                ) : ""
                }
            </PayPalScriptProvider >
            {invoicing ? <div id="div_invoicing"><Invoicing newItem={Data} /></div> : ""}
            <p id="message">{message}</p>
            <p id="nmessage">{nMessage}</p>
        </div>
    )
}