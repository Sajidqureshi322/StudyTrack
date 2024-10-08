import React from 'react';
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/header';
import './index.css';
const App = () => {
  return (
    <>
   <Header/>
   <Companies/>
   <FAQ/>
   <Footer/>
    </>
  );
};

export default App;
