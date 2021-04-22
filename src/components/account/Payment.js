import { PicRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import ChangeCard from './ChangeCard'

function Payment() {
    return (
        <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
						    <CardHeader icon={<PicRightOutlined />} title="Payment Method"/>
						    <div className="app-card-body px-4 w-100">
							    <ChangeCard label="Credit/Debit Card" data="1234*******5678" button="Edit"/>
							    <ChangeCard label="Paypal" data="Not Connected" button="connect"/>
						    <div className="app-card-footer p-4 mt-auto">
							   <Link className="btn app-btn-secondary" href="#">Manage Payment</Link>
						    </div>
						   </div>
						</div>
	                </div>
    )
}

export default Payment
