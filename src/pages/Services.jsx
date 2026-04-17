import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from '../components/Services';

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Services />;
}