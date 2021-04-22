import { IssuesCloseOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import ChangeCard from './ChangeCard'

function SecuirityCard() {
    return (
        <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                            <CardHeader icon={<IssuesCloseOutlined />} title="Security" />
						    <div className="app-card-body px-4 w-100">
							    
							    <ChangeCard label="password" data="••••••••" button="change"/>
                                <ChangeCard label="Two-Factor Authentication" data="You haven't set up two-factor authentication." button="setup"/>
						    </div>
						    
						    <div className="app-card-footer p-4 mt-auto">
							   <Link className="btn app-btn-secondary" href="#">Manage Security</Link>
						    </div>
						   
						</div>
	                </div>
    )
}

export default SecuirityCard
