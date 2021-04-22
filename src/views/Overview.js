import React,{ useContext }  from "react";
import Card from "../components/main/Card"
import LineChart from "../components/main/LineChart";
import { GlobalContext } from "../context/GlobalState";

const Overview = ()=> {
    const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);
return(
   
        <>
          <h1 class="app-page-title">Overview</h1>
          <div class="row g-4 mb-4">
            <Card type="INCOME" figure={income}/>
            <Card type="EXPENSE" figure={expense}/>
            <Card type="BALANCE" figure={balance}/>

          </div>
          <div class="row g-4 mb-4">
			        <LineChart barChart title="Bar Chart Example"/>
              <LineChart lineChart title="LineChart Example"/>
          </div>
        </>
    
  )

}
export default Overview