import React from 'react';
import './style.css';

function ButtonRow(props) {
    const { text1, text2, func1, func2 } = props;
    return (
        <div className='button-row-container'>
            <button onClick={ func1 }>{ text1 }</button>
            <button onClick={ func2 }>{ text2 }</button>
        </div>
    );
}

export default ButtonRow
