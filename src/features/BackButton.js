import { useNavigate, useLocation } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <button 
      onClick={() => navigate("/")}
      style={{ margin: '10px', padding: '5px 10px' }}
    >
      Back To Home
    </button>
  );
}

export default BackButton;
