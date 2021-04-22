import React from "react";
import {DownOutlined, HomeOutlined, PicLeftOutlined, PlusSquareOutlined, UserOutlined} from "@ant-design/icons"
import logo from "../img/portal-logo.svg"
import {Link} from "react-router-dom"
import "../App.css"
function SideBar({ close, open }) {
const path = window.location.pathname
  return (
	
	        <div className="sidepanel-inner d-flex flex-column">
		        
			    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
				    <ul className="app-menu list-unstyled accordion" id="menu-accordion">
					    <li className="nav-item">
					        <Link className={`nav-link ${path === "/" && 'active'}`} to="/">
						        <span className="nav-icon">
						        <HomeOutlined />
						         </span>
		                         <span className="nav-link-text">Overview</span>
					        </Link>
					    </li>
					    <li className="nav-item">
					        <Link className={`nav-link ${path === "/transactions" && 'active'}`} to="/transactions">
						        <span className="nav-icon">
								<PicLeftOutlined />
						         </span>
		                         <span className="nav-link-text">Transaction</span>
					        </Link>
					    </li>
					    <li className="nav-item">
					        <Link className={`nav-link ${path === "/addTransaction" && 'active'}`} to="/addTransaction">
						        <span className="nav-icon">
						        <PlusSquareOutlined />
						         </span>
		                         <span className="nav-link-text">Manage Transaction</span>
					        </Link>
					    </li>
					    <li className="nav-item has-submenu">
					        <a className="nav-link submenu-toggle" href="#" data-toggle="collapse" data-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
						        <span className="nav-icon">
								<UserOutlined />
						         </span>
		                         <span className="nav-link-text">User profile</span>
		                         <span className="submenu-arrow">
								 <DownOutlined />
	                             </span>
					        </a>
					        <div id="submenu-1" className="collapse submenu submenu-1" data-parent="#menu-accordion">
						        <ul className="submenu-list list-unstyled">
							        <li className="submenu-item"><Link className={`submenu-link ${path === "/profile" && 'active'}`} to="/profile">Account</Link></li>
							        <li className="submenu-item"><Link className={`submenu-link ${path === "/setting" && 'active'}`} to="/setting">Settings</Link></li>
						        </ul>
					        </div>
					    </li>
					   		    
				    </ul>
			    </nav>
				</div>
  );
}

export default SideBar;
