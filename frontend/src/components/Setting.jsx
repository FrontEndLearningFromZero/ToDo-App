import React, { useState } from 'react'
import Config from './Config'

const Setting = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <button
            className="w-20 h-5 rounded-full  bg-green-600 "
            onClick={handleClick}
        >
            {open ? <Config /> : <>Click me</>}
        </button>
    )
}

export default Setting
