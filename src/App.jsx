import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './components/HomePages'
import QuizLayout from './components/quiz/QuizLayout'
import General from './components/quiz/General'
import Sport from './components/quiz/Sport'
import Music from './components/quiz/Music'
import Entertainment from './components/quiz/Entertainment'
// import Layout from './components/Layout'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="quiz" element={<QuizLayout/>}/>
          <Route path="general" element={<General/>}/>
          <Route path="sport"  element={<Sport/>}/>
          <Route path="music"  element={<Music/>}/>
          <Route path="entertainment"  element={<Entertainment/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
