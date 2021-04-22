import React from "react";
import Overview from "./Overview"
import {Route, Switch, Link} from "react-router-dom"

const Main = () => {
  return (
  
    <Switch>
      <Route exact from="/" render={props => <Overview {...props}/> } />
      
    </Switch>
 
  );
};
export default Main;
