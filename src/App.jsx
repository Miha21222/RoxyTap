import { useEffect, useState } from 'react'
import './App.css'
import Taskbar from './Taskbar';
import Scorebar from './Scorebar';
import Boxy from './Boxy';
const tg = window.Telegram.WebApp;

function App() {

  function isLocalStorageEmpty(key) {
    const data = localStorage.getItem(key);

    if (data === null || data === '') {
      return 0; // Данных нет
    }

    return JSON.parse(localStorage.getItem(key)); // Данные существуют
  }

  const [newScore, setScore] = useState(() => isLocalStorageEmpty('score'));

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(newScore))
  }, [newScore])


  useEffect(() => {
    tg.ready();
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.disableVerticalSwipes(); 
  }, [])

  return (
    <>
      <div className="flex flex-col">
        <Boxy setScore={setScore} />
        <Scorebar newScore={newScore} setScore={setScore} />
        <Taskbar />
      </div>
    </>
  )
}

export default App
