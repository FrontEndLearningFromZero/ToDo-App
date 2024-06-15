import React from 'react'

const style =
    'w-80 p-4 h-screen flex flex-col align-center gap-2 rounded-2xl bg-slate-900 overflow-y-auto overflow-hidden'

const Context = ({ children }) => {
    return <div className={style}>{children}</div>
}

export default Context
