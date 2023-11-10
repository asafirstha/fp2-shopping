const initialState = {
    transactions: [],
  };
  
  const transactionReducers = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TRANSACTION:
        return {
          ...state,
          transactions: [...state.transactions, ...action.payload],
        };
      case 'GET_TRANSACTIONS':
       
        return state;
      case 'CLEAR_TRANSACTIONS':
        return {
          ...state,
          transactions: [],
        };
      case 'UPDATE_TRANSACTION':
     
        return state;
      default:
        return state;
    }
  };
  
  export default transactionReducers;
  