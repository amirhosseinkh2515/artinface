import React, { FC } from 'react'
import { convertNumberToPercant, addPercantToNumber } from '../utils/constants'

type FaceDetails = {
    data: any
}

const FaceDetails: FC<FaceDetails> = ({ data }) => {
    return (
        <div className='flex'>
            <div className='relative w-120 h-120'>
                <img src={data.image} className="absolute w-full h-full" />
                <img src={data.png_image} className="absolute w-full h-full opacity-50 mix-blend-difference brightness-50" />
            </div>
            {data.part == "wrinkle" ?
                <div className='bg-dark-main p-4 w-[40%] h-120'>
                    <p className='text-gray-8 mb-8'>چین و چروک هر ناحیه</p>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>پیشانی</span>
                        <span>{addPercantToNumber(data.data.forehead)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>گونه چپ</span>
                        <span>{addPercantToNumber(data.data.left_cheek)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>چشم چپ</span>
                        <span>{addPercantToNumber(data.data.left_eye)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span> فک چپ پایین</span>
                        <span>{addPercantToNumber(data.data.left_mandibular)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>بینی</span>
                        <span>{addPercantToNumber(data.data.mental)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>دهان</span>
                        <span>{addPercantToNumber(data.data.mouth)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>گونه راست</span>
                        <span>{addPercantToNumber(data.data.right_cheek)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>چشم راست</span>
                        <span>{addPercantToNumber(data.data.forehead)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-4'>
                        <span>فک راست پایین</span>
                        <span>{addPercantToNumber(data.data.right_mandibular)}</span>
                    </div>
                </div>
                :
                <div className='bg-dark-main p-4 w-[40%] h-120 overflow-auto custom-scrollbar'>
                    <p className='text-gray-8 mb-4'>چین و چروک هر ناحیه</p>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>پف زیر چشم</span>
                        <span>{convertNumberToPercant(data.data.Bags_Under_Eyes)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>مقدار کچلی</span>
                        <span>{convertNumberToPercant(data.data.Bald)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>موی چتری</span>
                        <span>{convertNumberToPercant(data.data.Bangs)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>تاری عکس</span>
                        <span>{convertNumberToPercant(data.data.Blurry)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>غبغب</span>
                        <span>{convertNumberToPercant(data.data.Double_Chin)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>عینک</span>
                        <span>{convertNumberToPercant(data.data.Eyeglasses)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>موی خاکستری</span>
                        <span>{convertNumberToPercant(data.data.Gray_Hair)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>آرایش غلیظ</span>
                        <span>{convertNumberToPercant(data.data.Heavy_Makeup)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>مرد</span>
                        <span>{convertNumberToPercant(data.data.Male)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>مقدار بازی دهان</span>
                        <span>{convertNumberToPercant(data.data.Mouth_Slightly_Open)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>سبیل</span>
                        <span>{convertNumberToPercant(data.data.Mustache)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>بدون ریش</span>
                        <span>{convertNumberToPercant(data.data.No_Beard)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>رنگ پریدگی</span>
                        <span>{convertNumberToPercant(data.data.Pale_Skin)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>خط رویش </span>
                        <span>{convertNumberToPercant(data.data.Receding_Hairline)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>درحال خنده</span>
                        <span>{convertNumberToPercant(data.data.Smiling)}</span>
                    </div>
                    <div className='flex justify-between w-full text-gray-8 mb-2'>
                        <span>دارای کلاه</span>
                        <span>{convertNumberToPercant(data.data.Wearing_Hat)}</span>
                    </div>
                </div>
            }
        </div>
    )
}
export default FaceDetails