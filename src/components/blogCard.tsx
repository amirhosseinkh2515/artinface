import { FC } from "react"
import CustomLink from "./customLink"
import Arrow from '../assets/svgs/arrow2'
import Timer from '../assets/svgs/timer'
import ThumbsUp from '../assets/svgs/thumbsUp'
import Visibility from '../assets/svgs/visibility'

type BlogCard = {
    img: any
}

const BlogCard: FC<BlogCard> = ({ img }) => {
    return (
        <div className="border-[1px] border-gray-8 w-96 xl:w-104 2xl:w-132 bg-dark-main">
            <img src={img} className="" />
            <div className="w-full flex text-gray-8 px-4 pt-4 text-sm md:text-sm xl:text-base 2xl:text-xl">
                <span className="w-[48%]">
                    ۲۹ فروردین ۱۴۰۰
                </span>
                <div className="w-full flex flex-wrap justify-end w-full">
                    <div className="flex flex-wrap justify-center w-[35%]">
                        <Timer />
                        <span className="mr-1">10 دقیقه</span>
                    </div>
                    <div className="flex flex-wrap justify-center w-[25%]">
                        <ThumbsUp />
                        <span className="mr-1">56</span>
                    </div>
                    <div className="flex flex-wrap justify-center w-[25%]">
                        <Visibility />
                        <span className="mr-1">56</span>
                    </div>
                </div>
            </div>
            <h4 className="text-white text-xl md:text-xl xl:text-2xl p-4">
                این یک متن آزمایشی برای  این مقاله میباشد
            </h4>
            <p className="text-white text-sm md:text-base xl:text-lg px-4">
                لورم ایپسوم و لورمایپسوم و لورم ایپسوم و  لورمایپسو و لورم ایپسوم و  لایپسوم  لورمایپسوملورم ایپسوم و لورمایپسوم و لورم ایپسوم و  لورمایپسو و لور و لورم ایپسوم و لایپسوم  لورمایپسوملورم ایوم و لورم ایپسوم و  لورمایپسوپسوم ...
            </p>
            <div className="flex flex-wrap justify-between p-4">
                <span className="text-white p-2 h-max text-sm border-[1px] border-gray-8">
                    پوست
                </span>
                <CustomLink className="flex items-center text-white text-base md:text-lg xl:text-xl ">
                    <span className="ml-4">
                        ادامه مطالعه
                    </span>
                    <span className="rotate-90"><Arrow color="#fff" /></span>
                </CustomLink>
            </div>
        </div>
    )
}

export default BlogCard