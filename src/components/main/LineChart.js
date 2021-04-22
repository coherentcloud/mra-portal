import React from "react"
import ChartHead from "./ChartHead"

 const LineChart = ({barChart,lineChart, title})=> {
   return(
    <div class="col-12 col-lg-6">
    <div class="app-card app-card-chart h-100 shadow-sm">
        <ChartHead title={title} />
        <div class="app-card-body p-3 p-lg-4">
            <div class="mb-3 d-flex">   
                <select class="form-select form-select-sm ml-auto d-inline-flex w-auto">
                    <option value="1" selected>This week</option>
                    <option value="2">Today</option>
                    <option value="3">This Month</option>
                    <option value="3">This Year</option>
                </select>
            </div>
            <div class="chart-container">
                {barChart && <canvas id="canvas-barchart" ></canvas>}
                {lineChart && <canvas id="canvas-linechart" ></canvas>}
            </div>
        </div>
    </div>
</div>
   )
 }
 export default LineChart