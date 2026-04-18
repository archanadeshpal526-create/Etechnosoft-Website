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
        const top = element.getBoundingClientRect().top + window.pageYOffset - 140;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    setTimeout(scrollToSection, 0);
  }, [location]);

  return <Services />;
}
