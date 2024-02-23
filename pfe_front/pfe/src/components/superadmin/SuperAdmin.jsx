import React from 'react';
import'../superadmin/SuperAdmin.css'
import {Route,Routes} from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Analystics from'../../pages/Analystics';
import Historiques from'../../pages/Historiques';
import ListesAdmin from'../../pages/ListesAdmin';
import Sidebar from '../sidebar';
import ListesUser from '../../pages/ListesUser';
function SuperAdmin() {
    return (
      
        <Sidebar>
    <Routes>
      
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/analystics'element={<Analystics/>}/>
      <Route path='/listes'element={<ListesAdmin/>}/>
      <Route path='/listes'element={<ListesUser/>}/>
      <Route path='/historiques'element={<Historiques/>}/>

    </Routes>
    </Sidebar>
       
    )
}export default SuperAdmin;