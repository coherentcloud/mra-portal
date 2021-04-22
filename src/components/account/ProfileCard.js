import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import userProfile from "../../img/profile-1.png"
import ChangeCard from './ChangeCard'

function ProfileCard() {
    return (
        <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
						    <div className="app-card-header p-3 border-bottom-0">
						        <div className="row align-items-center gx-3">
							        <div className="col-auto">
								        <div className="app-icon-holder">
										    <UserOutlined style={{fontSize:"1em"}}/>
									    </div>
							        </div>
							        <div className="col-auto">
								        <h4 className="app-card-title">Profile</h4>
							        </div>
						        </div>
						    </div>
						    <div className="app-card-body px-4 w-100">
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label mb-2"><strong>Photo</strong></div>
										    <div className="item-data"><img className="profile-image" src={userProfile} alt="" /></div>
									    </div>
									    <div className="col text-right">
										    <Link className="btn-sm app-btn-secondary" to="/">Change</Link>
									    </div>
								    </div>
							    </div>
							    <ChangeCard label="Name" data="Guillermo" button="change"/>
							    <ChangeCard label="Email" data="james.doe@website.com" button="change"/>
							    <ChangeCard label="Website" data=" https://johndoewebsite.com" button="change"/>
							    <ChangeCard label="Location" data="New York" button="change"/>
						    </div>
						    <div className="app-card-footer p-4 mt-auto">
							   <Link className="btn app-btn-secondary" to="/">Manage Profile</Link>
						    </div>
						   
						</div>
	                </div>
    )
}

export default ProfileCard
