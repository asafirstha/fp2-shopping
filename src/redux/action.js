
import { ActionTypes } from "./actionType";

const {
  UPDATE_PRODUCT_COUNTER,
  SET_CHECKOUT,
  INCREMENT,
  DECREMENT,
  SET_PRODUCTS,
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  CLEAR_TRANSACTIONS,
} = ActionTypes;


 

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const getTransactions = () => ({
  type: GET_TRANSACTIONS,
});

export const clearTransactions = () => ({
  type: CLEAR_TRANSACTIONS,
});

export function increment(id) {
  const payload = {
    id: id,
    updateType: INCREMENT,
  };
  return { type: UPDATE_PRODUCT_COUNTER, payload };
}

export function decrement(id) {
  const payload = {
    id: id,
    updateType: DECREMENT,
  };
  return { type: UPDATE_PRODUCT_COUNTER, payload };
}

export function setProducts(products) {
  return { type: SET_PRODUCTS, payload: products };
}

export function checkout() {
  console.log("This function has been called");
  return { type: SET_CHECKOUT };
}

export const updateTransaction = (transactionData) => ({
  type: ActionTypes.UPDATE_TRANSACTION,
  payload: transactionData,
});




