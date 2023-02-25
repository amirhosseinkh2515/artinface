import { useEffect } from 'react'
import auth from "../services/authService";

const Logout = () => {
    useEffect(() => {
        auth.logout();
        if (typeof window !== 'undefined') {
            window.location.href = "/";
         }
    }, [])
    return null
}
export default Logout