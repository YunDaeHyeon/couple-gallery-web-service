import { Navigate, Route, Routes } from 'react-router-dom';
import FirstPage from './route/FirstPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<FirstPage />}/>
    </Routes>
  );
}

export default App;