import { useEffect, useState } from 'react'

export const FetchTest = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/todos/json')

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await response.json()
                setTasks(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return tasks
}

export const FetchItem = (id) => {
    const tasks = FetchTest()
    const task = tasks.find((task) => {
        return task.id === parseInt(id)
    })

    return task
}

export const apisMain = [
    { url: 'api-1', description: 'api-1' },
    { url: 'api-2', description: 'api-2' },
    { url: 'api-3', description: 'api-3' },
]

export const apisDetail = [
    { url: 'api-4', description: 'api-4' },
    { url: 'api-5', description: 'api-5' },
]
