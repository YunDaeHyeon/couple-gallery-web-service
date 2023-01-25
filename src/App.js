import { Navigate, Route, Routes } from 'react-router-dom';
import FirstPage from './route/FirstPage';
import LoginPage from './route/LoginPage';
import './App_style.css';
import { AuthProvider } from './authentiaction/auth';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<FirstPage />}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
  );
}

export default App;
