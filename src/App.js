import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './components/home/Home';
import LogIn from './components/login/LogIn';
import Register from './components/login/Register';
import LogOut from './components/login/LogOut';

const NotFound = () => {
  return (
    <>
      <h1>Strona nie istnieje</h1>
      <Link to='/'>Home</Link>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/logowanie' component={LogIn} />
        <Route path='/rejestracja' component={Register} />
        <Route path='/wylogowano' component={LogOut} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
