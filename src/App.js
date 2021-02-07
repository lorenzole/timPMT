import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import MyNavbar from "./components/layout/MyNavbar.js";
import CodeStatMonitor from "./components/pages/CodeStatMonitor";
import SkillStatMonitor from "./components/pages/SkillStatMonitor";
import RaoGas from './components/pages/RaoGas';
import EmailMonitor from "./components/pages/EmailMonitor";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import QueueMonitor from "./components/pages/QueueMonitor";
import QueueMonitorData from "./components/queueMonitor/QueueMonitorData";
import AddQueueMonitorData from "./components/queueMonitor/AddQueueMonitor";
import EditQueueMonitorData from "./components/queueMonitor/EditQueueMonitor";
import ChatMonitor from "./components/pages/ChatMonitor";
import DnMonitor from "./components/pages/DnMonitor";
import DnMonitorData from './components/dnmonitor/DnMonitorData';
import AddDnMonitorData from './components/dnmonitor/AddDnMonitorData';
import EditDnMonitorData from './components/dnmonitor/EditDnMonitorData';
import StatMonitor from "./components/pages/StatMonitor";
import ChatMonitorData from "./components/chatmonitor/ChatMonitorData";
import AddChatMonitorData from './components/chatmonitor/AddChatMonitorData';
import EditChatMonitorData from "./components/chatmonitor/EditChatMonitorData";
import AddEmailMonitorData from "./components/emailmonitor/AddEmailMonitorData";
import EmailMonitorData from './components/emailmonitor/EmailMonitorData';
import EditEmailMonitorData from "./components/emailmonitor/EditEmailMonitorData";
import AddStatMonitorData from "./components/statmonitor/AddStatMonitorData";
import EditStatMonitorData from './components/statmonitor/EditStatMonitorData';
import StatMonitorData from "./components/statmonitor/StatMonitorData";
import CodeStatMonitorData from "./components/codestatmonitor/CodeStatMonitorData";
import AddCodeStatMonitorData from './components/codestatmonitor/AddCodeStatMonitorData';
import EditCodeStatMonitorData from "./components/codestatmonitor/EditCodeStatMonitorData";
import RaoGasData from "./components/raogas/RaoGasData";
import AddRaoGasData from "./components/raogas/AddRaoGasData";
import EditRaoGasData from "./components/raogas/EditRaoGasData";
import AddSkillStatMonitorData from "./components/skillstatmonitor/AddSkillStatMonitor";
import SkillStatMonitorData from "./components/skillstatmonitor/SkillStatMonitorData";
import EditSkillStatMonitor from './components/skillstatmonitor/EditSkillStatMonitorData';
import axios from "axios";
import AccessDenied from "./components/pages/AccessDenied";

function App() {


  const [isAuthorized, setIsAuthorized] = useState(false);
  
 useEffect(() => {  
   pacoCheck();
 }, []);

  const pacoCheck = async () => {
  const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);
  const tokenP = urlParams.get('stuff')
  console.log(tokenP);

   try{
    const res = await axios.get(`https://paco-svil.cm.telecomitalia.local:8443/core/verify/${tokenP}`) 
    console.log(res)
    setIsAuthorized(!isAuthorized); 

    //CONTROLLA CHE NOME APPLICATION COINCIDA CON 'TIM PMT'    
   }catch (e){
     console.log(e);
     console.log(window.location.search)
   }
 } 
 
  return (
   <>
   {!isAuthorized ? <AccessDenied/> :
      <Router>
        <div className="App">
          <MyNavbar/>
          <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path='/rao-gas' component={RaoGas}/>
          <Route exact path='/rao-gas/add' component={AddRaoGasData} />
          <Route exact path='/rao-gas/edit/:id' component={EditRaoGasData} />
          <Route exact path='/rao-gas/:id' component={RaoGasData}/>

          <Route exact path='/skill-stat-monitor' component={SkillStatMonitor} />
          <Route exact path='/skill-stat-monitor/add' component={AddSkillStatMonitorData} />
          <Route exact path='/skill-stat-monitor/edit/:id' component={EditSkillStatMonitor} />
          <Route exact path='/skill-stat-monitor/:id' component={SkillStatMonitorData} />

          <Route exact path="/code-stat-monitor" component={CodeStatMonitor} />
          <Route exact path="/code-stat-monitor/add" component={AddCodeStatMonitorData} />
          <Route exact path='/code-stat-monitor/edit/:id' component={EditCodeStatMonitorData} />
          <Route exact path="/code-stat-monitor/:id" component={CodeStatMonitorData} />

          <Route exact path="/chat-monitor" component={ChatMonitor} />
          <Route exact path="/chat-monitor/add" component={AddChatMonitorData} />
          <Route exact path='/chat-monitor/edit/:id' component={EditChatMonitorData} />
          <Route exact path="/chat-monitor/:id" component={ChatMonitorData}/>

          <Route exact path='/email-monitor' component={EmailMonitor}/>
          <Route exact path='/email-monitor/add' component={AddEmailMonitorData}/>
          <Route exact path='/email-monitor/edit/:id' component={EditEmailMonitorData} />
          <Route exact path='/email-monitor/:id' component={EmailMonitorData}/>

          <Route exact path='/stat-monitor' component={StatMonitor} />
          <Route exact path='/stat-monitor/add' component={AddStatMonitorData} />
          <Route exact path='/stat-monitor/edit/:id' component={EditStatMonitorData} /> 
          <Route exact path='/stat-monitor/:id' component={StatMonitorData}/>

          <Route exact path="/queue-monitor" component={QueueMonitor}/>
          <Route exact path="/queue-monitor/add" component={AddQueueMonitorData} />
          <Route exact path="/queue-monitor/edit/:id" component={EditQueueMonitorData}/>
          <Route exact path='/queue-monitor/:id' component={QueueMonitorData}/>

          <Route exact path='/dn-monitor' component={DnMonitor}/>
          <Route exact path='/dn-monitor/add'  component={AddDnMonitorData}/>
          <Route exact path='/dn-monitor/edit/:id' component={EditDnMonitorData}/>
          <Route exact path='/dn-monitor/:id' component={DnMonitorData}/>
           
          <Route component={NotFound} />         
          </Switch>
        </div>
      </Router>
      }
      </>
    )
}

export default App;
