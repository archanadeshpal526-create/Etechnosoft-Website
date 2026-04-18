import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from '../components/Services';

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.replace('#', '');
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    setTimeout(scrollToSection, 60);
  }, [location]);

  return <Services />;
}
