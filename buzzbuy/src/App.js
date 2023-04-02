import logo from './logo.svg';
import './App.css';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';

import SliderPro from './components/Home/SliderPro';
import Home from './Pages/navbar/Home';
import Featured from './components/Home/Featured';
import ImageCarousal from './components/Home/ImageCarousal';
import Sliders from './components/Home/Sliders';
import Main from './components/Home/Main';
import Signup from './components/SigninFun/Signup';
import { ToastContainer } from 'react-toastify';
import Admin from './components/Admin';
import AllRoutes from './components/AllRoutes';
import { Route, Switch , Routes } from 'react-router-dom';
// import Payment from './components/Payment/Payment';




function App() {
  return (
    <div className="App" >
      <AllRoutes/>
     <ToastContainer />
    </div>
  );
}

export default App;
