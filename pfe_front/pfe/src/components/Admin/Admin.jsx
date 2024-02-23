import React from 'react';
import'../admin/Admin.css'
import {Route,Routes} from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Analystics from'../../pages/Analystics';
import Historiques from'../../pages/Historiques';
import ListesUser from'../../pages/ListesUser';
import Sidebar from '../sidebar';
function Admin() {
    return (
      
        <Sidebar>
    <Routes>
      
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/analystics'element={<Analystics/>}/>
      <Route path='/listesUser'element={<ListesUser/>}/>
      <Route path='/historiques'element={<Historiques/>}/>

    </Routes>
    </Sidebar>
       
    )
}export default Admin;