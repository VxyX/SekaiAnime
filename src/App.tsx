import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './MainContent'
import Navbar from './component/navbar'
import React from 'react'
import Header from './component/Header'

class App extends React.Component{
  componentDidMount(): void {
    window.addEventListener("click", this.hideNav)
  }

  hideNav = () => {

  }

  render(){
    return (<>
    <div className='flex'>
      <Navbar />
      <div className='max-h-screen flex flex-col w-full overflow-hidden'>
        <div className='flex sticky'>
          <Header />
        </div>
        <div className='overflow-y-scroll -right-5'>
          <MainContent />
        </div>
        
      </div>
      
    </div>
      
    </>
    )
    }
  
}

export default App
