import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEmailMonitorData = () => {
  toast.configure();
  const notify = () => {
    toast.success('Operazione effettuata con successo', {autoClose: 2500, closeOnClick: true})
  }
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    id:'',
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

  const { ambiente, servizio, ced, userIp, isRunning, sourceJdbcUrl, processName, querySQL, destinationPath, destinationFileName, destinationIp} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`${window.base}/emailmonitor/update/`, user);
    notify();
    history.push("/email-monitor");
  };

  const loadUser = async () => {
    const result = await axios.get(`${window.base}/emailmonitor/findById/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <Link className="btn btn-outline-dark" to="/email-monitor">
        Back to Email Monitor
      </Link>
        <h2 className="text-center mb-4">Edit Email Monitor:</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          Ambiente:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ambiente"
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
              placeholder='servizio'
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
              placeholder={user.ced}
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
              placeholder="Enter Your Phone Number"
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
              placeholder="Enter Your Website Name"
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
              placeholder={user.sourceJdbcUrl}
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
              placeholder={user.processName}
              name="processName"
              value={processName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          Query SQL:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={user.querySQL}
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
              placeholder={user.destinationPath}
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
              placeholder={user.destinationFileName}
              name="destinationFileName"
              value={destinationFileName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          Destination Ip
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={user.destinationIp}
              name="destinationIp"
              value={destinationIp}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Email Monitor</button>
        </form>
      </div>
    </div>
  );
};

export default EditEmailMonitorData;