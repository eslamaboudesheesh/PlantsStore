import '../styles/globals.scss';
import {Provider} from 'react-redux';
import store from '../redux/PlantsStore';
import 'font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
  return ( 
    <Provider store={store}>
      
  <Component {...pageProps} /> 
  </Provider>

  )
}

export default MyApp
