import React from 'react';
import './My_Cart_Item.css';

export default ({ item_Data }) => {
    const { title, price, qty } = item_Data;
    console.log(item_Data);
    return (
        <div className="itms">
            <span id="contents1">{title}</span>
            <span id="contents_qty">{qty}</span>
            <span id="contents2">&#8362; {price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
    )
}