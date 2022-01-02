import { useEffect } from 'react'

function outputHandler() {
    console.log('variables')
}

function Variables({ setOutputHandler }) {
    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    })
    return <div>Variables</div>
}

export default Variables
