import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getExchangeRate } from '../../api/fetch.api';
import styles from './selectCountry.module.css';

function SelectCountry() {
  const {fromCurrency, toCurrency, amount, convertedAmount, currencyList} = useSelector((store) => store);
  const dispatch = useDispatch();


  const onSelect = (e) => {
    dispatch({type: 'SET_TO_CURRENCY', payload: e.target.value})
  }

  useEffect(()=>{
    getExchangeRate(fromCurrency,toCurrency).then(data => {
    dispatch({type:'SET_EXCHANGE_RATE', payload: Number(data)})
    })
    },[fromCurrency, toCurrency]);

  return (
    <div>
      <select onChange={onSelect} className={styles.country}>
      {currencyList.map(el => {
        if(el == toCurrency){
          return <option selected key={el} value={el}>{el}</option>
        } else {
          return <option key={el}  value={el}>{el}</option>
        }
        })}
      </select>
    </div>
  )
}

export default SelectCountry;