import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home/Home';
import Products from './pages/Products/Products/Products';

import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import ProductPurchasePage from './pages/Products/ProductPurchasePage/ProductPurchasePage';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Authentication/Login/Login';
import Registration from './pages/Authentication/Registration/Registration';
import Notfound from './pages/Notfound/Notfound';

import EveryPageScrollToTop from './WindowScroll/EveryPageScrollToTop/EveryPageScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <EveryPageScrollToTop></EveryPageScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/purchase/:specificProductID">
              <ProductPurchasePage></ProductPurchasePage>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
