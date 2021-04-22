import React from 'react'
import { Link } from 'react-router-dom'

function LeftColumn({title, desc}) {
    return (
        <div className="col-12 col-md-4">
            <h3 className="section-title">{title}</h3>
            <div className="section-intro">Settings section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.    
              <Link to="/">Learn more</Link>
            </div>
        </div>
    )
}

export default LeftColumn
