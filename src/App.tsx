import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './MainContent'
import Navbar from './component/navbar'
import React from 'react'

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
      <div className='max-h-screen flex flex-col w-full'>
        <div className='flex sticky'>
          1
        </div>
        <div className='overflow-auto'>
          2<MainContent />
        </div>
        
      </div>
      
    </div>
      
    </>
    )
    }
  
}

export default App
