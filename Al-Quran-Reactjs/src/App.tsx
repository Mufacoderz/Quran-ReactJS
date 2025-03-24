
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePages'
import DetailSurahPage from './pages/DetailSurahPage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surah/:surahId" element={<DetailSurahPage />} />
      </Routes>

    </>
  )
}

export default App
