

const initialState = {
    transactions: [],
  };
  
  const transactionReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
        };
      case 'UPDATE_TRANSACTION':
        
        const updatedTransaction = action.payload;
        
        const transactionIndex = state.transactions.findIndex(
          (transaction) => transaction.id === updatedTransaction.id
        );
        
        if (transactionIndex !== -1) {
          const updatedTransactions = [...state.transactions];
          updatedTransactions[transactionIndex] = updatedTransaction;
          return {
            ...state,
            transactions: updatedTransactions,
          };
        } else {
          return {
            ...state,
            transactions: [...state.transactions, updatedTransaction],
          };
        }
      case 'GET_TRANSACTIONS':
        return state;
      case 'CLEAR_TRANSACTIONS':
        return {
          ...state,
          transactions: [],
        };
      default:
        return state;
    }
  };
  
  export default transactionReducers;
  