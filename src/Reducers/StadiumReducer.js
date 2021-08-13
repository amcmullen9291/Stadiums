  
import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    entries: [],
};

export const IndexReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_STADIUMS:
            return { ...state, entries: payload};
        default:
            return state
    }
};

export const StadiumReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_STADIUM:
            return { ...state, ...payload};
        default:
            return state;
    }
}