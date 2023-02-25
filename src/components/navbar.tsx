'use client';
import React, { useEffect, useState } from 'react'
import { NAVBAR_MENU } from '../site-settings/site-navigation'
import CustomLink from './customLink'
import { useRouter } from 'next/router'
// import UseProfile from "../hooks/useProfile";
import useCheckMobile from '../hooks/useCheckMobile'
import Drawer from "./drawer"
import Arrow from '../assets/svgs/arrow2'
import UserNavbarInfo from './userNavbarInfo'

const Navbar = () => {
  // const router = useRouter()
  // const user = UseProfile()
  const isMobile = useCheckMobile()
  const [dropDownMenu, setDropDownMenu] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [color, setColor] = useState("#fff")
  const [showDrawer, setShowDrawer] = useState(false)
  const showDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu)
  }

  const mouseEnter = () => {
    setColor("#389B7A");
  }
  const mouseLeave = () => {
    setColor("#fff");
  }

  useEffect(() => {
    setIsRegistered(localStorage.getItem("token") ? true : false);
  }, []);

  return (
    <nav className="flex justify-center items-center w-full bg-dark-main sticky top-0 z-[101] h-[78px] xl:h-[108px]">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {!isMobile &&
            <div className='absolute right-16 xs:relative xs:right-0' id="mobile-menu">
              <button onClick={showDropDownMenu} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>

              {dropDownMenu &&
                <div id="dropdownDivider" className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                    {
                      NAVBAR_MENU.map(({ label, href, image }, i) => (
                        <li key={i} onClick={showDropDownMenu}>
                          <CustomLink href={href} className={`leading-20 block mx-4 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:shadow-nav transiation-all duration-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-main md:p-0 text-base `}>
                            {label}
                          </CustomLink>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              }
            </div>
          }
          <div className="hidden w-full lg:block lg:w-auto" >
            <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm">
              {
                NAVBAR_MENU.map(({ label, href, image }, i) => (
                  (!isRegistered || href !== '/login') &&
                  <li key={i}>
                    <CustomLink href={href} className={`block mx-6 py-2 pr-4 pl-3 text-white hover:shadow-nav transiation-all duration-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-main md:p-0 text-base `}>
                      {label}
                      {image}
                    </CustomLink>
                  </li>
                ))
              }
              {isRegistered &&
                <div className={`block mx-6 py-2 pr-4 pl-3 text-white hover:shadow-nav transiation-all duration-300 md:p-0 text-base relative`}>
                  <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={() => setShowDrawer(!showDrawer)} className={`mr-3 flex items-center `}>
                    <span className={`${color == "#fff" ? "text-white" : "text-green-main"}`}>
                      خوش آمدین
                    </span>
                    <span className="rotate-0 "><Arrow color={color} /></span>
                  </button>
                  <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} className={`${showDrawer ? "h-28 opcaity-1 visible opacity-100 ease-in duration-100 p-4" : "overflow-hidden h-0 opacity-0 ease-in duration-200 p-0"} xs:top-16 top-10 left-[-132px] xs:left-[-2px] bg-dark-main w-66 z-[21] justify-center shadow-md shadow-gray-2`}>
                    <UserNavbarInfo />
                  </Drawer>
                </div>
              }
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
