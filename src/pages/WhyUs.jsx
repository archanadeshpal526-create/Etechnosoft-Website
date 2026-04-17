import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';

export default function WhyUsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <WhyChooseUs />;
}