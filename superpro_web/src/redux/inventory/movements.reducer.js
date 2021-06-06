import * as TYPS from './movements.types';

const INITIAL_STATE = {
    movementsList: [],
};

const locationsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_MOVEMENTS:
            return {
                ...state,
                movementsList: action.movementsGet
            };
        case TYPS.POST_MOVEMENTS:
            return {
                ...state,
                movementsPost: action.payload
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