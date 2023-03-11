import React from 'react'

type BreadCrumb = {
    item: any
    className?: string,
    color?: string
}


const BreadCrumb: React.FC<BreadCrumb> = ({ item, className, color }) => {
    return (
        <div className={`${className} my-3 text-gray-300`}>
            {
                item.slice(0, -1).map((item: any, i: any) => (
                    <React.Fragment key={i}>
                        <a href={item.href}> {item.name}</a>
                        <span> / </span>
                    </React.Fragment>
                ))
            }
            <span className='text-[#389B7A]'> {item.slice(-1)[0].name} </span>
        </div>
    )
}

export default BreadCrumb