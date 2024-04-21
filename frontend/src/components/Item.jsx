import React, { useState } from 'react'
import clsx from 'clsx'

const Item = () => {
    const [status, setStatus] = useState(true) // component state
    const handleClick = () => {
        // component handleClick

        setStatus(!status)
    }
    const buttonClass = clsx('rounded-full w-10 h-5', {
        // component hooked style
        'bg-green-600': status,
        'bg-red-600': !status,
    })

    return (
        <div className="container mx-auto w-80 h-10 flex items-center p-10 justify-center bg-neutral-800 text-white rounded-lg ">
            <div className="container flex justify-center items-center">
                <div className="w-20 h-5 bg-red-600"></div>
                <div className="container">
                    <div className="">Title</div>
                    <div className="">Description</div>
                </div>
            </div>
            <button className={buttonClass} onClick={handleClick}></button>
        </div>
    )
}

export default Item
