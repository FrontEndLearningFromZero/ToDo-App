import './App.css'
import { useEffect, useState } from 'react'
import Item from './components/Item'
function App() {
    const [check, setCheck] = useState(false)

    const handleClick = () => {
        setCheck(!check)
    }

    return (
        <div className="App">
            <h1>TODO App asdasdasds</h1>
            <Item status={check} onClick={handleClick} />
        </div>
    )
}

export default App
