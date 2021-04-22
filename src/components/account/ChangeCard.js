import React from 'react'
import { Link } from 'react-router-dom'

function ChangeCard({label, data, button}) {
    return (
        <div className="item border-bottom py-3">
			<div className="row justify-content-between align-items-center">
				 <div className="col-auto">
					<div className="item-label"><strong>{label}</strong></div>
						<div className="item-data">{data}</div>
					</div>
					<div className="col text-right">
					    <Link className="btn-sm app-btn-secondary" to="/">{button}</Link>
				     </div>
			</div>
	    </div>
    )
}

export default ChangeCard
