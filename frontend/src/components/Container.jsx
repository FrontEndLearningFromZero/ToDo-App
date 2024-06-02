import React from 'react'

const style =
    'w-80 h-screen flex flex-col align-center rounded-2xl bg-slate-900'
const Container = ({ children }) => {
    return <div className={style}>{children}</div>
}

export default Container
