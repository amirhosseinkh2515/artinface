import BlogCard from "@/components/blogCard"
import ExpertCard from "@/components/expertCard"
import ProductCard from "@/components/productCard"
import UserComments from "@/components/userComments"
import CustomLink from "@/components/customLink"
import woman from "../assets/images/woman.png"
import woman_applying from "../assets/images/woman-applying-face-cream.png"
import ellipse from "../assets/images/ellipse2.png"
import brand from "../assets/images/brand.png"
import brand1 from "../assets/images/brand1.png"
import brand2 from "../assets/images/brand2.png"
import cream from "../assets/images/cream.png"
import cream2 from "../assets/images/cream2.png"
import shampo from "../assets/images/shampo.png"
import moistrizing from "../assets/images/moistrizing.png"
import FullScreen from '../assets/svgs/fullScreen'
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'
import small_moon from '../assets/images/small_moon.png'
import frame1 from '../assets/images/frame1.png'
import top_dotted from '../assets/images/top_dotted.png'
import dotted_mid from '../assets/images/dotted_mid.png'
import dotted_bottom from '../assets/images/dotted_bottom.png'


export default function Home() {
  return (
    <main className='container w-full mx-auto'>
      {/* top */}
      <div className='flex w-full flex-wrap justify-center relative'>
        <img src={ellipse} className="absolute top-0 w-full" />
        <div className='flex w-[50%] flex-wrap justify-right items-center content-center px-[5%] h-[calc(100vh-78px)] xl:h-[calc(100vh-108px)]  text-white z-[2] relative'>
          <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4">
            متن آزمایشی حدودا کوتاه
          </h1>
          <h2 className="text-lg md:text-xl 2xl:text-2xl">
            این یک متن آزمایشی ثابت برای این بخش است این یک متن آزمایشی ثابت برای این بخش است
          </h2>
          <CustomLink href="/detection-landing" className="flex flex-wrap items-center border-[1px] border-gray-2 p-3 xl:p-4 mt-10 text-lg cursor-pointer ">
            <FullScreen color={"#D9D9D9"} />
            <span className="text-sm xl:text-base mr-4 text-gray-8">
              تشخیص چهره
            </span>
          </CustomLink>
          <img src={frame1} className="mr-10 mt-20" />
          <div className="w-28 h-28 blur-xl custom_gradient absolute right-0 bottom-[25%]" />
          <img src={top_dotted} className="absolute -right-[15%] bottom-[15%] " />
        </div>
        <div className='flex w-[50%] h-[calc(100vh-78px)] xl:h-[calc(100vh-108px)] relative flex-wrap justify-center content-center'>
          <img src={woman} className="w-[40%] absolute top-[10%] right-[7.5%]" />
          <img src={woman_applying} className=" w-[45%] absolute bottom-[10%] left-[7.5%]" />
          <img src={small_moon} className="w-4 h-4 absolute top-[20%] left-[25%]" />
          <img src={small_moon} className="w-12 h-12 absolute bottom-[20%] right-[15%]" />
        </div>

        <div className="w-full justify-center">
          <h3 className="text-lg md:text-xl xl:text-2xl mb-4 text-white text-center mb-10">
            متن آزمایشی حدودا کوتاه
          </h3>
          <div className="flex w-full flex-wrap justify-center">
            <img src={brand} className="p-2 m-8 object-contain w-24 xl:w-32" />
            <img src={brand1} className="p-2 m-8 object-contain w-24 xl:w-32" />
            <img src={brand2} className="p-2 m-8 object-contain w-24 xl:w-32" />
            <img src={brand} className="p-2 m-8 object-contain w-24 xl:w-32" />
            <img src={brand1} className="p-2 m-8 object-contain w-24 xl:w-32" />
            <img src={brand2} className="p-2 m-8 object-contain w-24 xl:w-32" />
            <img src={brand} className="p-2 m-8 object-contain w-24 xl:w-32" />
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="w-full flex flex-wrap items-center justify-center mt-40 relative">
        <h3 className="w-full text-xl md:text-2xl xl:text-4xl mb-4 text-white text-center mb-20">
          بلاگ
        </h3>
        <div className="grid gap-y-12 gap-x-12 grid-cols-3 ">
          <BlogCard img={blog2} />
          <BlogCard img={blog1} />
          <BlogCard img={blog3} />
        </div>
        <CustomLink className="w-full text-xl mb-4 text-white text-center mt-20 cursor-pointer">
          بیشتر
        </CustomLink>
        <div className="w-192 h-120 blur-[100px] -rotate-90 custom_gradient-second absolute -right-[32%] -bottom-[15%]" />
      </div>

      {/* Experts */}
      <div className="w-full flex flex-wrap items-center justify-center mt-40 relative">
        <h3 className="w-full text-xl md:text-2xl xl:text-4xl mb-4 text-white text-center mb-20">
          متخصصان پوست و زیبایی
        </h3>
        <div className="grid gap-y-12 gap-x-12 grid-cols-3">
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
        </div>
        <CustomLink className="w-full text-xl mb-4 text-white text-center mt-20 cursor-pointer">
          بیشتر
        </CustomLink>
        <div className="w-152 h-32 blur-[100px] custom_gradient-third absolute -left-[10%] -bottom-[15%]" />
      </div>

      {/* Best Products */}
      <div className="w-full flex flex-wrap items-center justify-center mt-40 relative">
        <h3 className="w-full text-xl md:text-2xl xl:text-4xl mb-4 text-white text-center mb-20">
          برترین محصولات
        </h3>
        <div className="grid gap-y-12 gap-x-12 grid-cols-3 z-[2]">
          <ProductCard img={cream} />
          <ProductCard img={shampo} />
          <ProductCard img={cream2} />
          <ProductCard img={cream2} />
          <ProductCard img={moistrizing} />
          <ProductCard img={shampo} />
        </div>
        <CustomLink className="w-full text-xl mb-4 text-white text-center mt-20 cursor-pointer">
          بیشتر
        </CustomLink>
        <img src={dotted_mid} className="absolute -left-[5%] -top-[10%] " />
      </div>

      {/* User Comments */}
      <div className="w-full flex flex-wrap items-center justify-center my-40 relative">
        <h3 className="w-full text-xl md:text-2xl xl:text-4xl mb-4 text-white text-center mb-20">
          نظر متخصصان
        </h3>
        <div className="grid gap-y-12 gap-x-12 grid-cols-3 z-[2]">
          <UserComments />
          <UserComments />
          <UserComments />
        </div>
        <CustomLink className="w-full text-xl mb-4 text-white text-center mt-20 cursor-pointer">
          بیشتر
        </CustomLink>
        <img src={dotted_bottom} className="absolute -right-[2%] -top-[20%] " />
      </div>
    </main>
  )
}
