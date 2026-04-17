import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Industries from '../components/Industries';

export default function IndustriesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Industries />;
}