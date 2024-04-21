import './App.css'
import { useEffect, useState } from 'react'
import Item from './components/Item'
function App() {
    const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:8080/api/todos')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    // }, [])

    // useEffect(() => {
    //  for auto-sync: my idea
    //  other way: useReducer
    // }, [data])

    return (
        <div className="App">
            <h1>TODO App asdasdasds</h1>
            {/* {data.map((dt, index) => (
                <div key={index}>
                    {dt.name} + {dt.id} + {dt.description}
                </div>
            ))}
            <button
                onClick={() => {
                    fetch('http://localhost:8080/api/todos/7', {
                        method: 'DELETE',
                    })
                }}
            >
                Delete id 1
            </button> */}
            <Item />
            <Item />
        </div>
    )
}

export default App
