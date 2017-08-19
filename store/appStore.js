import { createStore, combineReducers } from 'redux';

import filter from './averageFilterReducer';
import students from './studentsReducer';


const reducer = combineReducers({
    filter,
    students
});

const appStore = createStore(reducer);

export default appStore;