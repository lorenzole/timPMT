import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SkillStatMonitorData = () => {
    
  const [dnMonitorData, setDnMonitorData] = useState({
    tServerSipServer:"",
    servizio: "",
    ced: "",
    ipServerTcf: "",
    destinationFileName: "",
    destinationPath: "",
    isRunning: "",
    userIp:"",
    processName: "",
    destionationIp: "",
    nomeTserverSipServerTcf:"",
    urlWebPrimary:"",
    urlWebBackup:"",
    id:"",
    querySQL:""
  });

  const { id } = useParams();
  useEffect(() => {
    loadDnMonitorData();
  }, []);
  const loadDnMonitorData = async () => {
    const res = await axios.get(`${window.base}/skillstat/findById/${id}`);
    setDnMonitorData(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-outline-dark" to="/skill-stat-monitor">
        Back to Skill Stat Monitor
      </Link>
      
      <h1 className="display-6">Skill Stat Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>TSERVER/SIPSERVER: </span>{dnMonitorData.tServerSipServer }</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>SERVIZIO: </span>{dnMonitorData.servizio}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>CED: </span>{dnMonitorData.ced}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>IP SERVER TCF: </span>{dnMonitorData.ipServerTcf}</li>        
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>DESTIONATION FILE NAME: </span>{dnMonitorData.destinationFileName}</li>        
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>DESTINATION PATH: </span>{dnMonitorData.destinationPath}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>IS RUNNING: </span>{dnMonitorData.isRunning}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>USER IP: </span>{dnMonitorData.userIp}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>PROCESS NAME: </span>{dnMonitorData.processName}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>DESTINATION IP: </span>{dnMonitorData.destinationIp}</li>
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>NOME TSERVER SIPSERVER TCF: </span>{dnMonitorData.nomeTserverSipServerTcf}</li>        
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>URL WEB PRIMARY: </span>{dnMonitorData.urlWebPrimary}</li>                
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>URL WEB BACKUP: </span>{dnMonitorData.urlWebBackup}</li>                    
        <li className="list-group-item"><span style={{fontWeight:'bold'}}>QUERY SQL: </span>{dnMonitorData.querySQL}</li>

        
      </ul>
    </div>
  );
};

export default SkillStatMonitorData;