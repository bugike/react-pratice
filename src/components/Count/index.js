import React from 'react';

function Count(props) {
    const { count } = props;
    return (
        <div>
            <h1>Count: { count }</h1>
        </div>
    );
}

export default Count;
