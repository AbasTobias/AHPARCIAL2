import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../src/components/Button';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/companies');
      if (!response.ok) throw new Error('Error al cargar las compañías');
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      setError('Error al cargar las compañías: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <main><div style={{ textAlign: 'center', padding: '50px' }}><h2>Cargando...</h2></div></main>;
  if (error) return <main><div style={{ textAlign: 'center', padding: '50px' }}><h2 style={{ color: 'red' }}>Error</h2><p>{error}</p></div></main>;

  return (
    <>
      <header>
        <h1>Compañías de Café</h1>
        <p>Descubre nuestras compañías y sus cafés</p>
      </header>
      
      <main>
        <div className="container">
          {companies.map((company) => (
            <Card key={company._id} className="card">
              <h2>{company.name}</h2>
              <p>{company.description}</p>
              <p>Dirección: {company.address}</p>
              <p>Email: {company.email}</p>
              <button
                onClick={() => navigate(`/companies/${company._id}/cafes`)}
                style={{
                  backgroundColor: '#6d4c41',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '15px'
                }}
              >
                Ver Cafés
              </button>
            </Card>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Coffee Companies. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Companies;