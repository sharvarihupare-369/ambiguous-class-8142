import logo from './logo.svg';
import './App.css';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';

import SliderPro from './components/Home/SliderPro';

import Featured from './components/Home/Featured';
import ImageCarousal from './components/Home/ImageCarousal';
import Sliders from './components/Home/Sliders';
import Main from './components/Home/Main';


function App() {
  return (
    <div className="App" >
      <Navbar />
      {/* <Main/> */}
      <SliderPro/>
      
      <Sliders/>
      <Featured/>
      <Footer />
    </div>
  );
}

export default App;
