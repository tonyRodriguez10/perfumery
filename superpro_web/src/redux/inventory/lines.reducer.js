import * as TYPS from './lines.types';

const INITIAL_STATE = {
    linesList: [],
};

const linesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_LINES:
            return {
                ...state,
                linesList: action.linesGet
            };
        case TYPS.POST_LINE:
            return {
                ...state,
                linePost: action.payload
            };
        case TYPS.PUT_LINE:
            return {
                ...state,
                //linePut: action.payload
            };
        case TYPS.DELETE_LINE:
            return {
                ...state,
                //lineDelete: action.payload
            };

        default: return state;
    }

};

export default linesReducer;