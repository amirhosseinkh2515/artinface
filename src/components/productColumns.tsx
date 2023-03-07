import { FC } from "react"
import Visibility from '../assets/svgs/visibility'
import ThumbsUp from '../assets/svgs/thumbsUp'
import Arrow from '../assets/svgs/arrow2'
import StarFull from '../assets/svgs/starFull'

type ProductColumns = {
    img: any
}

const ProductColumns: FC<ProductColumns> = ({ img }) => {
    return (
        <div className="">
            <h2 className="text-white text-xl md:text-xl xl:text-2xl mb-2">این یک متن آزمایشی است</h2>
            <h3 className="text-gray-8 text-sm md:text-base xl:text-lg">لورم ایپسوم و لورمایپسوم و لورم ایپسوم و  لورماپسو و ایپسوم </h3>

            <div className="flex flex-wrap text-white w-full h-60 border-[1px] border-gray-8 bg-dark-main p-4 mt-8">
                <div className="flex flex-wrap w-[80%] ">
                    <h4 className="text-white w-full text-sm md:text-base xl:text-lg 2xl:text-xl py-4">
                        سرم پوست بایو آکوا مدل ویتامین C
                    </h4>
                    <p className="text-gray-8 w-full mb-4">
                        ویژگی‌ها: لورم ایسو لورمایپسووم و لورم ایپ ورم ایسو لورمایووم و لورم ایپ ورم ایسوسووم و لورم ورم ایسو لورماسووم و لورم ایپ ورم ایسو لورمایپسم و لورم ایپ ورم ایسو لورمایپسووم و لورم ایپ.
                    </p>
                    <div className="flex justify-between w-[90%] text-xs md:text-sm 2xl:text-base">
                        <div className="flex items-center justify-between w-96">
                            <div className="flex flex-wrap justify-center w-[20%]">
                                <ThumbsUp />
                                <span className="mr-1">56</span>
                            </div>
                            <div className="flex flex-wrap justify-center w-[20%]">
                                <Visibility />
                                <span className="mr-1">56</span>
                            </div>
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
                        <div className="flex items-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl cursor-pointer">
                            <span className="ml-4">
                                قیمت:
                            </span>
                            <span className="">
                                ۵۶٬۰۰۰
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center relative w-[20%] h-[90%] border-r-[1px] border-gray-2 border-dashed">
                    <img src={img} className="h-full" />
                    <button className="text-xs md:text-sm 2xl:text-base flex justify-center items-center text-white absolute -bottom-[9px]">
                        <span className="ml-4">
                            افزودن به سبد خرید
                        </span>
                        <span className="rotate-90"><Arrow color="#fff" /></span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductColumns