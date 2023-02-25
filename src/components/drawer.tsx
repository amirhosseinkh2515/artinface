import React, { FC } from 'react'

type Drawer = {
    children: any
    setShowDrawer: any
    showDrawer: boolean
    className: string
}

const Drawer: FC<Drawer> = ({ children, className, setShowDrawer, showDrawer }) => {
    return (
        <>
            <div onClick={() => setShowDrawer(false)} className={`${className} flex flex-wrap absolute `}>
                {children}
            </div>
            {showDrawer &&
                <div onClick={() => setShowDrawer(false)} className=" fixed z-[20] inset-0 bg-black opacity-0"></div>
            }
        </>
    )
}
export default Drawer