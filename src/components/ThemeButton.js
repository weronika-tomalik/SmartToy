import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {ThemeContext} from "../store/ThemeContext";
import "../assets/styles/main.scss";


const ThemeButton = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
    return (
        <Button onClick={toggleTheme} className={`${isDarkTheme ? 'lightBtn' : 'darkBtn'}`}>Change Theme</Button>
    );
};

export default ThemeButton;