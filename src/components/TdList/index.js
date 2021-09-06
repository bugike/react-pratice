import React, { Component } from 'react';
import InputField from '../InputField';
import ItemList from '../ItemList';
import './style.css';
import UpdatedComponent from '../../hoc/UpdatedComponent';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

export class TdList extends Component {

    debounce(func, timeout = 200) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    render() {
        const {
            inputText,
            itemList,
            itemId,
            changeInputText,
            addItem,
            changeItemId,
            deleteItem,
            sortArray
        } = this.props;

        const inputFunc = (e) => {
            changeInputText(e.target.value);
        };

        const addFunc = () => {
            if (!inputText) return;
            let newItem = { text: inputText, id: itemId };
            addItem(newItem);
            changeItemId();
            setTimeout(() => document.getElementById('input').value = '', 50);
            setTimeout(() => changeInputText(''), 50);
        };

        const sortFunc = (e) => {
            sortArray(e.target.value);
        }

        const deleteFunc = id => {
            deleteItem(id);
        }

        return (
            <div className='td-list-container'>
                <h2>Todo List</h2>
                <InputField 
                    inputFunc={ this.debounce(inputFunc) } 
                    addFunc={ addFunc } 
                    sortFunc={ sortFunc }
                />
                <ItemList itemList={ itemList } deleteFunc={ deleteFunc }/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputText: state.inputText,
    itemList: state.itemList,
    itemId: state.itemId
});

const mapDispatchToProps = dispatch => ({
    changeInputText: text => dispatch(actions.changeInputText(text)),
    addItem: item => dispatch(actions.addItem(item)),
    changeItemId: () => dispatch(actions.changeItemId()),
    deleteItem: id => dispatch(actions.deleteItem(id)),
    sortArray: direction => dispatch(actions.sortArray(direction))
});


const connectedTdList = connect(mapStateToProps, mapDispatchToProps)(TdList);
export default UpdatedComponent(connectedTdList);
