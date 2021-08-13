import { combineReducers } from 'redux';
import { IndexReducer, StadiumReducer } from './StadiumReducer';

const RootReducer = combineReducers({
    StadiumList: IndexReducer,
    Stadium: StadiumReducer
});

export default RootReducer;