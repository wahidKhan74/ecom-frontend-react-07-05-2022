import React from 'react';

function Hello(props) {
    return (
        <div className="App">
            <h1>Hello, welcome to  ReactJs Webapp !</h1>
            <p>This is a root component detals (App.js)</p>
            <p>Hello, {props.name}</p>
        </div>
    )
};

export default Hello;