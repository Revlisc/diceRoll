import { createStore } from 'redux';
import { userReducer } from './loginReducer';
import { diceRollReducer } from './diceRollRedux/diceRollReducer';

const store = createStore(userReducer, diceRollReducer);

export default store;