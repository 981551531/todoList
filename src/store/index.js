import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todoListSaga from './sagas';

/* 
 import thunk from 'redux-thunk';
const enhancer = composeEnhancers(
    applyMiddleware(thunk),

); */
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)

);

const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoListSaga);

export default store;