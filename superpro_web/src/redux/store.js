import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';//optional for debbugging
import rootReducer from './rootReducer';//1

const composeEnhancer = composeWithDevTools || compose;
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));//2

export default store;


/* const initialState = { sidebarShow: 'responsive' }
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}
const store = createStore(changeState) */