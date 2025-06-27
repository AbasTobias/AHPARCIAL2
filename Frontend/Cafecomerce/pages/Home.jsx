import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../src/contexts/AuthContext';
import { Card } from '../src/components/Button'; 

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <header>
        <h1>Bienvenido a la Aplicación</h1>
        {user ? (
          <p>Hola, {user.email}</p>
        ) : (
          <p>Sistema de gestión de usuarios</p>
        )}
      </header>

      <main>
        <div className="container">
          {!user ? (
            <>
              <Card>
                <h2>Iniciar Sesión</h2>
                <p>Accede a tu cuenta para gestionar usuarios</p>
                <Link to="/login" style={{ color: '#6d4c41' }}>
                  Ir al Login →
                </Link>
              </Card>

              <Card>
                <h2>Crear Cuenta</h2>
                <p>Regístrate para comenzar a usar la aplicación</p>
                <Link to="/register" style={{ color: '#6d4c41' }}>
                  Registrarse →
                </Link>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <h2>Gestión de Usuarios</h2>
                <p>Administra los usuarios del sistema</p>
                <Link to="/usersabm" style={{ color: '#6d4c41' }}>
                  Ver Usuarios →
                </Link>
              </Card>

              <Card>
                <h2>Contacto</h2>
                <p>Información de contacto</p>
                <Link to="/contactos" style={{ color: '#6d4c41' }}>
                  Ver Contacto →
                </Link>
              </Card>

              <Card>
                <h2>Cerrar Sesión</h2>
                <p>Salir de la aplicación</p>
                <button 
                  onClick={logout}
                  style={{
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </Card>
            </>
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 - Aplicación de Gestión de Usuarios</p>
      </footer>
    </>
  );
}

export default Home;