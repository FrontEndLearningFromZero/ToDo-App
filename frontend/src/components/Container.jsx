import React from 'react'

const style =
    'w-80 h-screen flex flex-col align-center rounded-3xl bg-slate-900 text-white'
const Container = ({ children }) => {
    return <div className={style}>{children}</div>
}

export default Container
