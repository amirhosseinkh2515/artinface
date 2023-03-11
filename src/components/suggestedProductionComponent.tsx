import { useState } from "react"
import ProductColumns from '@/components/productColumns'
import cream from "../assets/images/cream.png"
import cream2 from "../assets/images/cream2.png"
import shampo from "../assets/images/shampo.png"
import BreadCrumb from "./breadCrumb"

const breadCrumb = [
    { name: 'خانه', href: '/' },
    { name: 'محصولات پیشنهادی' }
]

const ProposalProductionComponent = () => {
    const [data, setData] = useState<any>({})

    return (
        <div className="relative">
            <BreadCrumb item={breadCrumb} className="mr-[5%]"/>
            <div className="w-full h-full overflow-hidden fixed">
                <div className="w-[750px] h-[670px] blur-[200px] custom_gradient-fifth rotate-[168deg] absolute -left-[15%] top-[400px]" />
                <div className="w-152 h-[1096px] blur-[100px] custom_gradient-sixth -rotate-[105deg] absolute -right-[15%] top-[300px]" />
            </div>
            <div className="container flex justify-center mx-auto my-10  ">
            
                {/* right */}
                <div className='w-full sm:h-unset sm:w-126 z-[201] sm:z-[9] fixed sm:static top-0 right-0'>
                    <div className='flex flex-wrap w-full h-full sm:h-auto sm:w-full z-[201] sm:z-[9] fixed sm:sticky top-0 sm:top-[120px] right-0 border-[1px] border-gray-8 bg-dark-main p-8'>
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
                </div>


                {/* left */}
                <div className="grid gap-y-12 grid-cols-1 w-[calc(100%-544px)] mr-10 z-[2]">
                    <ProductColumns img={shampo} />
                    <ProductColumns img={cream} />
                    <ProductColumns img={cream2} />
                    <ProductColumns img={shampo} />
                    <ProductColumns img={cream} />

                </div>
            </div>
        </div>
    )
}

export default ProposalProductionComponent