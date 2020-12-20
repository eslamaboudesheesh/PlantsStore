import {createStore} from 'redux';
import rootReducer  from './reducers/PlantsReducers';
const store = createStore(rootReducer );

export default store;

