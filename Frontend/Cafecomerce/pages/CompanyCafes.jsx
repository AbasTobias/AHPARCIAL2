import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../src/components/Button';

const CompanyCafes = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCompanyCafes();
  }, [companyId]);

  const fetchCompanyCafes = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/companies/${companyId}/cafes`);
      if (!response.ok) throw new Error('Error al cargar los cafés de la compañía');
      const data = await response.json();
      setCompanyData(data);
    } catch (error) {
      setError('Error al cargar los datos: ' + error.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <header>
        <button onClick={() => navigate('/companies')} style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
          Volver a Compañías
        </button>
        <h1>{companyData?.company?.name}</h1>
        <p>{companyData?.company?.description}</p>
        <p>{companyData?.company?.address} | {companyData?.company?.email}</p>
      </header>

      <main>
        <div className="container">
          {companyData?.cafes?.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h2>No hay cafés disponibles</h2>
              <p>Esta compañía aún no tiene cafés registrados.</p>
            </div>
          ) : (
            companyData?.cafes?.map((cafe) => (
              <Card key={cafe._id} className="card">
                <h2>{cafe.name}</h2>
                <p>Precio: ${cafe.price}</p>
                <p>Origen: {cafe.origin}</p>
                <p>Peso: {cafe.weight}</p>
                <p>Tostado: {cafe.roast}</p>
                <p>Categoría: {cafe.category}</p>
                {cafe.description && (
                  <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                    <p style={{ margin: 0, fontStyle: 'italic' }}>"{cafe.description}"</p>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Coffee Companies. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default CompanyCafes;