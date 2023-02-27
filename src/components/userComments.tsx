import { FC } from "react"
import CustomLink from "./customLink"
import Arrow from '../assets/svgs/arrow2'
import Rating from "./rating"

type UserComments = {

}

const UserComments: FC<UserComments> = ({ }) => {
    return (
        <div className="border-[1px] border-gray-8 w-96 xl:w-104 2xl:w-126 bg-dark-main p-8">
            <div className="flex flex-wrap justify-between items-center w-full mb-4">
                <h4 className="text-white text-xl md:text-xl xl:text-2xl 2xl:text-3xl">
                    نام و نام خانوادگی
                </h4>
                <Rating value={5}/>
            </div>
            <p className="text-white text-sm md:text-base xl:text-lg 2xl:text-xl">
                لورم ایپسوم و لورمایپسوم و لورم ایپسوم و  لورمایپسوم و لورم ایپسوم و لورمم و لایپسوم لورم  لورمایپسوما لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم ایپ و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم لورم.
            </p>
        </div>
    )
}

export default UserComments