import React, { useState } from 'react'
import clsx from 'clsx'

const Item = ({ props }) => {
    let currentStatus = false
    if (props.status === 1) {
        currentStatus = true
    }
    const [status, setStatus] = useState(currentStatus)

    const handleClick = () => {
        // const fetchData = async () => {
        //     await fetch('http://localhost:8081/todos/json', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ props.id, status: !status }),
        //     })
        // }
        // fetchData()
        setStatus(!status)
    }
    const buttonClass = clsx(
        'rounded-s-full rounded-e-full flex flex-row items-center',
        {
            // component hooked style
            'bg-green-600': status,
            'bg-gray-600': !status,
        }
    )
    const statusClass = clsx('w-2 h-2 rounded-full', {
        // component hooked style
        'bg-green-600': status,
        'bg-gray-600': !status,
    })
    const movingClass = clsx('w-10 h-5 flex flex-row items-center', {
        // component hooked style
        'justify-start': !status,
        'justify-end': status,
    })

    return (
        <div className="mx-4">
            <div className="container w-full h-20 flex items-center p-10 justify-center bg-neutral-800 text-white rounded-s-full rounded-e-full ">
                <div className="container flex justify-center items-center gap-x-1">
                    <div className="w-1 h-10 rounded-b-full rounded-t-full bg-red-600 bg-"></div>
                    <div className="container">
                        <div className="">{props.name}</div>
                        <div className="">{props.description}</div>
                    </div>
                </div>
                <button className={buttonClass} onClick={() => handleClick()}>
                    <div className={movingClass}>
                        <div className="flex flex-row items-center justify-center w-5 h-5 rounded-full bg-white">
                            <div className={statusClass}></div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Item
