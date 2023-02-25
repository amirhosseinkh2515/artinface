import React from 'react'
// import UseProfile from "../hooks/useProfile";
import CustomLink from './customLink'

const UserNavbarInfo = () => {
    // const user = UseProfile()
    return (
        <>
            <CustomLink href='/dashboard' className="h-[45%] flex items-center text-white  shadow-sm w-full justify-center mx-auto bg-blue-third  mb-2 " >
                <span className="w-full text-center whitespace-nowrap text-sm sm:text-base px-4 py-0 ">ورود به پنل کاربری</span>
            </CustomLink>
            <CustomLink href='/logout' className="h-[45%] flex items-center text-white w-full justify-center mx-auto bg-red-main " >
                <span className="w-full text-center whitespace-nowrap text-sm sm:text-base px-4 py-0">خروج از حساب</span>
            </CustomLink>
        </>
    )
}
export default UserNavbarInfo