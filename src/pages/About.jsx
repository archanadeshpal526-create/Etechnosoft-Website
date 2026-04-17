import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <About />;
}