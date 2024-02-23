import './App.css';
import LoginForm from'./components/LoginForm/LoginForm';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SuperAdmin from './components/superadmin/SuperAdmin';
import Dashboard from './pages/Dashboard';
import Analystics from './pages/Analystics';
import ListesUser from './pages/ListesUser';
import Historiques from './pages/Historiques';
import Sidebar from './components/sidebar';
import ListesAdmin from './pages/ListesAdmin';
import AddUser from './pages/AddUser';
import ModifyAdmin from './pages/ModifyAdmin';
import DeleteUser from './pages/DeleteUser';
import DeleteAdmin from './pages/DeleteAdmin';
import ModifyUser from './pages/ModifyUser';
import AddAdmin from './pages/AddAdmin';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<LoginForm/>}/>
    <Route path='/superadmin'element={<SuperAdmin/>}/>
    </Routes>
    <Sidebar>
    <Routes>
      
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/analystics'element={<Analystics/>}/>
      <Route path='/listesAdmin'element={<ListesAdmin/>}/>
      <Route path='/adduser'element={<AddUser/>}/>
      <Route path='/addadmin'element={<AddAdmin/>}/>
      <Route path='/modifyuser'element={<ModifyUser/>}/>
      <Route path='/modifyadmin'element={<ModifyAdmin/>}/>
      <Route path='/deleteuser'element={<DeleteUser/>}/>
      <Route path='/deleteadmin'element={<DeleteAdmin/>}/>

      <Route path='/listesUser'element={<ListesUser/>}/>
      <Route path='/historiques'element={<Historiques/>}/>

    </Routes>
    </Sidebar>
   
    
    </BrowserRouter>
  );
}

export default App;
