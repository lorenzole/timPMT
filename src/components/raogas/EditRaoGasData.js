import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditRaoGasData = () => {
  toast.configure();
  const notify = () => {
    toast.success('Operazione effettuata con successo', {autoClose: 2500, closeOnClick: true})
  }
  let history = useHistory();
  const { id } = useParams();
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
    querySQL:""
  });

  const { tServerSipServer, servizio, ced, ipServerTcf, destinationFileName, destinationPath, isRunning, userIp, processName, destinationIp, nomeTserverSipServerTcf, urlWebPrimary, urlWebBackup, querySQL} = dnMonitorData;
  const onInputChange = e => {
    setDnMonitorData({ ...dnMonitorData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`${window.base}/raogas/update/`, dnMonitorData);
    notify();
    history.push("/rao-gas");
  };

  const loadUser = async () => {
    const result = await axios.get(`${window.base}/raogas/findById/${id}`);
    setDnMonitorData(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <Link className="btn btn-outline-dark" to="/rao-gas">
        Back to Rao Gas
      </Link>
        <h2 className="text-center mb-4">Edit Rao Gas</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          tserver_sipserver:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.tServerSipServer}
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
              placeholder={dnMonitorData.servizio}
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
              placeholder={dnMonitorData.ced}
              name="ced"
              value={ced}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          ip_server_tcf:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.ipServerTcf}
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
              placeholder={dnMonitorData.destinationFileName}
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
              placeholder={dnMonitorData.destinationPath}
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
              placeholder={dnMonitorData.isRunning}
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
              placeholder={dnMonitorData.userIp}
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
              placeholder={dnMonitorData.processName}
              name="processName"
              value={processName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          Destination Ip
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.destinationIp}
              name="destinationIp"
              value={destinationIp}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          nome Tserver Sipserver Tcf:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.nomeTserverSipServerTcf}
              name="nomeTserverSipServerTcf"
              value={nomeTserverSipServerTcf}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          url_web_primary:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.urlWebPrimary}
              name="urlWebPrimary"
              value={urlWebPrimary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          url_web_backup:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.urlWebBackup}
              name="urlWebBackup"
              value={urlWebBackup}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          querySql:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={dnMonitorData.querySQL}
              name="querySQL"
              value={querySQL}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Rao Gas</button>
        </form>
      </div>
    </div>
  );
};

export default EditRaoGasData;