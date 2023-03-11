import React, { useState, useEffect } from 'react'
import { NAVBAR_MENU } from '../site-settings/site-navigation'
import CustomLink from './customLink'
import LogoIcon from '../assets/svgs/logo'
import { useRouter } from 'next/router'
import Sms from '../assets/svgs/sms'
import YoutubeIcon from '../assets/svgs/youtube'
import InstagramIcon from '../assets/svgs/instagram'
import LinkedinIcono from '../assets/svgs/linkedin'
import TwitterIcon from '../assets/svgs/twitter'

// import UseProfile from "../hooks/useProfile";



const Footer = () => {
    // const user = UseProfile()
    const router = useRouter()
    const [hideFooter, setHideFooter] = useState(false)

    useEffect(() => {
        router.asPath === "/detection" || router.asPath === "/detection/" ? setHideFooter(true) : setHideFooter(false)
        const handleRouteChange = (url:any) => {
            url === "/detection" || url === "/detection/" ? setHideFooter(true) : setHideFooter(false)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])

    if (hideFooter) return null
    return (
        <footer className="p-4 pb-0 bg-dark-main mb-[calc(41px+2vw)] xs:mb-0 relative">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <CustomLink href={'/'} className="flex items-center ml-4">
                    <LogoIcon color="#fff" />
                </CustomLink>
                <div className="flex flex-wrap justify-center sm:justify-between items-center w-full">
                    <div className="md:w-4/12">
                        <h3 className="text-white mt-10">آرتین اپ چیست؟</h3>
                        <p className="text-white mt-5 text-sm leading-8 text-justify">
                            آرتین اپ پلتفرمی است که در آن می‌توانید توانایی‌ ها و مهارت های خود را در بازه های زمانی مختلف با دیگران به اشتراک بگذارید. تفاوت فعالیت در آرتین اپ و انجام کار خیر داوطلبانه، ایجاد ارتباطات متقابل در جامعه است. بدین معنا که هدف اصلی فعالیت های داوطلبانه تنها رفع نیاز است اما آرتین اپ، شبکه ای تعاملی است که فارغ از انجام کارها، به ایجاد حس همدلی در جامعه نیز کمک می‌کند.
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 sm:w-1/3 relative" >
                        <ul className="flex flex-wrap flex-col-2 mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
                            {
                                NAVBAR_MENU.map((items, i) => (
                                    <li key={i} >
                                        {items.label &&
                                            <CustomLink href={items.href} className={`whitespace-nowrap text-sm leading-7 md:leading-10 w-32 block mx-4 py-2 pr-4 pl-3 text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                                                {items.label}
                                            </CustomLink>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="w-40 sm:w-64 h-28 blur-[39px] rotate-[200deg] custom_gradient-forth absolute -left-[10%] -bottom-[15%]" />
                    </div>
                    <div className="md:w-1/4 sm:w-1/3 px-3" >
                        <div className="flex flex-wrap justify-end items-center mb-3" >
                            <p className="text-white ml-2">info@artinface.com</p>
                            <Sms color="#fff" />
                        </div>
                        <div className="flex flex-wrap justify-end items-center mb-3" >
                            <CustomLink href={'/'} className="flex items-center ml-4">
                                <YoutubeIcon color="#C6C6C6" />
                            </CustomLink>
                            <CustomLink href={'/'} className="flex items-center ml-4">
                                <InstagramIcon color="#C6C6C6" />
                            </CustomLink>
                            <CustomLink href={'/'} className="flex items-center ml-4">
                                <LinkedinIcono color="#C6C6C6" />
                            </CustomLink>
                            <CustomLink href={'/'} className="flex items-center">
                                <TwitterIcon color="#C6C6C6" />
                            </CustomLink>
                        </div>
                    </div>
                    <div className="flex justify-center w-24 text-center h-32 items-center bg-white rounded-md" >
                        enamad
                    </div>
                </div>
            </div>
            <p className="text-white text-xs md:text-base xl:text-lg text-center p-4 md:p-8 mt-10 border-dotted border-t-[1px] border-white container mx-auto">
                کلیه حقوق این سایت متعلق به شرکت آرتین فیس می‌باشد
            </p>
        </footer>
    )
}

export default Footer