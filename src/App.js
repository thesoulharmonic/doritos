import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Prod from './components/products';
import About from './components/about';
import Videos from './components/videos';
import Wheretobuy from './components/wheretobuy';
import Solidblack from './components/solidblack';

import Footer from './components/footer';
import './custom.css'; // import custom css
import { Routes, Route} from "react-router-dom";


// import Header component and about info


function App() {
  return (
    <>
<Header />
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/products" element={<Prod />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/videos" element={<Videos />} />
<Route exact path="/wheretobuy" element={<Wheretobuy />} />
<Route exact path="/solidblack" element={<Solidblack />} />

</Routes>
<Footer />
</>
  );
}

export default App;
