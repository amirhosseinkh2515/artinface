import React , {useEffect} from 'react'

const UseScrollToTop = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ behavior: 'smooth', top: 0 })
        }, 1000);
    }, [])
}

export default UseScrollToTop