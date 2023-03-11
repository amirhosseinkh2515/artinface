import { FC } from "react"

type ImperfectDetectionComponent = {
    setRenderingComponent:any
    text:string
}

const ImperfectDetectionComponent:FC<ImperfectDetectionComponent> = ({setRenderingComponent,text}) =>{
    return(
        <div className="container flex flex-wrap justify-center items-center mx-auto">
            <p className="w-full text-center text-white mt-20">{text}</p>
            <button className="mt-10 text-white bg-red-main p-2" onClick={()=>setRenderingComponent("take_image")}>
                بازگشت
            </button>
        </div>
    )
}

export default ImperfectDetectionComponent