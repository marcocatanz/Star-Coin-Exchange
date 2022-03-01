import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";


//const composeEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
  rootReducer, 
);



export default store;