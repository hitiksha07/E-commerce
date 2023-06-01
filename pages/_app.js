import Footer from '@/components/Footer';
import NavbarCom from '@/components/NavbarCom';
import { store, wrapper } from '@/redux/Store/store';
import { getCartsApi } from '@/redux/action/cartsAction';
import { getLoginApi } from '@/redux/action/loginAction';
import { getproductApi } from '@/redux/action/productAction';
import { getuserApi } from '@/redux/action/userAction';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartsApi())
    dispatch(getuserApi())
    dispatch(getLoginApi())
    dispatch(getproductApi())
  }, [])
  return <>
    <Provider store={store}>
      <NavbarCom />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
}
export default wrapper.withRedux(App)





//  function App({ Component, pageProps,store }) {
//   return <>
//     <Provider store={store} context={StoreContext}>
//       <NavbarCom />
//       <Component {...pageProps} />
//       <Footer />
//     </Provider>
//   </>
// }
// export default wrapper.withRedux(App)
// const App = ({Component, ...rest}) => {
//   const {store, props} = wrapper.useWrappedStore(rest);
//   return (
//       <Provider store={store}>
//               <Component {...props.pageProps} />
//       </Provider>
//   )
// }
// export default App
