import React, { useEffect, useState, useRef } from 'react'
import lonely_beautiful_girl from '../assets/images/lonely_beautiful_girl.png'
import CustomLink from './customLink'
// import { getDetectDetails } from '../services/detection'
import { useNextQueryParams } from "../hooks/useQueryParams";
import Modal from "./modal";
import FaceDetails from "./faceDetails";
import Loading from './loading';
import { convertNumberToPercant } from '../utils/constants'
import Svg from './svg'

const DetectionResultComponent = ({ data }: { data: any }) => {
    const imgRef = useRef<any>(null);
    const [showModal, setShowModal] = useState(false)
    const [dataSentToModal, setDataSentToModal] = useState({})
    const container_width = imgRef?.current?.offsetWidth
    console.log(container_width, "imgRefimgRef")

    const onOpenModalClicked = (part: string) => {
        if (part == "wrinkle") {
            setDataSentToModal({
                part: "wrinkle",
                image: data.image,
                png_image: data.wrinkle_mask,
                data: data.wrinkle_fractions
            })
            setShowModal(true)
        }
        else {
            setDataSentToModal({
                part: "redness",
                image: data.image,
                png_image: data.redness_mask,
                data: data.facial_attributes
            })
            setShowModal(true)
        }
    }

    return (
        <>
            <div className='flex flex-wrap justify-center container w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto'>
                <p className='text-gray-8 text-xl my-20'>
                    برای تشخیص مجدد صفحه را رفرش کنید
                </p>
                <div className='grid gap-y-12 gap-x-12 grid-cols-2 sm:grid-cols-4 text-white w-full'>
                    <div className='flex flex-wrap justify-between text-gray-8 text-xl w-full'>
                        <p className='w-full text-sm md:text-base xl:text-base'>سن پوستی(STD):</p>
                        <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data.predicted_age}</span>
                    </div>
                    <div className='flex flex-wrap justify-between text-gray-8 text-xl w-full'>
                        <p className='w-full text-sm md:text-base xl:text-base'>چین و چروک:</p>
                        <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data.has_wrinkle ? "دارد" : "ندارد"}</span>
                    </div>
                    <div className='flex flex-wrap justify-between text-gray-8 text-xl w-full'>
                        <p className='w-full text-sm md:text-base xl:text-base'>قرمزی پوست:</p>
                        <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data.has_redness ? "دارد" : "ندارد"}</span>
                    </div>
                    <div className='flex flex-wrap justify-between text-gray-8 text-xl w-full'>
                        <p className='w-full text-sm md:text-base xl:text-base'>پف زیر چشم:</p>
                        <span className='text-xl md:text-xl xl:text-2xl 2xl:text-3xl'>{data.has_eyebag ? "دارد" : "ندارد"}</span>
                    </div>
                </div>
                {/* grid gap-y-12 gap-x-12 grid-cols-4 */}
                <div className='flex flex-wrap justify-center sm:grid gap-y-12 gap-x-4 lg:gap-y-12 lg:gap-x-12 content-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white w-full mt-10'>
                    <div className='flex flex-wrap w-[256px] h-[256px]'>
                        <img src={data.image} className="w-full h-full" />
                        <span className='w-full text-gray-8 my-2 xl:my-4 text-center'>
                            تصویر اصلی
                        </span>
                    </div>
                    <div className='flex flex-wrap w-[256px] h-[256px]'>
                        <img ref={imgRef} src={data.image} className="w-full h-full" />
                        {container_width &&
                            <span className="absolute w-full h-full">
                                <Svg width={container_width} data={data.segments} />
                            </span>
                        }

                        <span className='w-full text-gray-8 my-2 xl:my-4 text-center'>
                            نقاط تشخیص
                        </span>
                    </div>
                    <button onClick={() => onOpenModalClicked("wrinkle")} className='flex flex-wrap relative w-[256px] h-[310px]'>
                        <img src={data.image} className="absolute w-60 w-full" />
                        <img src={data.wrinkle_mask} className="absolute w-full pacity-50 mix-blend-difference brightness-50" />
                        <span className='w-full text-gray-8 my-2 xl:my-4 absolute bottom-4 xl:bottom-0'>
                            محل چین و چروک
                        </span>
                    </button>
                    <button onClick={() => onOpenModalClicked("redness")} className='flex flex-wrap relative w-[256px] h-[310px]'>
                        <img src={data.image} className="absolute w-full " />
                        <img src={data.redness_mask} className="absolute w-full opacity-50 mix-blend-difference brightness-50" />
                        <span className='w-full text-gray-8 my-2 xl:my-4 absolute bottom-4 xl:bottom-0'>
                            محل سرخی
                        </span>
                    </button>
                </div>
                <div className='flex flex-wrap w-full justify-between items-end my-8'>
                    <div className='flex flex-wrap p-8 w-full md:w-[48%] mt-4 bg-dark-main'>
                        <p className='w-full text-gray-8 text-xl leading-10'>ریز نمودار</p>
                        <div className='w-full flex justify-between text-green-second leading-8'>
                            <span>موی چتری</span>
                            <span>{convertNumberToPercant(data.facial_attributes.Bangs)}</span>
                        </div>
                        <div className='w-full flex justify-between text-green-third leading-8'>
                            <span>رنگ‌پریدگی پوست</span>
                            <span>{convertNumberToPercant(data.facial_attributes.Pale_Skin)}</span>
                        </div>
                        <div className='w-full flex justify-between text-white leading-8'>
                            <span>خندیدن</span>
                            <span>{convertNumberToPercant(data.facial_attributes.Smiling)}</span>
                        </div>
                        <div className='w-full flex justify-between text-white leading-8'>
                            <span>مرد</span>
                            <span>{convertNumberToPercant(data.facial_attributes.Male)}</span>
                        </div>
                    </div>
                    <CustomLink className='border-[1px] border-gray-8 py-2 px-8 mt-4 md:mt-0 bg-dark-main text-gray-8'>
                        معرفی محصولات
                    </CustomLink>
                </div>
            </div>
            {showModal &&
                <Modal setShowModal={setShowModal} closeable={true} containerClassName="z-[70] items-center" innerClassName="w-mc sm:w-[768px]">
                    <FaceDetails data={dataSentToModal} />
                </Modal>
            }
        </>
    )
}
export default DetectionResultComponent