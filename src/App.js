import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductsList from './pages/ProductsList'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Logout from './components/logout/Logout'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/:category" component={ProductsList} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App