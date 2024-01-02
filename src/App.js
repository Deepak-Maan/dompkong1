import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from './components/Nav';
import Utilities from './components/Utilities';
import Mint from './components/Mint';
import Meet from './components/Meet';
import Footer from './components/Footer';
function App() {
  return (
    <div className='bg-[#0A0A0A]'>
     <div className='bg-[url("./assets/images/Hero-bg.png")]'><Nav/></div>
     <Utilities/>
     <Mint/>
     <Meet/>
     <Footer/>
    </div>
  );
}

export default App;
