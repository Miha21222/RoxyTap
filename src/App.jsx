import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';
import Shop from './pages/Shop';
import Share from './pages/Share';
import Start from './pages/Start';
import Login from './pages/Login';

const tg = window.Telegram.WebApp;

function App() {


  useEffect(() => {
    tg.ready();
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.disableVerticalSwipes();
  }, [])

  return (
    <>
      <div className="flex">
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/links' element={<Links />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/share' element={<Share />} />
        </Routes>
      </div>
    </>
  )
}

export default App
