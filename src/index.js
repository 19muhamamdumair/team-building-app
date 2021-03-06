import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import TeamsReducer from "./Redux/Reducers/TeamsReducer";
import MembersReducer from "./Redux/Reducers/MembersReducer";
import thunk from "redux-thunk";
import TodoReducer from "./Redux/Reducers/TodoReducer";
import UserRoleReducer from './Redux/Reducers/UserRoleReducer'

const container = document.getElementById("root");
const root = createRoot(container);
const rootReducer = combineReducers({
  team: TeamsReducer,
  member: MembersReducer,
  todo: TodoReducer,
  role:UserRoleReducer
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[MidlleWare] Dispatching", action);
      const result = next(action);
      console.log("[MiddleWare] next state", store.getState());
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
