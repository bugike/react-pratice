import React from 'react';
import './style.css';
import Item from '../Item';

function ItemList(props) {
    const { itemList, deleteFunc } = props;
    return (
        <div className='item-list-container'>
            {itemList.map(item => (
                <Item text={item.text} deleteFunc={deleteFunc} itemId={item.id} key={item.id} />
            ))}
        </div>
    )
}

export default ItemList;
