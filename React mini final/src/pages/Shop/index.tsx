import React from 'react'
import ProductList from '../../companents/ProductList'

const Shop = () => {
  return (
    // <div className='grid grid-cols-4'>
    //   <div className="div">
    //     <h1>dkjvckadc</h1>
    //   </div>
    //   <div className="div">
    //   <div className="">
    //     <img src="https://dt-wine.myshopify.com/cdn/shop/products/pdt12_2d23e7f5-e5c6-47ba-89f2-745b888c3a72_380x446.jpg?v=1533618830" className='w-70' alt="" />
    //   </div>
    //   <div className="px-20  ">
    //     <p className=''>Bavaria Alco</p>
    //     <h3>$210</h3>
    //     <button className='border-1 px-6 py-2'>Add to Card</button>
    //   </div>
    //   </div>
    //   <div className="div">
    //   <div className="">
    //     <img src="https://dt-wine.myshopify.com/cdn/shop/products/pdt12_2d23e7f5-e5c6-47ba-89f2-745b888c3a72_380x446.jpg?v=1533618830" alt="" />
    //   </div>
    //   <div className="div">
    //     <p>Bavaria Alco</p>
    //     <h3>$210</h3>
    //     <button>Add to Card</button>
    //   </div>
    //   </div>
    //   <div className="div">
    //   <div className="">
    //     <img src="https://dt-wine.myshopify.com/cdn/shop/products/pdt12_2d23e7f5-e5c6-47ba-89f2-745b888c3a72_380x446.jpg?v=1533618830" alt="" />
    //   </div>
    //   <div className="div">
    //     <p>Bavaria Alco</p>
    //     <h3>$210</h3>
    //     <button>Add to Card</button>
    //   </div>
    //   </div>
    // </div>
    <div className="div">
      <ProductList/>

    </div>
    
    
  )
}

export default Shop