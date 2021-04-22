import React from 'react'

function CardHeader({icon,title}) {
    return (
        <div className="app-card-header p-3 border-bottom-0">
                <div className="row align-items-center gx-3">
                    <div className="col-auto">
                        <div className="app-icon-holder">
                        {icon}
                        </div>
                        
                    </div>
                    <div className="col-auto">
                        <h4 className="app-card-title">{title}</h4>
                    </div>
                </div>
            </div>
    )
}

export default CardHeader
