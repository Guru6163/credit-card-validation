import React from 'react'
import LoginPage from './components/LoginPage'
import StickyHeader from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>

      </div>
    </BrowserRouter>

  )
}

export default App