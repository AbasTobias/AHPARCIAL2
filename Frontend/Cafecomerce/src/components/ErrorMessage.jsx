const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <p style={{ 
      color: 'red', 
      fontSize: '14px', 
      margin: '10px 0',
      textAlign: 'center'
    }}>
      {message}
    </p>
  );
};

export { Button, Card, ErrorMessage };