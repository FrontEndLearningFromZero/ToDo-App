import React from 'react'

const FooterButton = ({ props }) => {
    const handleClick = (url) => {
        alert(`onclick asdasda ${url}`)
    }
    return (
        <>
            <button onClick={() => handleClick(props.url)}>
                {props.description}
            </button>
        </>
    )
}

export default FooterButton
