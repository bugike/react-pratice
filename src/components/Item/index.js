import React from 'react';
import './style.css';
import { RiDeleteBinLine } from 'react-icons/ri';

function Item(props) {
    const { text, deleteFunc, itemId } = props;
    return (
        <li className='item-container'>
            <p>{ text }</p>
            <button onClick={() => deleteFunc(itemId)}><RiDeleteBinLine /></button>
        </li>
    )
}

export default Item
