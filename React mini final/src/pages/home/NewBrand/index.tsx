

const NewBrand = () => {
  return (
    <div className="relative pt-30  ">
        <div>
            <img src="https://dt-wine.myshopify.com/cdn/shop/files/img6_2048x.jpg?v=1613690954" className="h-140 w-full" alt="" />
        </div>
        <div className="absolute top-0 text-white  left-190 my-55 text-center  ">
            <h3 className="text-2xl my-8">New Brand Collection</h3>
            <h1 className="text-6xl font-bold my-8">Hurry</h1>
            <h2 className="text-4xl font-semibold my-8">Flat 50% Off</h2>
            <button className=" hover:bg-[#d2aa5c] hover:text-white transition  duration-200 cursor-pointer bg-white  text-black p-3 m-2">Shop Now</button>
        </div>
    </div>
  )
}

export default NewBrand