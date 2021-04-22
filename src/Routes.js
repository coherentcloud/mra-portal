import React from "react"
import {Route, Switch} from "react-router-dom"
import Overview from "./views/Overview"
import Transactions from "./views/Transactions"
import AddTransaction from "./views/AddTransaction"
import NotFound from "./views/NotFound"
import Account from "./views/userprofile/Account"
import Setting from "./views/userprofile/Setting"

 const Routes = ()=> {
   return (
       <Switch>
           <Route path="/" exact render={props=> <Overview {...props} />} />
           <Route path="/transactions" exact render={props=> <Transactions {...props} />} />
           <Route path="/addtransaction" exact render={props=> <AddTransaction {...props} />} />
           <Route path="/profile" exact render={props=> <Account {...props} />} />
           <Route path="/setting" exact render={props=> <Setting {...props} />} />
           <Route path="/*" exact render={props=> <NotFound {...props} />} />
       </Switch>
   )
 }
 export default Routes