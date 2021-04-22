import { BuildOutlined } from '@ant-design/icons'
import React from 'react'
import CardHeader from './CardHeader'
import ChangeCard from './ChangeCard'
import {Link} from "react-router-dom"

function PreferencesCard() {
    return (
        <div className="col-12 col-lg-6">
        <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
            <CardHeader icon={<BuildOutlined />} title="Preferences" />
            <div className="app-card-body px-4 w-100">
                
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className="item-label"><strong>Language </strong></div>
                            <div className="item-data">English</div>
                        </div>
                        <div className="col text-right">
                            <Link className="btn-sm app-btn-secondary" to="/">Change</Link>
                        </div>
                    </div>
                </div>
                <ChangeCard label="Time Zone" data="Central Standard Time (UTC-6)" button="change"/>
                <ChangeCard label="Currency" data="$(Us Dollars)" button="change"/>
                <ChangeCard label="Email Subscription" data="Off" button="change"/>
                <ChangeCard label="SMS Notifications" data="On" button="change"/>
            </div>
            <div className="app-card-footer p-4 mt-auto">
               <Link className="btn app-btn-secondary" to="/">Manage Preferences</Link>
            </div>
           
        </div>
    </div>
    )
}

export default PreferencesCard
