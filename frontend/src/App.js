import './App.css'
import { useEffect, useState } from 'react'
import Item from './components/Item'
import Title from './components/Title'
import Setting from './components/Setting'
import Tab from './components/Tab'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8081/todos/json')
            const data = await response.json()
            setTasks(data)
        }
        fetchData()
    }, [])

    const handleTest = async () => {
        await fetch('http://localhost:8080/', {
            method: 'GET',
            // headers: new Headers({
            //     'ngrok-skip-browser-warning': '132323',
            // }),
        })
            .then((res) => res.json())
            .then((data) => {})
    }
    return (
        <div className="App">
            <button onClick={handleTest}>Test API</button>
            <div className="flex justify-center bg-green-900">
                <Container>
                    <Header>
                        <Title />
                        <Setting />
                    </Header>
                    <Tab />
                    {tasks.map((task) => (
                        <Item key={task.id} props={task} />
                    ))}
                    <Footer />
                </Container>
            </div>
        </div>
    )
}

export default App
