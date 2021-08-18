import { UserActionTypes } from '../actionTypes';

const INITIAL_STATE = {
    num: '1',
    diceHistory: [],
    rolling: false,
    isPast: false,
    //diceValues: 'one'
}

export const diceRollReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_DICE_PREVIOUS :
            return {
                ...state,
                diceHistory: action.payload,
                
            }
        default :
            return {
                ...state
            }
    }
}