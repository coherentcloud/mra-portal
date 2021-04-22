import React from 'react'
import { Link } from 'react-router-dom'
import LeftColumn from './LeftColumn'

function DataPrivacy() {
    return (
        <div className="row g-4 settings-section">
        <LeftColumn title="Data & Privacy"/>
        <div className="col-12 col-md-8">
		    <div className="app-card app-card-settings shadow-sm p-4">
						    
            <div className="app-card-body">
							    <form className="settings-form">
								    <div className="form-check mb-3">
										<input className="form-check-input" type="checkbox" value="" id="settings-checkbox-1" checked />
										<label className="form-check-label" for="settings-checkbox-1">
										    Keep user app activity history
										</label>
									</div>
									<div className="form-check mb-3">
									    <input className="form-check-input" type="checkbox" value="" id="settings-checkbox-2" checked />
										<label className="form-check-label" for="settings-checkbox-2">
										    Keep user app preferences
										</label>
									</div>
									<div className="form-check mb-3">
									    <input className="form-check-input" type="checkbox" value="" id="settings-checkbox-3" />
										<label className="form-check-label" for="settings-checkbox-3">
										    Keep user app search history
										</label>
									</div>
									<div className="form-check mb-3">
									    <input className="form-check-input" type="checkbox" value="" id="settings-checkbox-4" />
										<label className="form-check-label" for="settings-checkbox-4">
										    Lorem ipsum dolor sit amet
										</label>
									</div>
									<div className="form-check mb-3">
									    <input className="form-check-input" type="checkbox" value="" id="settings-checkbox-5" />
										<label className="form-check-label" for="settings-checkbox-5">
										    Aenean quis pharetra metus
										</label>
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

export default DataPrivacy
