import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from './components/Nav';
import Utilities from './components/Utilities';
import Mint from './components/Mint';
import Meet from './components/Meet';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import About from './components/About';
import Kong from './components/Thekong';
import Backtotop from './components/Backtotop';
import { useEffect, useState } from "react";
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Partner from './components/Partner';
function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 700,
        disable: 'mobile'
      }
    );
  }, [])
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className='bg-[#0A0A0A]'>
          <div className='bg-[url("./assets/images/Hero-bg.png")]'><Nav/></div>
          <About />
          <Utilities />
          <Kong />
          <Mint />
          <Roadmap />
          <Partner/>
          <Meet />
          <Footer />
          <Backtotop />
        </div>
      )}
    </div>
  );
}

export default App;
