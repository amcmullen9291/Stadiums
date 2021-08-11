import { ActionTypes } from '../Constants/Action.type';

export const setStadiumList = (list) => {
    return {
        type: ActionTypes.SET_STADIUMS,
        payload: list
    }
}

export const selectesStadium = (venue) => {
    return {
        type: ActionTypes.SELECTED_STADIUM,
        payload: venue
    }
}
