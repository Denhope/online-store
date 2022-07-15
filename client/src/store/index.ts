import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
