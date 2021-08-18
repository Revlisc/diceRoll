import { createStore, combineReducers } from 'redux';
import { userReducer } from './loginReducer';
import { diceRollReducer } from './diceRollRedux/diceRollReducer';

const rootReducer = combineReducers({
    user: userReducer,
    dice: diceRollReducer
})
const store = createStore(rootReducer);

export default store;