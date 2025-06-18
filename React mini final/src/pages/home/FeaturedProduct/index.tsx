

const FeaturedProduct = () => {
  return (
    <div className="bg-cover bg-center w-full h-200 bg-[url('https://dt-wine.myshopify.com/cdn/shop/files/img8.jpg?v=1613690957')]">
        <h1 className="text-white text-center text-4xl pt-15">Featured Products</h1>
        <p className="text-white text-center text-xl pt-5">Porem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar <br /> dapibus leo.</p>
       <div className="grid grid-cols-5">
       <div>
            <div className="div">
            <img src="https://dt-wine.myshopify.com/cdn/shop/files/img-1_770x.png?v=1613690272" alt="" />
            <button className=" cursor-pointer transition duration-500 py-5 px-27 text-xl hover:bg-[#d2aa5c] text-white ">CHENINING</button>

            </div>
        </div>
        <div>
            <div className="div">
            <img src="https://dt-wine.myshopify.com/cdn/shop/files/img-4_770x.png?v=1613690272" alt="" />
            <button className=" cursor-pointer transition duration-500 py-5 px-30 text-xl hover:bg-[#d2aa5c] text-white ">SAUVIGNON</button>

            </div>
        </div>
        <div>
            <div className="div">
            <img src="https://dt-wine.myshopify.com/cdn/shop/files/img-3_770x.png?v=1613690272" alt="" />
            <button className=" cursor-pointer transition duration-500 py-5 px-37 text-xl hover:bg-[#d2aa5c] text-white ">ARROS</button>

            </div>
        </div>
        <div>
            <div className="div">
            <img src="https://dt-wine.myshopify.com/cdn/shop/files/img-2_770x.png?v=1613690272" alt="" />
            <button className=" cursor-pointer transition duration-500 py-5 px-33 text-xl hover:bg-[#d2aa5c] text-white "> HARVEST</button>

            </div>
        </div>
        <div>
            <div className="div">
            <img src="https://dt-wine.myshopify.com/cdn/shop/files/img-5_e16794af-a7d6-4985-aa2f-ccbbd30fe149_770x.png?v=1622460918" alt="" />
            <button className=" cursor-pointer transition duration-500 py-5 px-33 text-xl hover:bg-[#d2aa5c] text-white "> SPARKLING</button>

            </div>
        </div>
        
       </div>

</div>
  )
}

export default FeaturedProduct 