import Navbar from "./components/general/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/general/About";
import AddProduct from "./components/product/AddProduct";
import Product from "./components/product/Product";
import Checkout from "./components/product/Checkout";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Product />
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
