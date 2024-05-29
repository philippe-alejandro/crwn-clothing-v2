import { compose, legacy_createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleWare = (store) => (next) => (action) => {
    console.log('action type: ', action.type);
    console.log('action payload: ', action.payload);
    console.log('current store state: ', store.getState());

    next(action);

    console.log('next store state: ', store.getState());
};

const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = legacy_createStore(rootReducer, undefined, composedEnhancers);
