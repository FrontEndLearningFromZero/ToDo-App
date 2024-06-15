import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/contact" element={<>aaaaaaaaa</>} />
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
