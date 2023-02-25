import React from 'react'
import LoginComponent from '../../components/loginComponent'
import LogoIcon from '../../assets/svgs/logo2'

type LoginLayout = {
    sendNumber: any
    setShowPassword: any
    setExist: any
}

const LoginLayout: React.FC<LoginLayout> = ({ sendNumber, setShowPassword, setExist }) => {

    return (
        <div className={`container flex flex-wrap justify-center items-center content-center h-screen w-full py-4 mx-auto -mt-20`}>
            <div className="flex justify-center items-center w-full mb-8">
                <LogoIcon color="#000" />
            </div>
            <div className="w-mc md:w-2/5 flex flex-wrap justify-center items-center border-[1px] border-gray-8 bg-dark-main p-8 ">
                <LoginComponent sendNumber={sendNumber} setShowPassword={setShowPassword} setExist={setExist} />
            </div>
        </div>
    )
}

export default LoginLayout