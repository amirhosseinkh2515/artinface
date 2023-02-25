import React from 'react'
import SignInComponent from '../../components/signInComponent'
import LogoIcon from '../../assets/svgs/logo2'

type SignInLayout = {
    showPassword: boolean,
    exist: boolean,
    setShowPassword: any,
    phoneNumber: string,
    sendGa?: any
}

const SignInLayout: React.FC<SignInLayout> = ({ showPassword, exist, phoneNumber, setShowPassword }) => {
    return (
        <div className={`container flex flex-wrap justify-center items-center content-center h-screen w-full py-4 mx-auto -mt-20`}>
            <div className="flex justify-center items-center w-full mb-8">
                <LogoIcon color="#000" />
            </div>
            <div className="w-mc md:w-2/5 flex flex-wrap justify-center border-[1px] border-gray-8 items-center bg-dark-main p-8 ">
                <SignInComponent
                    showPassword={showPassword}
                    exist={exist}
                    phoneNumber={phoneNumber}
                    setShowPassword={setShowPassword}
                // sendGa={sendGa}
                />
            </div>
        </div>
    )
}

export default SignInLayout