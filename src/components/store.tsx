import ProductCard from "./productCard"
import cream from "../assets/images/cream.png"
import cream2 from "../assets/images/cream2.png"
import shampo from "../assets/images/shampo.png"
import moistrizing from "../assets/images/moistrizing.png"

const Store = () => {
    return (
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
                <ProductCard img={cream} />
                <ProductCard img={shampo} />
                <ProductCard img={cream2} />
                <ProductCard img={cream2} />
                <ProductCard img={moistrizing} />
                <ProductCard img={shampo} />
                <ProductCard img={cream} />
                <ProductCard img={shampo} />
                <ProductCard img={cream2} />
                <ProductCard img={cream2} />
                <ProductCard img={moistrizing} />
                <ProductCard img={shampo} />
            </div>
        </div>

    )
}

export default Store