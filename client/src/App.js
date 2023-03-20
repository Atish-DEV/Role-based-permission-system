//import all dependency
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Signup from './Signup';
import Profile from './Profile';
import  SignIn from './SignIn';
import ClerkPage from './ClerkPage';
import SuperVisiorPage from './SuperVisiorPage';
import ManagerPage from './ManagerPage';

class App extends React.Component{
  render(){
    return(
      //set routes
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/profile/clerk' element={<ClerkPage/>}/>
          <Route path='/profile/supervisior' element={<SuperVisiorPage/>}/>
          <Route path='/profile/manager' element={<ManagerPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
