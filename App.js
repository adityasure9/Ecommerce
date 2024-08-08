import './App.css';
import Navbar from './Components/header/Navbar';
import Newnavbar from './Components/header/NewNavbar/Newnavbar';
import Maincomponent from './Components/Home/Maincomponent';
import Footer from './Components/footer/footr.js'
import Signin from './Components/signup_signin/signin';
import Signup from './Components/signup_signin/signup';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom'; 
import Cart from './Components/cart/cart.js';
import Buynow from './Components/buynow/Buynow.js'

function App() {
  return (
    <>
      <Navbar/>
      <Newnavbar/>
      <Routes>
        <Route path ="/" element= {<Maincomponent />}/>
        <Route path ="/login" element= {<Signin />}/>
        <Route path ="/register" element= {<Signup />}/>
        <Route path ="/getproductsone/:id" element= {<Cart />}/>
        <Route path ="/buynow" element= {<Buynow />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
