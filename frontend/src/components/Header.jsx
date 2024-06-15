import React from 'react'

const style = 'w-full flex justify-between p-4'

const Header = ({ children }) => {
    return <div className={style}>{children}</div>
}

export default Header
