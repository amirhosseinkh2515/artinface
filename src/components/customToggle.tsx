import React, { useState } from 'react'

type CustomToggle = {
    toggleSelected: number
    setToggleSelected: any;
    className?: string
    dotClassName?: string
}

const CustomToggle: React.FC<CustomToggle> = ({ toggleSelected, setToggleSelected, className, dotClassName }) => {
    return (
        <button
            type="button"
            className={`w-[40px] cursor-pointer select-none p-[2px] h-[20px] relative border-[1px] ${toggleSelected == 1 ? "" : "border-[1px]"} ${className}`}
            onClick={() => setToggleSelected(toggleSelected == 1 ? 0 : 1)}>
            <div className={`flex justify-center items-center w-[10px] box-border absolute transiation-all duration-300 h-[16px] top-[1px] bold cursor-pointer text-white p-2 ${toggleSelected == 1 ? "left-[20px]" : "left-[2px]"} ${dotClassName}`} />
        </button>
    )
}
export default CustomToggle