import {createStore, applyMiddleware, compose} from "redux";

import {persistStore} from "redux-persist";

// middlewares
import logger from 'redux-logger';
import thunk from "redux-thunk";
import mail from '../middlewares/mailer.middleware'

import rootReducer from './reducer-root';

const middlewares = [thunk,mail];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

export const persistor = persistStore(store);

export default {store, persistor};
