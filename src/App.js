import { Navigate, Route, Routes } from 'react-router-dom';
import FirstPage from './route/FirstPage';
import LoginPage from './route/login/LoginPage';
import RegisterPage from './route/login/RegisterPage';
import NotFound from './components/NotFound';
import './App_style.css';
import { AuthProvider } from './authentiaction/auth';
import RequireAuth from './authentiaction/RequireAuth';
import HomePage from './route/HomePage';
import FindPwdPage from './route/login/FindPwdPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/intro"/>}/>
        <Route
          path='/home'
          replace={false}
          element={<RequireAuth><HomePage/></RequireAuth>}
        />
        <Route path="/intro" element={<FirstPage />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/find-pwd" element={<FindPwdPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
