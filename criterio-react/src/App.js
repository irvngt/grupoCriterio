import React from 'react';
// import logo from './logo.svg';
import './assets/css/materialize/sass/materialize.css';
import './assets/css/style.css';
import Header from './header';
import  Rows1cards from './rows1_cards';
import  Footer from './components/footer';

function App() {
  return (
    <>
    <Header/>
    <Rows1cards/>
    <Footer/>
    </>
  );
}

export default App;
