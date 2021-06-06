import * as TYPS from './clients.types';

const INITIAL_STATE = {
    clientsList: [],
    clientTypesList: [],
    allCxcList: [],
};

const clientsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_CLIENTS:
            return {
                ...state,
                clientsList: action.clientsGet
            };
        case TYPS.POST_CLIENT:
                return {
                    ...state,
                    clientPost: action.payload
                };
        case TYPS.GET_CLIENT_TYPES:
            return {
                ...state,
                clientTypesList: action.clientTypesGet
            };
        case TYPS.POST_TYPECLIENT:
                return {
                    ...state,
                    clientPostType: action.payload
                };
        case TYPS.GET_ALL_CXC:
                return {
                    ...state,
                    allCxcList: action.allCxcGet
                };

        default: return state;
    }

};

export default clientsReducer;