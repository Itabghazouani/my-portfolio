import {
  About,
  Contact,
  Footer,
  Header,
  ScrollToTop,
  Work,
} from '@/components';

const Home = () => {
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
