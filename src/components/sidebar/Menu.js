import React from "react"
import { Menu } from 'antd';
import {HomeOutlined, PicLeftOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";
import {useHistory} from "react-router-dom"
const { SubMenu } = Menu;


const SideMenu = ()=> {
    const history = useHistory()
    const menudata = [
        {
            title:"Overview",
            icon:<HomeOutlined className="nav-icon"/>,
            key:"/",
        },
        {
            title:"Transactions",
            icon:<PicLeftOutlined className="nav-icon"/>,
            key:"/transactions",
        },
        {
            title:"Add Transaction",
            icon:<PlusSquareOutlined className="nav-icon"/>,
            key:"/addTransaction",
        },
        {
            title:"User Profile",
            icon:<UserOutlined />,
            key:"sub1",
            subItems:[
                {
                    subTitle:"Account",
                    key:"/profile",
                },
                {
                    subTitle:"Setting",
                    key:"/setting",
                },
            ]
        }
    ]
    return(
        <Menu mode="inline" defaultSelectedKeys={['/']} onClick={(e)=>history.push(e.key)}>
           { menudata.map(menu => {
               const {key, title, icon, subItems}  = menu
               return(
                   subItems? 
                    <SubMenu key={key} icon={icon} title={title}  className="submenu-list list-unstyled">  
                    {subItems.map( submenu => 
                    {const {subTitle, key} = submenu;
                    return(
                        <MenuItem key={key} className="submenu-item" >{subTitle}</MenuItem>
                    )}

                    )}
                    </SubMenu>
                     :
                <Menu.Item key={key} icon={icon} className="nav-item" ><span className="nav-link-text">{title}</span></Menu.Item>
                    
               )}
           )}
    </Menu>
    )
}
export default SideMenu