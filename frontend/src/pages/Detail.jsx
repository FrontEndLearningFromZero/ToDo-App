import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Title from '../components/Title'
import Setting from '../components/Setting'
import Tab from '../components/Tab'
import Context from '../components/Context'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { apisDetail, FetchItem } from '../hooks/server'
import Item from '../components/Item'
import Switcher from '../components/Switcher'

const Detail = () => {
    // Get the userId param from the URL.
    let { id } = useParams()
    const task = FetchItem(id)
    if (task === undefined) {
        return
    }
    return (
        <div className="flex justify-center bg-green-900">
            <Container>
                <Header>
                    <Title props={task.name} />
                    <Switcher props={task} />
                </Header>
                <Tab />
                <Context>
                    <div>Description:</div>
                    {task.description}
                </Context>
                <Footer apis={apisDetail} />
            </Container>
        </div>
    )
}

export default Detail
