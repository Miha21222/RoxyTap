import { useEffect } from 'react'
import './App.css'
import Taskbar from './Taskbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';
import Shop from './pages/Shop';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.disableVerticalSwipes();
  }, [])

  return (
    <>
      <div className="flex flex-col">
        <Taskbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/links' element={<Links />}/>
          <Route path='/shop' element={<Shop />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
