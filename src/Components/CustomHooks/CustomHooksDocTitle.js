import { useEffect } from 'react'

const CustomHooksDocTitle = (count) => {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default CustomHooksDocTitle
