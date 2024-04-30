import Home from './routes/home/home.component';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation-bar.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <h1>I'm the shop</h1>
  )
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
