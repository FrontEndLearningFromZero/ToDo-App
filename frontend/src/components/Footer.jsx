import clsx from 'clsx'
import React from 'react'
import FooterButton from './FooterButton'

let isMultiple = false

const Footer = ({ apis }) => {
    isMultiple = apis.length > 1
    const style = clsx(
        'w-full mt-auto bg-white rounded-b-3xl flex flex-row items-center p-4 text-black',
        {
            // component hooked style
            'justify-around': isMultiple,
            'justify-center': !isMultiple,
        }
    )
    return (
        <div className={style}>
            {apis.map((api, index) => (
                <FooterButton key={index} props={api} />
            ))}
        </div>
    )
}

export default Footer
