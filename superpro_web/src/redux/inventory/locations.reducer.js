import * as TYPS from './locations.types';

const INITIAL_STATE = {
    locationsList: [],
};

const locationsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_LOCATIONS:
            return {
                ...state,
                locationsList: action.locationsGet
            };
        case TYPS.POST_LOCATION:
            return {
                ...state,
                locationPost: action.payload
            };
        case TYPS.PUT_LOCATION:
            return {
                ...state,
                //locationPut: action.payload
            };
        case TYPS.DELETE_LOCATION:
            return {
                ...state,
                //locationDelete: action.payload
            };

        default: return state;
    }

};

export default locationsReducer;