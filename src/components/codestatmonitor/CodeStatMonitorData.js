import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CodeStatMonitorData = () => {
  const [user, setUser] = useState({
    ambiente: "",
    servizio: "",
    ced: "",
    userIp: "",
    isRunning: "",
    sourceJdbcUrl: "",
    processName: "",
    querySQL: "",
    destinationPath: "",
    destinationFileName: "",
    destinationIp: ""
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`${window.base}/codestatmonitor/findById/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-outline-dark" to="/code-stat-monitor">
        Back to Code Stat Monitor
      </Link>
      
      <h1 className="display-6">Code Stat Monoitor Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>id: </span>{user.id}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Ambiente: </span>{user.ambiente}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Servizio: </span>{user.servizio}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Ced: </span>{user.ced}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>User Ip: </span>{user.userIp}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Is Running: </span>{user.isRunning}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Source Jdbc Url: </span>{user.sourceJdbcUrl}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Process Name: </span>{user.processName}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Query SQL: </span>{user.querySQL}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Destination Path: </span>{user.destinationPath}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Destination File Name: </span>{user.destinationFileName}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>Destination Ip: </span>{user.destinationIp}</li>    
      </ul>
    </div>
  );
};

export default CodeStatMonitorData;