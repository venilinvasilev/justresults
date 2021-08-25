import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userAuthReducer from './auth-slice';
import cartReducer from './cart-slice';

const rootReducer = combineReducers ({ userAuth: userAuthReducer, cart: cartReducer});

const rootEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, rootEnhancer);

export default store;