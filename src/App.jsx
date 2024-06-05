import React from 'react'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import MyWork from './components/MyWork/MyWork'
export const App = () => {
  return (
    <>
   <Header/>
   <Info/>
   <About/>
   <MyWork/>
   <Contact/>
   <Footer/>
    </>

  )
}
export default App;