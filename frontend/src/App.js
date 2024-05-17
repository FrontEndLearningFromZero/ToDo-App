import './App.css'
import { useContext, useEffect, useState } from 'react'
import Item from './components/Item'
import Title from './components/Title'
import Setting from './components/Setting'
function App() {
    const [check, setCheck] = useState(false)
    // const [config, setConfig] = useContext(false)
    const handleClick = () => {
        setCheck(!check)
    }
    // const handleSetting = () => {
    //     setConfig(!config)
    // }

    return (
        <div className="App">
            <div className="flex flex-row justify-center">
                <div className="w-96 h-screen px-8 flex flex-col align-center rounded-lg bg-slate-900">
                    <div className="w-full flex justify-between px-4 py-4">
                        <Title />
                        <Setting />
                    </div>
                    <div className="text-1xl px-4 text-white">All Tasks</div>
                    <Item status={check} onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default App
