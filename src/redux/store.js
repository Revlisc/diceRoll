import { createStore } from 'redux';
import { userReducer } from './loginReducer';

const store = createStore(userReducer);

export default store;