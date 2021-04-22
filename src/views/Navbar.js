import React from "react";
import {Menu, Row, Col,Avatar, Dropdown} from "antd"
import {ArrowLeftOutlined ,ArrowRightOutlined, CaretDownOutlined, SettingTwoTone } from "@ant-design/icons"
import {Link} from "react-router-dom"
import userProfile from "../img/profile-1.png"
import Searchbar from "../components/navbar/searchbar"
import {useHistory} from "react-router-dom"

const Navbar = () => {
  const history = useHistory()
const menu = (
    <Menu>
      <Menu.Item key="0" onClick={()=>history.push("/profile")}>
         Account
      </Menu.Item>
      <Menu.Item key="1" onClick={()=>history.push("/setting")}>
        Setting
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={()=>history.push("/")}>
        Log out
      </Menu.Item>
    </Menu>
  );
  return (
	<Row align="top">
	<Col flex="auto">
	  <Searchbar />
	</Col>
	<Col  xs={2} lg={2}>
	  
	 <Link> <SettingTwoTone twoToneColor="#15a362" style={{fontSize:20,}}/> </Link>
	</Col>
	<Col xs={2} lg={2}>
	  <Dropdown overlay={menu} placement="bottomLeft">
		<Link className="ant-dropdown-link">
	  <Avatar src={userProfile} /><CaretDownOutlined />
	  </Link>
	  </Dropdown>
	</Col>
  </Row>
  );
};
export default Navbar;
