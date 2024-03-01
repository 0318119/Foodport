
import '../styles/globals.css'
import '../styles/basket.css'
import '../styles/Footer.css'
import '../styles/check_out.css'
import 'antd/dist/antd.css';
import '../styles/ressearch.css'
import '../styles/about.css'
import '../styles/faqs.css'
import '../styles/user_dash.css'
import '../styles/Add_Resturent.css'

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../components/app/store';
import { useDispatch } from 'react-redux';
import { login, logout } from '../components/features/UserSlice';

function MyApp({ Component, pageProps }) {

 

  return (
  <Provider store={store} >
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
