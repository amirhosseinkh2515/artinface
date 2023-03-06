import { useState } from "react"
import ProductColumns from '@/components/productColumns'


const ProposalProductionComponent = () => {
    const [data, setData] = useState<any>({})

    return (
        <div className="container flex justify-center mx-auto my-10">

            {/* right */}
            <div className='flex flex-wrap text-white w-126 border-[1px] border-gray-8 bg-dark-main p-8'>
                <div className='flex flex-wrap justify-between text-gray-8 text-xl w-1/2 my-2'>
                    <p className='w-full text-sm md:text-base xl:text-base'>سن پوستی(STD):</p>
                    <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data?.predicted_age}</span>
                </div>
                <div className='flex flex-wrap justify-between text-gray-8 text-xl w-1/2 my-2'>
                    <p className='w-full text-sm md:text-base xl:text-base'>چین و چروک:</p>
                    <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data?.has_wrinkle ? "دارد" : "ندارد"}</span>
                </div>
                <div className='flex flex-wrap justify-between text-gray-8 text-xl w-1/2 my-2'>
                    <p className='w-full text-sm md:text-base xl:text-base'>قرمزی پوست:</p>
                    <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data?.has_redness ? "دارد" : "ندارد"}</span>
                </div>
                <div className='flex flex-wrap justify-between text-gray-8 text-xl w-1/2 my-2'>
                    <p className='w-full text-sm md:text-base xl:text-base'>پف زیر چشم:</p>
                    <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data?.has_eyebag ? "دارد" : "ندارد"}</span>
                </div>
                <hr className="mx-auto center container border-gray-2 border-dashed my-8" />

                <div className='flex flex-wrap justify-between text-gray-8 text-xl w-1/2 my-2'>
                    <p className='w-full text-sm md:text-base xl:text-base'>چین و چروک:</p>
                    <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data?.has_wrinkle ? "دارد" : "ندارد"}</span>
                </div>
                <div className='flex flex-wrap justify-between text-gray-8 text-xl w-1/2 my-2'>
                    <p className='w-full text-sm md:text-base xl:text-base'>سرخی پوست:</p>
                    <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data?.predicted_age}</span>
                </div>

            </div>

            {/* left */}
            <div className="flex flex-col w-[calc(100%-544px)] mr-10">
                <ProductColumns />
            </div>
        </div>
    )
}

export default ProposalProductionComponent