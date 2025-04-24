import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Header = ({ toggleTheme, isLightMode }) => {
    return (
        <header className="header">
            <h1 className="title">
                <FontAwesomeIcon icon={faCheckSquare} /> TodoList
            </h1>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {isLightMode ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </button>
        </header>
    );
};
