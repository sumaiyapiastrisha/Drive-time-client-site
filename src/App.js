import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/Shared/Footer';
import AllProducts from './components/pages/Home/Products/AllProducts';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './components/pages/Login/Register/Register';
import PrivateRoute from './components/pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder';
import MyOrders from './components/pages/Dashboard/MyOrders/MyOrders';
import ManageAllOrders from './components/pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './components/pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './components/pages/Dashboard/MakeAdmin/MakeAdmin';
import Explore from './components/pages/Home/Products/Explore';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route exact path="/home"><Home></Home></Route>
            <Route exact path="/login"><Login></Login></Route>
            <Route path="/dashboard"><Dashboard></Dashboard></Route>
            <Route exact path="/allProducts"><AllProducts></AllProducts></Route>
            <Route exact path="/register"><Register></Register></Route>
            <Route exact path="/products"><Explore></Explore></Route>
            {/* <Route exact path="/manageAllOrders"><ManageAllOrders></ManageAllOrders></Route>
            <Route exact path="/myOrders"><MyOrders></MyOrders></Route>
            <Route exact path="/makeAdmin"><MakeAdmin></MakeAdmin></Route> */}
            {/* <Route exact path="/addProduct"><AddProduct></AddProduct></Route>
            <Route exact path="/makeAdmin"><MakeAdmin></MakeAdmin></Route> 
             <Route exact path="/updateStats"><UpdateStatus></UpdateStatus></Route> */}
            <PrivateRoute path="/bikes/:_id"><PlaceOrder></PlaceOrder></PrivateRoute>

            <Route path="*"><NotFound></NotFound></Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
