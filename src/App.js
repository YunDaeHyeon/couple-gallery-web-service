import { Navigate, Route, Routes } from 'react-router-dom';
import FirstPage from './route/FirstPage';
import LoginPage from './route/LoginPage';
import RegisterPage from './route/RegisterPage';
import NotFound from './components/NotFound';
import './App_style.css';
import { AuthProvider } from './authentiaction/auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<FirstPage />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
