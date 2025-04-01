import { useRoutes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage/>}></Route>
          <Route element = {<MainPage/>} path='/home'></Route>
          <Route element = {<LoginPage/>} path='/login'></Route>
          <Route element = {<RegisterPage/>} path='/register'></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
