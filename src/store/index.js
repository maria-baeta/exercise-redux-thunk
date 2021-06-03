// Importe o método applyMiddleware
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
// Importe o redux-thunk
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Aplique o middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
