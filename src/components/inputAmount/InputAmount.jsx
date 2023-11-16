import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './inputAmount.module.css';


function InputAmount() {
  const {fromCurrency, toCurrency, amount, convertedAmount, currencyList, exchangeRate} = useSelector((store) => store)
  const dispatch = useDispatch();
  

  const onChange = (e) =>{
    console.log(amount, convertedAmount, exchangeRate);
    dispatch({type:'SET_AMOUNT', payload: Number(e.target.value)})
    dispatch({type:'SET_CONVERTED_AMOUNT', payload: Number(e.target.value)*Number(exchangeRate)})
    }

  return (
    <div className={styles.currow}>
      <span>Amount</span>
      <input onChange={onChange} value={amount} className={styles.input} type="number" placeholder=""/>
    </div>
  )
}

export default InputAmount;