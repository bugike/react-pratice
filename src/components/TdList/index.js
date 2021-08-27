import React, { Component } from 'react';
import InputField from '../InputField';
import ItemList from '../ItemList';
import './style.css';

export class TdList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            itemList: [],
            itemId: 0,
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    inputFunc = (e) => {
        this.setState({ inputText: e.target.value });
    };

    addFunc = (e) => {
        e.preventDefault();
        this.setState(preState => ({
            itemList: [...preState.itemList, { text: this.state.inputText, id: this.state.itemId }]
        }));
        this.setState(prevState => {
            return { itemId: prevState.itemId + 1 };
        });
        setTimeout(() => document.getElementById('input').value = '', 100);
    }

    sortFunc = (e) => {
        const type = e.target.value;
        let sortedArr = this.state.itemList;
        console.log(sortedArr);
        if (type === 'AZ') {
            sortedArr.sort(function(a, b){
                if(a.inputText < b.inputText) { return -1; }
                if(a.inputText > b.inputText) { return 1; }
                return 0;
            });
            console.log(sortedArr);
        }
        if (type === 'ZA') {
            sortedArr.sort(function(a, b){
                if(a.inputText > b.inputText) { return -1; }
                if(a.inputText < b.inputText) { return 1; }
                return 0;
            });
        }

        setTimeout(() => this.setState({ itemList: sortedArr }));
        setTimeout(() => console.log(this.state), 100);
    }

    deleteItem = (id) => {
        this.setState({
            itemList: this.state.itemList.filter(item => {
                return item.id !== id;
            })
        });
    }

    render() {
        return (
            <div className='td-list-container'>
                <h2>Todo List</h2>
                <InputField 
                    inputFunc={ this.debounce(this.inputFunc) } 
                    addFunc={ this.addFunc } 
                    sortFunc={ this.sortFunc }
                />
                <ItemList itemList={ this.state.itemList } deleteItem={ this.deleteItem }/>
            </div>
        )
    }
}

export default TdList
