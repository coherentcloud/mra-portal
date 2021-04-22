import React from 'react'
import { Link } from 'react-router-dom'
import LeftColumn from './LeftColumn'

function Notification() {
    return (
        <div className="row g-4 settings-section">
        <LeftColumn title="Notifications"/>
        <div className="col-12 col-md-8">
		    <div className="app-card app-card-settings shadow-sm p-4">
						    
            <div className="app-card-body">
							    <form className="settings-form">
								    <div className="form-check form-switch mb-3">
										<input className="form-check-input" type="checkbox" id="settings-switch-1" checked />
										<label className="form-check-label" for="settings-switch-1">Project notifications</label>
									</div>
									<div className="form-check form-switch mb-3">
										<input className="form-check-input" type="checkbox" id="settings-switch-2" />
										<label className="form-check-label" for="settings-switch-2">Web browser push notifications</label>
									</div>
									<div className="form-check form-switch mb-3">
										<input className="form-check-input" type="checkbox" id="settings-switch-3" checked />
										<label className="form-check-label" for="settings-switch-3">Mobile push notifications</label>
									</div>
									<div className="form-check form-switch mb-3">
										<input className="form-check-input" type="checkbox" id="settings-switch-4" />
										<label className="form-check-label" for="settings-switch-4">Lorem ipsum notifications</label>
									</div>
									<div className="form-check form-switch mb-3">
										<input className="form-check-input" type="checkbox" id="settings-switch-5" />
										<label className="form-check-label" for="settings-switch-5">Lorem ipsum notifications</label>
									</div>
									<div className="mt-3">
									    <button type="submit" className="btn app-btn-primary" >Save Changes</button>
									</div>
							    </form>
						    </div>
	            </div>
                </div>
        </div>
    )
}

export default Notification
