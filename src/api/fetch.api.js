export const getCurrencyList = async () => {
    try {
      const response = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '969db28251msh20263f48783676ap1b312cjsn88b4c2a5d43c',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  }

export const getExchangeRate = async(from, to) => {
    try {
    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=1`
  const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '969db28251msh20263f48783676ap1b312cjsn88b4c2a5d43c',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  }
};

const response = await fetch(url, options)
const data = await response.json();
      return data;
    }  catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
      }
} 