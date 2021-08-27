import React, { Component } from 'react';
import './style.css';

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isShown: true
            }
        }

        onToggleDisplay() {
            this.setState(prevState => {
                return { 
                    isShown: !prevState.isShown 
                }
            });
        }
        render() {
            return (
            <div className='wrap-container'>
                <button onClick={ () => this.onToggleDisplay() }>Toggle Display</button>
                { this.state.isShown ? <OriginalComponent /> : null }
            </div>
            )}
    }
    return NewComponent;
};

export default UpdatedComponent;