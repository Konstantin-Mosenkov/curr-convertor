import React from 'react';
import styles from './inputConvertedAmount.module.css';
import { useDispatch, useSelector } from 'react-redux';

function InputConvertedAmount() {

  const {fromCurrency, toCurrency, amount, convertedAmount, currencyList, exchangeRate} = useSelector((store) => store)
  const dispatch = useDispatch();

  const onChange = (e) =>{
    dispatch({type:'SET_CONVERTED_AMOUNT', payload: Number(e.target.value)})
    dispatch({type:'SET_AMOUNT', payload: Number(e.target.value)/Number(exchangeRate)})
    }

  return (

    <div className={styles.currow}>
      <span>Converted amount</span>
      <input onChange={onChange} value={convertedAmount} className={styles.input} type="number" placeholder="Converted amount"/>
    </div>
  )
}

export default InputConvertedAmount;