
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Checkout from './Components/Checkout/Checkout';
import Login from './Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';
import AddNew from './Components/Admin/AddNew';
import Manage from './Components/Admin/Manage';
import NotFound from './NotFound/NotFound';



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/checkout/:id">
          <Checkout/>
        </PrivateRoute>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/admin/:loggedInUser.email">
        <Admin/>
        </PrivateRoute>
        <Route path="/addNew">
          <AddNew/>
        </Route>
        <Route path="/manage">
          <Manage/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
  </Router>  
  </UserContext.Provider>
          
  );
}

export default App;
