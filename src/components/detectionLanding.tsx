import { useState } from 'react'
import Arrow from "@/assets/svgs/arrow2"
import CustomLink from "./customLink"


const DetectionLanding = () => {
    const [state, setState] = useState(0)

    const onArrowClicked = (arrow:any) => {
        if(arrow == "right" && (state == 2 || state == 1)){
                setState(state - 1)
        }
        else if(arrow == "left" && (state == 0 || state == 1)){
            setState(state + 1)
        }
    }
    
    return (
        <div className="container mx-auto flex justify-center items-center h-screen -mt-20">
            <div className="flex flex-wrap justify-center border-[1px] border-gray-8 w-126 bg-dark-main p-8 relative">
                <div className="h-96 w-full">

                </div>
                <p className="text-center text-white font-bold">
                    این یک متن حدودا متوسط آزمایشی میباشد
                </p>
                <p className="text-center text-white my-4">
                    ورم ایسو لورمایپسووم و لورم ایپ  لورم ایپ ورم ایسو لورمایپسو لورایپلورم ایسو لورمایپسووم و لورم ایپ ورم ایسو لورمایپسو.
                </p>
                <div className="w-14 flex justify-between">
                    <button onClick={()=>onArrowClicked("right")} className="rotate-[270deg]">
                        {state == 0 ?
                            <Arrow color="#4A4A4A" />
                            :
                            <Arrow color="#fff" />
                        }
                    </button>
                    <button onClick={()=>onArrowClicked("left")} className="rotate-90">
                        {state !== 2 ?
                            <Arrow color="#fff" />
                            :
                            <Arrow color="#4A4A4A" />
                        }
                    </button>
                </div>
                <div className='absolute bottom-8 left-8 text-white text-sm'>
                    {state !== 2 ?
                        <button onClick={()=>onArrowClicked("left")}>
                            رد کردن
                        </button>
                        :
                        <CustomLink href='/detection' className="cursor-pointer">
                            شروع
                        </CustomLink>
                    }
                </div>
            </div>
        </div>
    )
}

export default DetectionLanding