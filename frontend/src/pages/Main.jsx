import { useEffect, useState } from 'react'
import Item from '../components/Item'
import Title from '../components/Title'
import Setting from '../components/Setting'
import Tab from '../components/Tab'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Context from '../components/Context'
import { apisMain, FetchTest } from '../hooks/server'

const Main = (props) => {
    const tasks = FetchTest()

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
                        <Title props={'To Do'} />
                        <Setting />
                    </Header>
                    <Tab />
                    <Context>
                        {tasks.map((task) => (
                            <Item key={task.id} props={task} />
                        ))}
                    </Context>
                    <Footer apis={apisMain} />
                </Container>
            </div>
        </div>
    )
}
export default Main
