import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import PayPalButtons from './payments/payPalButtons';
// import GooglePayButton from "./googlePayButton.jsx";
// import { toast, ToastContainer } from 'react-toastify';
import './option_1.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            color: 'black'
        },
    },
}));

export default ({ dealDetails }) => {
    const deal_Details = dealDetails;
    console.log(deal_Details)
    const [show, setShow] = useState(false);
    const classes = useStyles();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
    } = useForm({
        mode: "onBlur",
    });
    const onSubmit1 = async (data) => {
        deal_Details.newData = {};
        deal_Details.newData.gender = 'בת';
        deal_Details.newData.name = data.fullWomanName;
        deal_Details.newData.parents_names = data.parentsWoman;
        deal_Details.newData.price = deal_Details.price.toString();
        document.getElementById('noMan').style.width = "250px";
        setShow(true);
        console.log(data);
    }
    const onSubmit2 = (data) => {
        deal_Details.newData = {};
        deal_Details.newData.gender = 'בן';
        deal_Details.newData.name = data.fullManName;
        deal_Details.newData.parents_names = data.parentsMan;
        deal_Details.newData.price = (deal_Details.price).toString();
        document.getElementById('noWoman').style.width = "250px";
        setShow(true);
        console.log(data);
    }

    return (
        <div className="left_Side" >
            <div id="woman" >
                <h3>  :לאשה  </h3>
                <form key={1} onSubmit={handleSubmit(onSubmit1)}>
                    <Box
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'black',
                            },
                        }}
                    >
                        <TextField
                            dir="rtl"
                            id="filled-basic"
                            label="שם הניפטרת"
                            variant="filled"
                            InputProps={{ disableUnderline: true }}
                            error={Boolean(errors.fullWomanName)} {...register('fullWomanName', { required: true })} />
                        {errors.fullWomanName && <p>שם הניפטרת חובה</p>}
                        <TextField
                            dir="rtl"
                            id="filled-basic"
                            label="שם ההורים"
                            variant="filled"
                            InputProps={{ disableUnderline: true }}
                            error={Boolean(errors.parentsWoman)} {...register('parentsWoman', { required: true })} />
                        {errors.parentsWoman && <p id="err">שמות ההורים חובה</p>}
                    </Box>
                    <button id="submitDetails" type='submit'>
                        <span>תשלום</span>
                    </button>
                </form>
            </div>
            <div id="noWoman"></div>
            <div id="man" >
                <h3>:לאיש </h3>
                <form key={2} onSubmit={handleSubmit2(onSubmit2)}>
                    <Box
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'black',
                            },
                        }}
                    >
                        <TextField
                            dir="rtl"
                            id="filled-basic"
                            label="שם הניפטר"
                            variant="filled"
                            InputProps={{ disableUnderline: true }}
                            error={Boolean(errors2.fullManName)} {...register2('fullManName', { required: true }
                            )} />
                        {errors2.fullManName && <p>שם הניפטר חובה</p>}
                        <TextField
                            dir="rtl"
                            id="filled-basic"
                            label="שם ההורים"
                            variant="filled"
                            InputProps={{ disableUnderline: true, className: classes.multilineColor }}
                            error={Boolean(errors2.parentsMan)} {...register2('parentsMan', { required: true })} />
                        {errors2.parentsMan && <p>שמות ההורים חובה</p>}
                    </Box>
                    <button id="submitDetails" type='submit'>
                        <span>תשלום</span>
                    </button>
                </form>
            </div>
            <div id="noMan"></div>
            {show ? <PayPalButtons dealDetails={deal_Details} /> : ""}
        </div >

    );
}