import React from 'react';
import { useEffect } from 'react';
import InputAmount from '../inputAmount/InputAmount';
import InputConvertedAmount from '../inputConvertedAmount/InputConvertedAmount';
import SelectCountry from '../selectCountry/SelectCountry';
import FromSelectCountry from '../fromSelectCountry/FromSelectCountry';
import SwitchCurrency from '../switchCurrency/SwitchCurrency';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrencyList } from '../../api/fetch.api';
import styles from './converter.module.css';

function Converter() {
  const dispatch = useDispatch();
  const {fromCurrency, toCurrency, amount, convertedAmount, currencyList} = useSelector((store) => store)

  useEffect(() => { 
    getCurrencyList().then((data) => dispatch({type: 'CURRENCY_LIST', payload:data})).catch((err) => alert(err.message))
      }, []);

      

  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <h1 >Currancy converter</h1>
        </div>

        <div>
          <h3>Check live rates, set rate alerts, receive notifications and more.</h3>  
        </div>
 
        <div className={styles.block}>
          <div className={styles.first_block}>
            <FromSelectCountry />
            <InputAmount />
          </div>
          <div className={styles.create_line}>
            <SwitchCurrency/>
          </div>
          <div className={styles.second_block}>
            <SelectCountry />
            <InputConvertedAmount />
          </div> 
        </div>

        <div className={styles.rate}>
          <h3>Indicative Exchange Rate</h3>
        </div>
    </div>
  )
}

export default Converter;