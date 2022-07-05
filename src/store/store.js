import { createStore } from "redux";
import { booksReducer } from "./booksReducer";
import { inputReducer } from "./inputReducer";
import { filterReducer } from "./filterReducer";
import { singleBookReducer } from "./singleBookReducer";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  input: inputReducer,
  books: booksReducer,
  filter: filterReducer,
  bookInfo: singleBookReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
