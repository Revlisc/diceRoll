import React, { Component, Fragment} from 'react';
import Dice from "./Dice.js";


class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = {
            dice1: 'one',
            dice2: 'one',
            dice3: 'one',
            dice4: 'one',
            rolling: false
        };
        this.roll = this.roll.bind(this);

    }
    
    roll() {
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
    
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    render() {
        return(
            <Fragment>
                <Dice face={this.state.dice1} rolling={this.state.rolling}/>
                <Dice face={this.state.dice2} rolling={this.state.rolling}/>
                <Dice face={this.state.dice3} rolling={this.state.rolling}/>
                <Dice face={this.state.dice4} rolling={this.state.rolling}/>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </Fragment>
        );
    }
}

export default RollDice;