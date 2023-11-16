import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './fromSelectCountry.module.css';

function FromSelectCountry() {
  const {fromCurrency, toCurrency, amount, convertedAmount, currencyList} = useSelector((store) => store)
  const dispatch = useDispatch();

  const onSelect = (e) =>{
    dispatch({type: 'SET_FROM_CURRENCY', payload: e.target.value})
    }


  return (
    <div>
      <select onChange={onSelect} className={styles.country}>
      {currencyList.map(el => {
      if(el == fromCurrency){
        return <option selected key={el} value={el}>{el}</option>
      }else {
        return <option key={el} value={el}>{el}</option>
      }
        })}
      </select>
    </div>
  )
}

export default FromSelectCountry;