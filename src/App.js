import './App.css';

import {BrowserRouter,Routes,Route,NavLink,Outlet} from "react-router-dom"


import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import User from './Components/User';
import Layout from './Components/Layout';


function App() {
  return (
    <BrowserRouter>

    <div>
        <nav>
            <ul>
                <li>
                    <NavLink style={({isActive}) => ({color: isActive? "red":"blue"})} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  style={({isActive}) => ({color: isActive? "red":"blue"})} to="users">Users</NavLink>
                </li>
                <li>
                    <NavLink  style={({isActive}) => ({color: isActive? "red":"blue"})}     to="about">About</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>

      <Routes>     
        <Route element={Layout}>   
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="user/:id" element={<User/>}/>   
        </Route>               
      </Routes>
    </BrowserRouter>
  );
}

export default App;
