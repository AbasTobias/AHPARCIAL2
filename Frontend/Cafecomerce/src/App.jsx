import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UsersABM from '../pages/UsersABM';
import Contactos from '../pages/Contactos';
import UserLogin from '../pages/UserLogin';
import UserCreate from '../pages/UserCreate';
import Companies from '../pages/Companies';
import CompanyCafes from '../pages/CompanyCafes';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersabm" element={<UsersABM />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserCreate />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:companyId/cafes" element={<CompanyCafes />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;