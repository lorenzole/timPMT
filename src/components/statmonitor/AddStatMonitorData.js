import React, { useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

const AddStatMonitorData = () =>{
    toast.configure();
    const notify = () => {
      toast.success('Operazione effettuata con successo', {duration:2500})
    }
    let history = useHistory();
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
  
    const { ambiente, servizio, ced, userIp, isRunning, sourceJdbcUrl, processName, querySQL, destinationPath, destinationFileName, destinationIp } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post(`${window.base}/statmonitor/insert`, user);
      history.push("/stat-monitor");
      notify();
    };
    return (
      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <Link className="btn btn-outline-dark" to="/stat-monitor">
          Back to Stat Monitor
        </Link>
        <h2 className="text-center mb-4">Add Stat Monitor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          Ambiente:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Ambiente"
              name="ambiente"
              value={ambiente}
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
          User Ip:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="User Ip"
              name="userIp"
              value={userIp}
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
          Source Jdbc Url: 
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Source Jdbc Url"
              name="sourceJdbcUrl"
              value={sourceJdbcUrl}
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
          Query Sql:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Query Sql"
              name="querySQL"
              value={querySQL}
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
          
          <button className="btn btn-primary btn-block">Add Record</button>
        </form>
      </div>
    </div>
    );
  };
  
  export default AddStatMonitorData;