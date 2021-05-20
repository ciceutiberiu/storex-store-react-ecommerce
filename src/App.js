import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  SingleProduct,
  Products,
  Checkout,
  Error,
  About,
  Cart,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id" children={<SingleProduct />} exact />
          <PrivateRoute path="/checkout" exact>
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
