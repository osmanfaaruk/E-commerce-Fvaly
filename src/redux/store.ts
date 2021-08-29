import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type AppState = ReturnType<typeof rootReducer>;

export default store;
