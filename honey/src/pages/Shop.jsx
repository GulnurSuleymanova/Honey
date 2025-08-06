import bgImage from "../assets/slider4.webp";

const Shop = () => {
  return (
    <div>
 <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center ">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">Shop</h1>
        </div>
      </section>    </div>
  )
}

export default Shop
