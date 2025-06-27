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