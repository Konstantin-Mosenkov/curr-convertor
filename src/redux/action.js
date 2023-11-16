export const currencyList = (currencyList) => ({
    type: 'CURRENCY_LIST',
    payload: currencyList,
});

export const setFromCurrency = (fromCurrency) => ({
  type: 'SET_FROM_CURRENCY',
  payload: fromCurrency,
});

export const setToCurrency = (toCurrency) => ({
  type: 'SET_TO_CURRENCY',
  payload: toCurrency,
});

export const setAmount = (amount) => ({
  type: 'SET_AMOUNT',
  payload: amount,
});

export const swapCurrencies = () => ({
  type: 'SWAP_CURRENCIES',
});

export const convertCurrency = () => ({
  type: 'CONVERT_CURRENCY',
});



