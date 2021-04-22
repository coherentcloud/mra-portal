import React from "react";
import {Layout} from "antd"
import Navbar from "./Navbar";
import logo from "../img/portal-logo.svg"
import {Link} from "react-router-dom"
import Routes from "../Routes";
import "./dashboard.css"
import SideMenu from "../components/sidebar/Menu";
export default function Dashboard() {

  const {Header, Sider,Content, Footer} = Layout
  const [width, setWidth] = React.useState(250)
  
  return (
    <Layout>
    <Sider
      width={width}
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(colp,type) => {colp ? setWidth('0') : setWidth(250)}}
      style={{position:"fixed",left:0,height:"100vh", borderRight:"2px solid #ebe8ef", boxShadow:"rgb(0 0 0 / 5%) 0px 8px 15px"}}
      theme="light"
    >
      <div className=" app-branding" >
      <a className="app-logo" href="index.html"><img className="logo-icon mr-2" src={logo} alt="logo" /><span className="logo-text">PORTAL</span></a>
      </div>
      <SideMenu />
    </Sider>
    <Layout style={{ marginLeft: width }}>
      <Header className="site-layout-sub-header-background py-2 pl-5" style={{ padding: 0, backgroundColor:"#fff" }} >
      <Navbar />
      </Header>
      
      <Content style={{backgroundColor:"#f5f6fe" }} className=" pt-3 p-md-3 p-lg-4">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div class="container-xl"> 
        <Routes />
        </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Mra Portal ©2021 | healthcare benefits consumer portal</Footer>
    </Layout>
  </Layout>
      );
}
