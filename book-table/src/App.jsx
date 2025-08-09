import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Menu from './Components/Menu';
import OrderOnline from './Components/OrderOnline';
import Reservations from './Components/Reservations';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/login-page"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <div className="container-header-nav">
                  <Header />
                  <Nav />
                </div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/specials" element={<OrderOnline />} />
                </Routes>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
