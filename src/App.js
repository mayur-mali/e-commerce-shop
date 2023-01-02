import Navbar from "./components/general/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/general/About";
import AddProduct from "./pages/AddProduct";

import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
function App() {
  return (
    <div className="App font-Poppins">
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
    </div>
  );
}

export default App;
