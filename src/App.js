import './App.css';
import Header from "./containers/header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import ProductComponent from './containers/productComponent';
import ProductDetails from './containers/productDetails';
import ProductListing from './containers/productListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route> 404 error</Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
