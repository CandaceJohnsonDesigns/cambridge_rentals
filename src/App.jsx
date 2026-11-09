import { useState } from 'react'
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import PropertyList from './components/PropertyList/PropertyList';
import Footer from './components/Footer/Footer';
import properties from './data/properties';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Title />
        <PropertyList properties={properties} />
      </main>
      <Footer />
    </>
  )
}

export default App
