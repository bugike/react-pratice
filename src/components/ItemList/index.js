import React from 'react';
import './style.css';
import Item from '../Item';

function ItemList(props) {
    const { itemList, deleteItem } = props;
    return (
        <div className='item-list-container'>
            {itemList.map(item => (
                <Item text={item.text} deleteItem={deleteItem} key={item.id}/>
            ))}
        </div>
    )
}

export default ItemList;
