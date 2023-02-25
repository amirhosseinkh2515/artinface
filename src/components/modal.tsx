import React, { useEffect, useRef, useState } from 'react'
import Cross from '../assets/svgs/cross'

type Modal = {
    children: any
    setShowModal: any
    className?: string
    innerClassName?: string
    containerClassName?: string
}

const Modal: React.FC<Modal> = ({ children, setShowModal, containerClassName, className, innerClassName }) => {
    return (
        <>
            <div className={`${containerClassName} justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur mt-20`}>
                <div className={`${className} relative flex z-[30] w-full`}>
                    <div className={`border-0 shadow-lg relative flex flex-col w-mc sm:w-[768px] bg-dark-main outline-none focus:outline-none mx-auto ${innerClassName}`}>
                        {children}
                        <button onClick={() => setShowModal(false)} className='w-3 xs:w-5 absolute -top-7 right-0'>
                            <Cross color={"#fff"}/>
                        </button>
                    </div>
                </div>
                <div onClick={() => setShowModal(false)} className=" fixed z-[20] inset-0 bg-black opacity-25"></div>
            </div>
        </>
    )
}
export default Modal