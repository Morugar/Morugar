import React from 'react';
import "./MainDiv.css"
import logo from "../../assets/logo.png"

const MyComponent = () => {
    return (
        <div className="MainDiv">
            <strong className="username"> Morugar </strong>
            <img src={logo} alt="Logo was here" align="bottom" className="logo"/>
        </div>

    );
};

export default MyComponent;
