import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Challenges />
    </>
  );
}