import React from "react"
import ChartHead from "./ChartHead"

 const BarChart = ()=> {
   return(
    <div className="col-12 col-lg-6">
    <div className="app-card app-card-chart h-100 shadow-sm">
        <ChartHead title="Bar Chart Example" />
        <div className="app-card-body p-3 p-lg-4">
            <div className="mb-3 d-flex">   
                <select className="form-select form-select-sm ml-auto d-inline-flex w-auto">
                    <option value="1" selected>This week</option>
                    <option value="2">Today</option>
                    <option value="3">This Month</option>
                    <option value="3">This Year</option>
                </select>
            </div>
            <div className="chart-container">
                <canvas id="canvas-barchart" ></canvas>
            </div>
        </div>
    </div>
</div>
   )
 }
 export default BarChart