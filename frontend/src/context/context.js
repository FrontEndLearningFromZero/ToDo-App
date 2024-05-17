import React from 'react'

// Creating the context object and passing the default values.
const configContext = React.createContext({
    someConfig: null,
    setConfig: () => {},
})

export default configContext
