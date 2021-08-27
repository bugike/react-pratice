import React from 'react';
import './style.css';
import { BiPlus } from 'react-icons/bi';


function InputField(props) {
    const { inputFunc, addFunc, sortFunc } = props;
    return (
        <div className='input-field-container'>
            <input type='text' onChange={inputFunc} id='input'></input>
            <button onClick={addFunc}><BiPlus /></button>
            <select onChange={sortFunc}>
                <option value=''>Sort...</option>
                <option value='AZ'>A-Z</option>
                <option value='ZA'>Z-A</option>
            </select>
        </div>
    )
}

export default InputField
