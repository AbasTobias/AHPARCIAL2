const Button = ({ children, onClick, type = "button", disabled = false, className = "" }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`btn ${className}`}
      style={{
        backgroundColor: '#6d4c41',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div 
      className={`card ${className}`} 
      style={{
        color:'#333333',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9'
      }}
    >
      {children}
    </div>
  );
};

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

const Input = ({ value, onChange, name, type = "text", required = false }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      style={{
        width: "100%",
        padding: "8px",
        marginBottom: "15px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
    />
  );
};

export { Button, Card, ErrorMessage, Input };