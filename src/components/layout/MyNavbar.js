import React from "react";
import { NavLink } from "react-router-dom";
import Tim from '../../css/TimRosso.png';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import '../../css/MyNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavbar = () => { 
  return (
    <>
  <Navbar expand="lg" style={{backgroundColor:'#1b3e81', height:'90px', color:'white'}}>
    <Navbar.Brand to="/">
        
          <img
            alt="Tim logo"
            src={Tim}
            width="95"
            height="26"
            className="d-inline-block align-top mr-4"
          />
        
    </Navbar.Brand>
    <h4 className='monitorqueue-title'>
       Provisioning Monitoring Tool
     </h4>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white'}}/>
  <Navbar.Collapse id="basic-navbar-nav" style={{color:'white'}}>
    <Nav className="mr-auto" style={{color:'white'}}>
      <NavLink className="nav-link ml-2" style={{color:'white', fontSize:'1rem'}} exact to='/'>HOME</NavLink> 
      <NavDropdown title="MONITORING" id="basic-nav-dropdown" className='ml-3 down'>   
     {/*  <NavDropdown.Item href='/dn-monitor' style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500'}}>DN MONITOR</NavDropdown.Item> */}
     <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/dn-monitor'>DN MONITOR</NavLink><br/>
     <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500',  padding:'3px'}} to='/rao-gas'>RAO GAS</NavLink><br/>
     <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/skill-stat-monitor'>SKILL STAT</NavLink><br/>

        <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/queue-monitor'>QUEUE MONITOR</NavLink><br/>
        <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/code-stat-monitor'>CODE STAT </NavLink><br/>
        <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/chat-monitor'>CHAT MONITOR</NavLink><br/>
        <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/email-monitor'>EMAIL MONITOR</NavLink><br/>
        <NavLink style={{textDecoration:'none',color:'#1b3e81', fontWeight:'500', padding:'3px'}} to='/stat-monitor'>STAT MONITOR</NavLink>
        
     </NavDropdown>       
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
};
export default MyNavbar;