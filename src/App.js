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
function App() {
  return (
    <div className='bg-[#0A0A0A]'>
     <div className='bg-[url("./assets/images/Hero-bg.png")]'><Nav/></div>
     <About/>
     <Utilities/>
     <Kong/>
     <Mint/>
     <Roadmap/>
     <Meet/>
     <Footer/>
    </div>
  );
}

export default App;
