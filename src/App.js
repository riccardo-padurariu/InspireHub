import { useRoutes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import { AuthProvider } from './Authentification/AuthContext';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element = {<MainPage/>}></Route>
            <Route element = {<MainPage/>} path='/home'></Route>
            <Route element = {<LoginPage/>} path='/login'></Route>
            <Route element = {<RegisterPage/>} path='/register'></Route>
            <Route element = {<Dashboard />} path='/dashboard'></Route>
          </Routes>
        </BrowserRouter>
      </div>    
    </AuthProvider>
  );
}

export default App;
