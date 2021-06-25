
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './Components/Shared/Header/Header';

import AddService from './Components/AddService/AddService';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Banner from './Components/Banner/Banner';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Order from './Components/Order/Order';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddReview from './Components/AddReview/AddReview';



export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>


        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/review">
            <AddReview></AddReview>

          </Route>

          <PrivateRoute path="/dashboard">
            <AddService></AddService>


          </PrivateRoute>

          <PrivateRoute path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>

          </PrivateRoute>

          <Route path="/order">
            <Order></Order>

          </Route>
          <Route path="/login">
            <LogIn></LogIn>

          </Route>
          <Route exact path="/">
            <Home></Home>

          </Route>


        </Switch>

      </Router>
    </UserContext.Provider>
  );



}

export default App;
