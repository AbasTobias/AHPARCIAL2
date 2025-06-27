import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../src/contexts/AuthContext";

const UsersABM = () => {
  const HOST = 'http://127.0.0.1:3000/api';
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!token) {
      console.log("No hay token, no se puede obtener usuarios");
      return;
    }

    fetch(`${HOST}/users`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.msg) {
          console.log(data.msg); 
          setUsers([]);
        } else {
          setUsers(data);
        }
      })
      .catch(err => console.error('Error al obtener usuarios:', err));
  }, [token]);

  return (
    <>
      <header>
        <h1>Usuarios</h1>
      </header>

      <main>
        <div style={{ textAlign: 'center' }}>
          {users.length > 0 ? (
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              maxWidth: '400px', 
              margin: '0 auto' 
            }}>
              {users.map(user => (
                <li key={user._id} style={{ 
                  marginBottom: '15px', 
                  padding: '10px',
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div><strong>{user.name}</strong></div>
                  {user.email && <div>{user.email}</div>}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay usuarios o no estás autenticado</p>
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 - Sistema de Gestión de Usuarios</p>
      </footer>
    </>
  );
};

export default UsersABM;