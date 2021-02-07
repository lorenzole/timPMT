import React, { useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSkillStatMonitorData = () => {
  toast.configure();
  const notify = () => {
    toast.success('Operazione completata', {autoClose: 2500, closeOnClick: true})
  }
  const errorNotify = () => {
    toast.error('Operazione fallita', {autoClose: 2500, closeOnClick: true})
  }
  let history = useHistory();
  const [dnMonitorData, setDnMOnitorData] = useState({
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
    querySQL:""
  });

  const { tServerSipServer, servizio, ced, ipServerTcf, destinationFileName, destinationPath, isRunning, userIp, processName, destinationIp, nomeTserverSipServerTcf, urlWebPrimary, urlWebBackup, querySQL } = dnMonitorData;
  const onInputChange = e => {
    setDnMOnitorData({ ...dnMonitorData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`${window.base}/skillstat/insert`, dnMonitorData)
    .then(result => {
      history.push("/skill-stat-monitor");
      notify();
    })
    .catch(err => {
      errorNotify();
      history.push("/skill-stat-monitor");
    }
      )
    
  };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
    <Link className="btn btn-outline-dark" to="/skill-stat-monitor">
        Back to Skill Stat Monitor
      </Link>
      <h2 className="text-center mb-4">Add Skill Stat Configuration</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        TSERVER / SIPSERVER:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="tServerSipServer"
            name="tServerSipServer"
            value={tServerSipServer}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Servizio:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Servizio"
            name="servizio"
            value={servizio}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Ced:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Ced"
            name="ced"
            value={ced}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        IP server TCF:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="ipServerTcf"
            name="ipServerTcf"
            value={ipServerTcf}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Destination File Name:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Destination File Name"
            name="destinationFileName"
            value={destinationFileName}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Destination Path:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Destination Path"
            name="destinationPath"
            value={destinationPath}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Is running:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Is running"
            name="isRunning"
            value={isRunning}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        User Ip: 
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="userIp"
            name="userIp"
            value={userIp}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Process Name:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Process Name"
            name="processName"
            value={processName}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Destination Ip:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Destination Ip"
            name="destinationIp"
            value={destinationIp}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Nome Tserver Sipserver tcf:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder=" nomeTserverSipServerTcf"
            name="nomeTserverSipServerTcf"
            value={nomeTserverSipServerTcf}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Url Web Primary:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="urlWebPrimary"
            name="urlWebPrimary"
            value={urlWebPrimary}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Url_web_backup:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="urlWebBackup"
            name="urlWebBackup"
            value={urlWebBackup}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
        Query SQL:
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="querySQL"
            name="querySQL"
            value={querySQL}
            onChange={e => onInputChange(e)}
          />
        </div>
        <button className="btn btn-primary btn-block">Add Record</button>
      </form>
    </div>
  </div>
  );
};

export default AddSkillStatMonitorData;