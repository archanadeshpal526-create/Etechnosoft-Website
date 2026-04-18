import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from '../components/Services';

export default function ServicesPage() {
  const location = useLocation();

  const getHeaderOffset = () => {
    const topBar = document.querySelector('[data-top-info-bar]');
    const navBar = document.querySelector('[data-main-navbar]');
    const topBarHeight = topBar ? topBar.getBoundingClientRect().height : 0;
    const navBarHeight = navBar ? navBar.getBoundingClientRect().height : 0;
    return Math.ceil(topBarHeight + navBarHeight + 12);
  };

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.replace('#', '');
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    setTimeout(scrollToSection, 60);
  }, [location]);

  return <Services />;
}
