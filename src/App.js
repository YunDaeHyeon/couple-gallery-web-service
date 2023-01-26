import { Navigate, Route, Routes } from 'react-router-dom';
import FirstPage from './route/FirstPage';
import LoginPage from './route/LoginPage';
import RegisterPage from './route/RegisterPage';
import './App_style.css';
import { AuthProvider } from './authentiaction/auth';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<FirstPage />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
  );
}

export default App;
