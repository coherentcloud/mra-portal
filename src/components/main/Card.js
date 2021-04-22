import React from "react"
import {LoadingOutlined } from "@ant-design/icons"
import {Link} from "react-router-dom"

 const Card = ({type,figure})=> {
   return(
    <div class="col-6 col-lg-4 ">
					    <div class="app-card app-card-stat shadow-sm h-100">
						    <div class="app-card-body p-3 p-lg-6">
							    <h4 class="stats-type mb-1">{type}</h4>
							    <div class="stats-figure">${figure?figure:<LoadingOutlined />}</div>
							    
						    </div>
						    <Link class="app-card-link-mask" to="/"></Link>
					    </div>
				    </div>
   )
 }
 export default Card