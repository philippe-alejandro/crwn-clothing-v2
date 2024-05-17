import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation-bar.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CartCheckout from './routes/cart-checkout/cart-checkout.component';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />}/>
        <Route path='authentication' element={<Authentication />} />
        <Route path='cart-checkout' element={<CartCheckout />} />
      </Route>
    </Routes>
  )
}

export default App;
