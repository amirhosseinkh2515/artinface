import { FC } from "react"
import CustomLink from "./customLink"
import Arrow from '../assets/svgs/arrow2'
import smiling_man from '../assets/images/smiling_man.png'
import StarFull from '../assets/svgs/starFull'

type ProductCard = {
    img: any
}

const ProductCard: FC<ProductCard> = ({ img }) => {
    return (
        <div className="flex flex-wrap border-[1px] border-gray-8 w-90 xl:w-104 2xl:w-126 bg-dark-main p-4">
            <div className="flex w-[52%] ">
                <div className="flex flex-wrap text-xs md:text-sm 2xl:text-base">
                    <h4 className="text-white text-sm md:text-base xl:text-lg 2xl:text-xl py-4">
                    سرم پوست بایو آکوا مدل ویتامین C
                    </h4>
                    <p className="text-gray-8 mb-4">
                    ویژگی‌ها: لورم ایسو لورمایپسووم و لورم ایپ 
                    </p>
                    <div className="flex justify-between w-full">
                        <div className="text-gray-8 text-xs md:text-sm 2xl:text-base">
                            <span>
                                امتیاز کاربران:
                            </span>
                        </div>
                        <div className="flex justify-end text-xs md:text-sm 2xl:text-base">
                            <span className="text-white">
                                ۴.۸ (۶۵)
                            </span>
                            <StarFull />
                        </div>
                    </div>
                    <CustomLink className="flex items-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl cursor-pointer">
                        <span className="ml-4">
                            اطلاعات بیشتر
                        </span>
                        <span className="rotate-90"><Arrow color="#fff" /></span>
                    </CustomLink>
                </div>
            </div>
            <div className="flex justify-start mt-4 relative w-[48%]">
                <img src={img} className="" />
                <button className="before:content-['+'] text-[32px] font-bold flex justify-center items-center w-8 h-8 border-[2px] border-white rounded-full p-1 absolute left-0 bottom-0 text-white ">
                    {/* + */}
                </button>
            </div>
        </div>
    )
}

export default ProductCard