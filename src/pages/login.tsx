import { useState } from 'react'
import type { NextPage } from 'next'
import LoginLayout from '../layouts/loginLayout/login-layout'
import SignInLayout from '../layouts/loginLayout/sign-in-layout'
// import sendGa from "../hooks/useSendGa";
import { SEO } from '../components/seo'
import auth from '../services/authService'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
    const router = useRouter()
    const [number, setNumber] = useState<any>();
    const [showPassword, setShowPassword] = useState<any>(false);
    const [exist, setExist] = useState<any>(false);

    if (auth.getCurrentUser()) router.push("/");
    return (
        <>
            <SEO
                title={"" + " | " + "بانک زمان"}
                description={""}
                image={""}
                canonical={``}
            />
            {
                number ?
                    (
                        <SignInLayout
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            exist={exist}
                            // sendGa={sendGa}
                            phoneNumber={number}
                        />
                    ) :
                    (

                        <LoginLayout
                            sendNumber={setNumber}
                            setShowPassword={setShowPassword}
                            setExist={setExist}
                        />
                    )
            }
        </>
    )
}

export default Login