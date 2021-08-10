import React, { Component, Fragment} from 'react';
import Dice from "./Dice.js";
import { numDice } from "./numDice.js";


const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
let num = 4 //numDice();

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceValues : Array.from({length: num}, () => 'one'), 
            diceHistory : [], 
            rolling: false,
            isPast: false
        };
        this.roll = this.roll.bind(this);

    }
    
    roll() {
        
        const {diceValues, diceHistory} = this.state;
        console.log("dice history from state " + diceHistory);
        const newDiceValues = diceValues.map(() => sides[Math.floor(Math.random() * sides.length)]);
        diceHistory.push(newDiceValues);
        console.log("updated dice history " + diceHistory);
        this.setState({diceValues: newDiceValues, rolling: true, diceHistory});
        /*
        const roll1 = this.props.sides [
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const roll2 = this.props.sides [
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const roll3 = this.props.sides [
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const roll4 = this.props.sides [
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({dice1: roll1, dice2: roll2, dice3: roll3, dice4: roll4, rolling: true});
        */
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    /*
    changeDice() {
        let newNum = numDice();
        this.setState({diceValues: Array.from({length: newNum}, () => 'one'),});
        num = newNum;
        <button onClick={this.changeDice} disabled={this.state.rolling}>
                    Change number of Dice
                </button>
    }
    */
    render() {
        const { diceValues, diceHistory, rolling, isPast } = this.state;
        return(
            <Fragment>
                <Fragment>
                {
                    diceValues.map((item, idx) => <Dice key={`dice${idx}`}face={item} rolling={rolling} isPast={isPast} />)
                }
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
                
​
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {
                    diceHistory.map((priorDice, idx) =>
                        <div>
                            <p>Roll Number: {idx + 1}</p>
                            {
                            priorDice.map( (item, idx) =>
                                <Dice key={`container${idx}`} face={item} rolling={false} isPast={true}></Dice>
                                )
                            }
                        </div>
                        )
                    }
                </div>
​                
​
                </Fragment>
            </Fragment>
        );
    }
}

export default RollDice;