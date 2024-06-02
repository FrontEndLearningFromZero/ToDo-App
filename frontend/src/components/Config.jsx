import React, { useContext } from 'react'
import configContext from '../context/context'

const Config = () => {
    const config = useContext(configContext)
    const handleClick = () => {
        alert('onclick setConfig')
        config.setConfig(!config.someConfig)
    }
    return (
        <div className="container">
            {/* ToDo: make a popup modal to set config */}
            <div>Setconfig {config.someConfig}</div>
            <button
                className="w-2 h-2 bg-orange-400"
                onClick={handleClick}
            ></button>
        </div>
    )
}

export default Config
