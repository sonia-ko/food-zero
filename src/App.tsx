import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/404/404";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Portfolio from "./pages/portfolio/Portfolio";
import Header from "./components/general/header/Header";
import Footer from "./components/general/Footer/Footer";
import Copyright from "./components/general/Copyright/Copyright";
import Navigation from "./components/general/Navigation/Navigation";
import Reservations from "./pages/reservations/Reservations";
import { useState } from "react";

function App() {
  const [navigationOpened, setNavigationOpened] = useState(false);

  return (
    <div className={`App ${navigationOpened ? "appclosed" : ""}`}>
      {navigationOpened ? (
        <Navigation onNavigationClose={() => setNavigationOpened(false)} />
      ) : null}

      <Header
        displayHeader={navigationOpened ? false : true}
        onMenuOpen={() => {
          setNavigationOpened(true);

          console.log("navigation clicked");
        }}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      {/* <Footer /> */}
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
