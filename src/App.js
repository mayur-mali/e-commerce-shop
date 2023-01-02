import Navbar from "./components/general/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/general/About";
import AddProduct from "./pages/AddProduct";

import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <div className="App font-Poppins">
      <Provider store={store}>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product/:productid" exact>
              <ProductDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
