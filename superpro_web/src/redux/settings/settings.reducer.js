import * as TYPS from './settings.types';

const INITIAL_STATE = {
    usersList: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_USER:
            return {
                ...state,
                usersList: action.usersGet
            };
        case TYPS.POST_USER:
                return {
                    ...state,
                    userPost: action.payload
                };

        default: return state;
    }

};

export default usersReducer;