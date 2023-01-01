import Navbar from "./components/general/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/general/About";
import AddProduct from "./components/product/AddProduct";

import Checkout from "./components/product/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./components/product/ProductDetails";
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
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
