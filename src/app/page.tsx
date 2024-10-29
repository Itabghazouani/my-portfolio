'use client';

import {
  About,
  Contact,
  Footer,
  Header,
  ScrollToTop,
  Work,
} from '@/components';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Header />
      <main>
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
