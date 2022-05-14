import './App.css';
import React, {useEffect} from "react";
import Footer from "./umesh/footer/footer";
import Header from "./umesh/Header/header";
import Routes from './Components/routes/routes';

function App() {

  return (
    <div>
        <Header/>
        <Routes/>
        <Footer/>
    </div>
  );
}

export default App;
