import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './components/home/Home.js'


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
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
