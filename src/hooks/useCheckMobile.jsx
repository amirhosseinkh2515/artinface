import { useEffect, useState } from "react";

const UseCheckMobile = () => {
    const [harchi, useHarchi] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && navigator.userAgent.includes("Mobile") && window.innerWidth < 450) {
            useHarchi(true);
        }
        else useHarchi(false);
    }, [typeof window !== 'undefined' && navigator.userAgent])
    return harchi
}
export default UseCheckMobile 