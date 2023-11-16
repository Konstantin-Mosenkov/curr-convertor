const initialState = {
    fromCurrency: 'USD',
    toCurrency: 'RUB',
    amount: 0,
    convertedAmount: 0,
    loading: false,
    error: null,
    currencyList: [],
    exchangeRate: 0,
  };


  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXCHANGE_RATE':
            return { ...state, exchangeRate: action.payload};
        case 'CURRENCY_LIST':
            return { ...state, currencyList: action.payload};
        case 'SET_FROM_CURRENCY':
            return { ...state, fromCurrency: action.payload };
        case 'SET_TO_CURRENCY':
            return { ...state, toCurrency: action.payload };
        case 'SET_AMOUNT':
            return { ...state, amount: action.payload };
        case 'SET_CONVERTED_AMOUNT':
            return { ...state, convertedAmount: action.payload};
        case 'SWAP_CURRENCIES':
            return { ...state, fromCurrency: state.toCurrency, toCurrency: state.fromCurrency, amount:state.convertedAmount, convertedAmount:state.amount }; 
        case 'CONVERT_CURRENCY':
            return { ...state, loading: true, error: null };
        case 'CONVERT_CURRENCY_SUCCESS':
            return { ...state, convertedAmount: action.payload, loading: false };
        case 'CONVERT_CURRENCY_FAILURE':
            return { ...state, error: action.payload, loading: false};
        default:
            return state;
    }
  };
  
  export default reducer;