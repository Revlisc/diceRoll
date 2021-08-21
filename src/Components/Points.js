import React from 'react';
import { connect } from 'react-redux';
import { valueConverter } from '../valueConverter';

const Points = ({diceHistory}) => {
    const history = diceHistory.flat();
    console.log("HISTORY IS " + history)
    const numbers = valueConverter(history);
    console.log("NUMBERS AFTER CONVERT IS " + numbers)
    const totalPoints = numbers.reduce((sum, curr) => sum + curr, 0);
    console.log("totalPoints IS " + totalPoints);
    return (
        <div>
            <span className='points'>Total Points is: {totalPoints}</span>
        </div>
    );
}

const mapStateToProps = (state) => ({
    diceHistory: state.dice.diceHistory
});

export default connect(mapStateToProps)(Points);