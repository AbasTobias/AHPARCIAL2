import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/companies">Compañías</Link>
      <Link to="/usersabm">Usuarios</Link>
      <Link to="/contactos">Contacto</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
    </nav>
  );
};

export default Navbar;