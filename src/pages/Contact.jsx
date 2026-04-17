import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../components/Contact';

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Contact />;
}