import { Provider } from 'react-redux';
import Converter from '../converter/Converter';
import store from '../../redux/store'
import './App.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Converter />
    </div>
    </Provider>
  );
}

export default App;
