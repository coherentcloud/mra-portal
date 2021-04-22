import React from "react"
import {MenuOutlined} from "@ant-design/icons"

 const Searchbar = ()=> {
   return(
     <>
              <div className="search-mobile-trigger d-sm-none col">
			            <i className="search-mobile-trigger-icon fas fa-search"></i>
			        </div>
		            <div className="app-search-box col">
		                <form className="app-search-form">   
							<input type="text" placeholder="Search..." name="search" className="form-control search-input" />
							<button type="submit" className="btn search-btn btn-primary" value="Search"><i className="fas fa-search"></i></button> 
				        </form>
		            </div>
        </>
   )
 }
 export default Searchbar