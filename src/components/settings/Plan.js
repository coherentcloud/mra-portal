import React from 'react'
import { Link } from 'react-router-dom'
import LeftColumn from './LeftColumn'

function Plan() {
    return (
        <div class="row g-4 settings-section">
        <LeftColumn title="Plan"/>
        <div class="col-12 col-md-8">
		    <div class="app-card app-card-settings shadow-sm p-4">
						    
				<div class="app-card-body">
					<div class="mb-2"><strong>Current Plan:</strong> Pro</div>
						<div class="mb-2"><strong>Status:</strong> <span class="badge bg-success">Active</span></div>
							<div class="mb-2"><strong>Expires:</strong> 2030-09-24</div>
							    <div class="mb-4"><strong>Invoices:</strong> <Link to="/">view</Link></div>
							    <div class="row justify-content-between">
								    <div class="col-auto">
								        <Link class="btn app-btn-primary" to="/">Upgrade Plan</Link>
								    </div>
								    <div class="col-auto">
								        <Link class="btn app-btn-secondary" to="/">Cancel Plan</Link>
								    </div>
							    </div>  
						    </div>  
						</div>
	            </div>
        </div>
    )
}

export default Plan
