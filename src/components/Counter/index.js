import React, { Component } from 'react';
import './style.css';
import Count from '../Count';
import ButtonRow from '../ButtonRow';
import UpdatedComponent from '../../hoc/UpdatedComponent';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Counter extends Component {

    render() {
        const { 
            count, 
            btnText, 
            btnColor, 
            intervalID,
            increment,
            decrement,
            incIfOdd,
            asyncInc,
            changeBtnStyle,
            saveIntervalId,
        } = this.props;

        const timer = () => {
            if(btnText === 'Start') {
                let id = setInterval(increment, 1000);
                saveIntervalId(id);
            }
            else {
                clearInterval(intervalID);
            }
            changeBtnStyle();
        }

        return (
            <div className='counter-container'>
                <Count count={ count }/>
                <ButtonRow 
                    text1='Increment' 
                    text2='Decrement' 
                    func1={ increment } 
                    func2={ decrement } 
                />
                <ButtonRow 
                    text1='Increment-If-Odd' 
                    text2='Async-Inc' 
                    func1={ incIfOdd } 
                    func2={ asyncInc } 
                />
                <button 
                    onClick={ timer } 
                    style={{ backgroundColor: `${ btnColor }`}}
                    id='timer-btn'
                >
                { btnText }
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count,
    btnText: state.btnText,
    btnColor: state.btnColor,
    intervalID: state.intervalID
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
    incIfOdd: () => dispatch(actions.incIfOdd()),
    asyncInc: () => setTimeout(() => {
        dispatch(actions.increment());
    }, 1000),
    changeBtnStyle: () => dispatch(actions.changeBtnStyle()),
    saveIntervalId: id => dispatch(actions.saveIntervalId(id))
});

const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default UpdatedComponent(connectedCounter);
