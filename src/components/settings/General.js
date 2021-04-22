import { InfoCircleOutlined } from '@ant-design/icons'
import React from 'react'
import LeftColumn from './LeftColumn'

function General() {
    return (
        
        <div className="row g-4 settings-section">
            <LeftColumn title="General"/>
	            <div className="col-12 col-md-8">
		            <div className="app-card app-card-settings shadow-sm p-4">	    
						<div className="app-card-body">
							<form className="settings-form">
								<div className="mb-3">
									<label for="setting-input-1" className="form-label">Business Name<span className="ml-2" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="This is a Bootstrap popover example. You can use popover to provide extra info."><InfoCircleOutlined /></span></label>
									<input type="text" className="form-control" id="setting-input-1" value="Lorem Ipsum Ltd." required />
									</div>
									<div className="mb-3">
									<label for="setting-input-2" className="form-label">Contact Name</label>
									<input type="text" className="form-control" id="setting-input-2" value="Steve Doe" required />
									</div>
								    <div className="mb-3">
									<label for="setting-input-3" className="form-label">Business Email Address</label>
									<input type="email" className="form-control" id="setting-input-3" value="hello@companywebsite.com" />
									</div>
									<button type="submit" className="btn app-btn-primary" >Save Changes</button>
							    </form>
						    </div>
						    
						</div>
	                </div>
                </div>
    )
}

export default General
