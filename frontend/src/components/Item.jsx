import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Switcher from './Switcher'

const Item = ({ props }) => {
    const styleMarker = 'w-1 h-10 rounded-b-full rounded-t-full bg-red-600'
    const styleItemContent =
        'container flex justify-between items-center gap-x-1'
    const styleItemContainer =
        'ontainer w-full h-20 flex items-center p-4 justify-center bg-neutral-800 text-white rounded-3xl'
    const styleTaskName = 'text-1xl font-bold'
    const styleTaskContent = 'text-1xl'
    return (
        <div className="mx-4">
            <div className={styleItemContainer}>
                <div className={styleItemContent}>
                    <div className={styleMarker}></div>
                    <div className="container">
                        <div className={styleTaskName}>{props.name}</div>
                        <div className={styleTaskContent}>
                            <Link to={`/detail${props.id}`}>
                                {props.description}
                            </Link>
                        </div>
                    </div>
                </div>
                <Switcher props={props}></Switcher>
            </div>
        </div>
    )
}

export default Item
