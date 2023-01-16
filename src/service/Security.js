import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Security1 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const User = localStorage.getItem('User') !== 'undefined' ? JSON.parse(localStorage.getItem('User')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []); 
}

export default Security1;