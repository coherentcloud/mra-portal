import React from "react";
import Dashboard from "./views/Dashboard";
import 'antd/dist/antd.css'; 
import {
  BrowserRouter as Router
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Dashboard/>
    </Router>
 
  )
}

export default App;
