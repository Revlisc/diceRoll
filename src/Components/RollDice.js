import React, { Component, Fragment} from 'react';
//import { div, Col, Container } from 'reactstrap';
import Dice from "./Dice.js";
import '../rollDice.css';
import Redux from 'redux';



const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

let num = 1;

/*
const INITIAL_STATE = {
    num: '1',
    diceHistory: [],
    rolling: false,
    isPast: false,
    diceValues: 'one'
}

const myReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ''
    }
}

const updateHistory = ({diceHistory}) => {
    return ({
        type: 'UPDATE_HISTORY',
        payload: {
            diceHistory
        }
    })
}

const store = createStore(myReducer);
*/
class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceValues : Array.from({length: num}, () => 'one'), 
            diceHistory : [], 
            rolling: false,
            isPast: false,
            number: '1'
        };
        this.roll = this.roll.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    roll() {
        
        const {diceValues, diceHistory} = this.state;
        console.log("dice history from state " + diceHistory);
        const newDiceValues = diceValues.map(() => sides[Math.floor(Math.random() * sides.length)]);
        diceHistory.push(newDiceValues);
        console.log("updated dice history " + diceHistory);
        this.setState({diceValues: newDiceValues, rolling: true, diceHistory});
       
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    
    handleInput(e) {
       this.setState({
           number: e.target.value
           
        });
       
   }

    onSubmit() {
       this.setState({
            diceValues: Array.from({length: this.state.number}, () => 'one')
       });
   }
    
    render() {
        const { diceValues, diceHistory, rolling, isPast, number } = this.state;
        return(
            <Fragment>
                <div className={'diceDisplay'}>
                {
                    diceValues.map((item, idx) => <Dice key={`dice${idx}`}face={item} rolling={rolling} isPast={isPast} />)
                }
                </div>
                <div className='buttons'>

                    <button className={'rollButton'} onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                    </button>

                    <label for="selector" className={'selector'}>Choose your number of dice:</label>
                    <input id='selector'  className={'selector'} type='number' pattern='[0-9]' min='1' max='9' placeholder='1' onInput={this.handleInput} value={number}/>
                    <button type='button' className={'submit'} onClick={this.onSubmit} >
                        Save
                    </button>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}} className={'historyDisplay'}>
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
            </Fragment>
        );
    }
}

export default RollDice;