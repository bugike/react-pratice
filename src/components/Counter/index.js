import React, { Component } from 'react';
import './style.css';
import Count from '../Count';
import ButtonRow from '../ButtonRow';
import UpdatedComponent from '../../hoc/UpdatedComponent';

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            btnText: 'Start',
            btnColor: 'lightgreen', 
        }

    }

    increment = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 };
        });
    };

    decrement = () => {
        this.setState(prevState => {
            return { count: prevState.count - 1 };
        });
    };

    incIfOdd = () => {
        if (this.state.count % 2 !== 0) {
            this.setState(prevState => {
                return { count: prevState.count + 1 };
        });
        }
        else { return; }
    }

    asyncInc = () => {
        setTimeout(() => {
            this.setState(prevState => {
                return { count: prevState.count + 1 };
        })}, 1000);
    }

    timer = () => {
        this.setState(prevState => {
            const text = prevState.btnText === 'Start' ? 'Stop' : 'Start';
            return { btnText: text };
        });

        this.setState(prevState => {
            const color = prevState.btnColor === 'lightgreen' ? 'red' : 'lightgreen';
            return { btnColor: color };
        });

        if (this.state.btnText === 'Start') {
            this.id = setInterval(() => {
            this.setState(prevState => {
                return { count: prevState.count + 1 };
        })}, 1000);
        }
        if (this.state.btnText === 'Stop') {
            clearInterval(this.id);
        }
    }


    render() {
        const { count, btnText, btnColor} = this.state;
        return (
            <div className='counter-container'>
                <Count count={ count }/>
                <ButtonRow 
                    text1='Increment' 
                    text2='Decrement' 
                    func1={ this.increment } 
                    func2={ this.decrement } 
                />
                <ButtonRow 
                    text1='Increment-If-Odd' 
                    text2='Async-Inc' 
                    func1={ this.incIfOdd } 
                    func2={ this.asyncInc } 
                />
                <button 
                    onClick={ this.timer } 
                    style={{ backgroundColor: `${ btnColor }`}}
                    id='timer-btn'
                >
                { btnText }
                </button>
            </div>
        )
    }
}

export default UpdatedComponent(Counter);
