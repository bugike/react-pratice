import React from 'react';
import './style.css';
import { RiDeleteBinLine } from 'react-icons/ri';

function Item(props) {
    const { text, deleteItem, itemId } = props;
    return (
        <li className='item-container'>
            <p>{ text }</p>
            <button onClick={() => deleteItem(itemId)}><RiDeleteBinLine /></button>
        </li>
    )
}

export default Item
