import React, {useState, useEffect} from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {toast} from 'react-toastify';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Toolbar} from 'primereact/toolbar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import '../../css/QueueMonitor.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const QueueMonitor = () => {
  toast.configure();
  const notify = () => {
    toast.success('Operazione effettuata con successo', {duration:2500})
  }
  
  const [globalFilter, setGlobalFilter] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [deleteRecordsDialog, setDeleteRecordsDialog] = useState(false);
  const hideDeleteRecordsDialog = () => {
      setDeleteRecordsDialog(false);
  }
  const confirmDeleteSelected = () => {
      setDeleteRecordsDialog(true);
  }


  const hideDeleteProductDialog = () => {
      setDeleteRecordsDialog(false);
  }
  const deleteProduct = () => {

    let ids = selectedRecord.map( el => {
        return el.id
    })
    /* console.log(ids); */
     axios.delete(`${window.base}/monitorqueue/delete`, {data: ids}, {
         headers: {
            'Content-Type': 'application/json'
         }
     })
     .then(data =>{
        setSelectedRecord(null)
        hideDeleteRecordsDialog()
        loadUsers()
        notify()
     }
       
     )
     .catch(err => console.log(err))
}
  useEffect(() =>{
      loadUsers();
   }, []);
   const loadUsers = async () => {
     try{
       const result = await axios.get(`${window.base}/monitorqueue/findAll`);
       setUsers(result.data);
       console.log(result);
     }catch (e){
       console.log(e);
     }
   };

   const deleteUser = async id => {
      await axios.delete(`${window.base}/monitorqueue/delete/${id}`)
      notify();
      loadUsers();
  }
 const actionBodyTemplate = (rowData) => {
  
      return (
          <React.Fragment>
               <Link className="btn btn-primary mr-2" to={`/queue-monitor/${rowData.id}`}><FontAwesomeIcon icon={faEye} /></Link>
               <Link className="btn btn-outline-primary mr-2" to={`/queue-monitor/edit/${rowData.id}`}><FontAwesomeIcon icon={faPen} /></Link>
               <Link className="btn btn-danger mr-2" onClick={() => deleteUser(rowData.id)}><FontAwesomeIcon icon={faTrash}/></Link>
          </React.Fragment>
      )
  }

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
  const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

  const leftToolbarTemplate = () => {
      return (
          
            <div className="table-header">
          <h5 className="p-m-0">Manage Records</h5>
          
              <Link icon="pi plus-circle" className="btn btn-outline-dark pb-2 mr-4" to='/queue-monitor/add'>
              <FontAwesomeIcon icon={faPlusCircle} className='fa-lg' style={{color:'#365baa'}}/>
              </Link>
              <Button label="Delete Selected" icon="pi pi-trash" className="p-button-danger mr-4" onClick={confirmDeleteSelected} disabled={!selectedRecord || !selectedRecord.length} />
              {header} 
          </div>
      )
  }

  const deleteProductDialogFooter = (
      <React.Fragment>
          <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
          <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
      </React.Fragment>
  );

  const header = (
      
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search..." />
          </span>
  );

  return (
      <div>
        <div className="not-found">
      <h1 className="display-4 mt-4">Queue Monitor</h1>
    </div>
          <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
          <div className="card">
              <DataTable value={users} className="p-datatable-striped" paginator
                  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[5,10,20,50]}
                  paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} selection={selectedRecord} onSelectionChange={e => setSelectedRecord(e.value)} dataKey="id" 
                  globalFilter={globalFilter}>
                  
                  <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                  <Column field="ambiente" header="AMBIENTE" sortable filter filterPlaceholder="Search by ambiente"></Column>
                  <Column field="servizio" header="SERVIZIO" sortable filter filterPlaceholder="Search by servizio"></Column>
                  <Column field="ced" header="CED" sortable filter filterPlaceholder="Search by ced"></Column>
                  <Column field="isRunning" header="IS RUNNING" sortable filter filterPlaceholder="Search by is running"></Column>
                  <Column field="destinationFileName" header="DESTINATION FILE NAME" sortable filter filterPlaceholder="Search by Dest. file name"></Column>            
                  <Column body={actionBodyTemplate}>
                 
   
                  </Column>
                  
              </DataTable>
              <Dialog visible={deleteRecordsDialog} style={{ width: '450px' }} header="Confirm" modal  footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
              <div className="confirmation-content">
                  <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                  {users && <span>Are you sure you want to delete the selected records?</span>}
              </div>
          </Dialog>
          </div>
      </div>
  );
}

export default QueueMonitor;