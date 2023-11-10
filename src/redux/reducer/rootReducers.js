
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import counterReducers from "./counterReducers";
import transactionReducers from "./transactionReducers";

const rootReducers = combineReducers({
  products: productReducer,
  counter: counterReducers,
  transactions: transactionReducers,
});

export default rootReducers;
