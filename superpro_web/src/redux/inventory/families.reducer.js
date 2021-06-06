import * as TYPS from './families.types';

const INITIAL_STATE = {
    familiesList: [],
};

const familiesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_FAMILIES:
            return {
                ...state,
                familiesList: action.familiesGet
            };
            case TYPS.POST_FAMILY:
                return {
                    ...state,
                    familyPost: action.payload
                };
            case TYPS.PUT_FAMILY:
                return {
                    ...state,
                    //familyPut: action.payload
                };
            case TYPS.DELETE_FAMILY:
                return {
                    ...state,
                    //familyDelete: action.payload
                };

        default: return state;
    }

};

export default familiesReducer;