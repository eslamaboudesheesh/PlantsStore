import '../styles/globals.scss';
import {Provider} from 'react-redux';
import store from '../redux/PlantsStore';
import 'font-awesome/css/font-awesome.min.css';
import Layout from '../component/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return ( 
    <Provider store={store}>
        <Layout>
  <Component {...pageProps} /> 
  </Layout>
  </Provider>

  )
}

export default MyApp
