import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import {Provider} from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
