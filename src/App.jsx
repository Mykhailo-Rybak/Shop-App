import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Container} from "react-bootstrap";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";

const App = () => {

  return (
      <BrowserRouter>
          <Header/>
          <Container className='mt-3'>
              <Switch>
                  <Route exact path="/" component={ProductsList}/>
                  <Route path="/cart" component={Cart}/>
              </Switch>
          </Container>
      </BrowserRouter>
  )
}

export default App
