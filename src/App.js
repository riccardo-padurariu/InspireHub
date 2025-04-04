import { useLocation, useRoutes } from 'react-router-dom';
import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import { AuthProvider } from './Authentification/AuthContext';
import Dashboard from './Pages/Dashboard';

function App() {

  const [needsOverflow,setNeedsOverflow] = React.useState(false);

  //const location = useLocation();
  //const { pathname } = location;
  //if(pathname)
  console.log(window.location.href);
  console.log(document.body.style.overflow);

  document.body.style.overflow = "";

  if(window.location.href === 'http://localhost:3000/' || window.location.href === 'http://localhost:3000/home')
    document.body.style.overflow = "";
  else
    document.body.style.overflow = "hidden";

  //document.body.style.overflow = needsOverflow ? "hidden" : "";


  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element = {<MainPage needsOverflow={needsOverflow} setNeedsOverflow={setNeedsOverflow}/>}></Route>
            <Route element = {<MainPage needsOverflow={needsOverflow} setNeedsOverflow={setNeedsOverflow}/>} path='/home'></Route>
            <Route element = {<LoginPage needsOverflow={needsOverflow} setNeedsOverflow={setNeedsOverflow}/>} path='/login'></Route>
            <Route element = {<RegisterPage needsOverflow={needsOverflow} setNeedsOverflow={setNeedsOverflow}/>} path='/register'></Route>
            <Route element = {<Dashboard needsOverflow={needsOverflow} setNeedsOverflow={setNeedsOverflow}/>} path='/dashboard'></Route>
          </Routes>
        </BrowserRouter>
      </div>    
    </AuthProvider>
  );
}

export default App;
