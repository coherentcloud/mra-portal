import React from "react"

 const ChartHead = ({title})=> {
   return(
    <div class="app-card-header p-3">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <h4 class="app-card-title">{title}</h4>
                </div>

            </div>
        </div>
   )
 }
 export default ChartHead