import React from 'react';
import '../Dice.css';

const Dice = ({face, rolling}) => {
    return (
        
        <i className={`Dice fas fa-dice-${face} ${rolling ? "rolling" : ''}`}></i>
    );
};

export default Dice;