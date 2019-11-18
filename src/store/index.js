import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
//configure your store

export default store;