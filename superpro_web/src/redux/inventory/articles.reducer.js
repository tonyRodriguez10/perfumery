import * as TYPS from './articles.types';

const INITIAL_STATE = {
    articlesList: [],
};

const articlesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_ARTICLES:
            return {
                ...state,
                articlesList: action.articlesGet
            };
        case TYPS.POST_ARTICLE:
            return {
                ...state,
                articlePost: action.payload
            };
        case TYPS.PUT_ARTICLE:
            return {
                ...state,
                //articlePut: action.payload
            };
        case TYPS.DELETE_ARTICLE:
            return {
                ...state,
                //articleDelete: action.payload
            };

        default: return state;
    }

};

export default articlesReducer;