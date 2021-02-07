import React from "react";
import Tim2017 from './../../css/Tim2017.png';
const AccessDenied = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img style={{width:'40%'}}src={Tim2017}/>
    <h1 style={{marginTop:'-150px', fontSize:'80px'}}>Access Denied</h1>
    <h2>You don't have permission to access</h2>
  </div>
  );
};

export default AccessDenied;
