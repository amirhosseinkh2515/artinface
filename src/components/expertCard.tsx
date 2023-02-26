import { FC } from "react"
import CustomLink from "./customLink"
import Arrow from '../assets/svgs/arrow2'
import smiling_man from '../assets/images/smiling_man.png'
import StarFull from '../assets/svgs/starFull'

type ExpertCard = {

}

const ExpertCard: FC<ExpertCard> = ({ }) => {
    return (
        <div className="border-[1px] border-gray-8 w-90 xl:w-104 2xl:w-126 bg-dark-main p-4 xl:p-8">
            <div className="flex">
                <img src={smiling_man} className="w-28 h-28 md:w-24 md:h-24 w-28 h-28" />
                <div className="flex flex-wrap mr-4 xl:mr-8">
                    <h4 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl p-2 xl:p-4">
                        نام و نام خانوادگی
                    </h4>
                    <p className="text-white mb-4">
                        حرفه در این بخش
                    </p>
                    <div className="flex justify-between w-full">
                        <div className="text-white w-[50%] text-xs md:text-sm 2xl:text-base">
                            <span>
                                تعداد مشاوره:
                            </span>
                            <span>
                                ۳۲۵
                            </span>
                        </div>
                        <div className="flex justify-end w-[50%] text-xs md:text-sm 2xl:text-base">
                            <span className="text-white">
                                ۴.۸ (۶۵)
                            </span>
                            <StarFull />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-full mt-4">
                <CustomLink className="flex items-center text-white text-base md:text-lg xl:text-xl 2xl:text-2xl ">
                    <span className="ml-4">
                     دریافت مشاوره
                    </span>
                    <span className="rotate-90 w-6 h-6"><Arrow color="#fff" width="24" height="24" /></span>
                </CustomLink>
            </div>
        </div>
    )
}

export default ExpertCard