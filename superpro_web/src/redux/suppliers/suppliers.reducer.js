import * as TYPS from './suppliers.types';

const INITIAL_STATE = {
    suppliersList: [],
    supplierTypesList: [],
    allCxPList: [],
};

const suppliersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_SUPPLIERS:
            return {
                ...state,
                suppliersList: action.suppliersGet
            };
        case TYPS.POST_SUPPLIERS:
                return {
                    ...state,
                    suppliersPost: action.payload
                };
        case TYPS.GET_SUPPLIERS_TYPES:
            return {
                ...state,
                supplierTypesList: action.supplierTypesGet
            };
        case TYPS.POST_SUPPLIERS_TYPES:
                return {
                    ...state,
                    suppliersPost: action.payload
                };
        case TYPS.GET_ALL_CXP:
            return {
                ...state,
                allCxPList: action.allCxPGet
            };
        case TYPS.POST_CXP:
                return {
                    ...state,
                    cxPPost: action.payload
                };

        default: return state;
    }

};

export default suppliersReducer;