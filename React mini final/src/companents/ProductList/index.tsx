// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   name: string | null;
//   price: number | null;
//   image: { url: string }[];
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1337/api/products?populate=*")
//       .then((res) => {
//         console.log(res.data.data);
//         setProducts(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//       });
//   }, []);

//   return (
//    <div className=" ">
//       <h1 className=" pt-15 text-4xl text-center m-5 font-semibold">New Arrivals</h1>
//       <p className="text-center m-2">Zirem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
//       <div className=" flex gap-2 justify-center p-5   ">
//         <button className="border-1 border-[#e4e4e4] p-2 cursor-pointer hover:bg-[#d2aa5c] hover:text-white px-10">Featured Product</button>
//         <button className="border-1 border-[#e4e4e4] p-2 cursor-pointer hover:bg-[#d2aa5c] hover:text-white px-10">New Products</button>
//         <button className="border-1 border-[#e4e4e4] p-2 cursor-pointer hover:bg-[#d2aa5c] hover:text-white px-10">Best Seller</button>
//       </div>
//      <div className="container mx-75 flex   ">
//       <ul className="grid grid-cols-4 gap-25   ">
//         {products.map((product) => {
//           const name = product.name ?? "No name";
//           const price = product.price ?? "Unknown";
//           const imageUrl = product.image?.[0]?.url;

//           return (
//             <li className="" key={product.id} >
//              <div className="group realtive">
//              {imageUrl && (
//                 <img className="w-50  "
//                   src={`http://localhost:1337${imageUrl}`}
//                   alt={name}
//                 />
//               )}
//              </div>
//               <div className="">
//               <h3 className=" font-semibold text-center hover:text-[#c1001c] cursor-pointer">{name}</h3>
//               <p className="text-[#c1001c] text-center text-xl  leading-15 "> {price} $</p>
//               <button className="border-1 border-[#e4e4e4] px-9 p-2 flex gap-3 cursor-pointer hover:bg-[#d2aa5c] hover:text-white">
//                  <svg className="w-5 hover:text-white " xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" viewBox="0 0 100 100"><g><path d="M94.4,22.7c-0.4-0.1-0.8-0.2-1.2-0.2H77.5h-7.8H46.1h-7.8h-9.8L25,12.8c-2.1-6-7.8-10-14.2-9.9H6.8c-2.2,0-3.9,1.8-3.9,3.9
// 		             s1.8,3.9,3.9,3.9h3.9c3,0,5.7,1.9,6.7,4.7l15.2,42.4c1.7,4.7,6.1,7.8,11.1,7.8h32c5.1,0,9.6-3.2,11.2-8l10-30
// 		             C97.6,25.6,96.5,23.4,94.4,22.7z"></path> <circle cx="42.1" cy="85.3" r="11.8"></circle> <circle cx="73.5" cy="85.3" r="11.8"></circle></g></svg>Add to Card
//                  </button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//    </div>
//   );
// };

// export default ProductList;



import axios from "axios";
import { useEffect, useState } from "react";
import { FaBasketShopping, FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

interface Product {
  id: number;
  name: string | null;
  price: number | null;
  image: { url: string }[];
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <h1 className="pt-15 text-4xl text-center m-5 font-semibold">New Arrivals</h1>
      <p className="text-center m-2">
        Zirem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex gap-2 justify-center p-5">
        <button className="border-1 border-[#e4e4e4] p-2 cursor-pointer hover:bg-[#d2aa5c] hover:text-white px-10">Featured Product</button>
        <button className="border-1 border-[#e4e4e4] p-2 cursor-pointer hover:bg-[#d2aa5c] hover:text-white px-10">New Products</button>
        <button className="border-1 border-[#e4e4e4] p-2 cursor-pointer hover:bg-[#d2aa5c] hover:text-white px-10">Best Seller</button>
      </div>
      <div className="container mx-75 flex">
        <ul className="grid grid-cols-4 gap-25">
          {products.map((product) => {
            const name = product.name ?? "No name";
            const price = product.price ?? "Unknown";
            const imageUrl = product.image?.[0]?.url;

            return (
              <li key={product.id}>
                <div className="group relative">
                  {imageUrl && (
                    <img className="w-50" src={`http://localhost:1337${imageUrl}`} alt={name} />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <button
                        className=" cursor-pointer  text-[#c1001c] bg-white shadow-4xl hover:bg-[#c1001c] hover:text-white  px-4 py-2 "
                        onClick={() => handleOpenModal(product)}
                      >
                        <FaBasketShopping />

                      </button>
                      <button className=" cursor-pointer  hover:bg-[#c1001c] hover:text-white  text-[#c1001c] font-bold px-4 py-4 shadow-4xl  bg-white  "><IoSearch />
                      </button>
                      <button className=" cursor-pointer  hover:bg-[#c1001c] hover:text-white  text-[#c1001c] font-bold px-4 py-4 bg-white shadow-4xl  "><FaRegHeart />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-center hover:text-[#c1001c] cursor-pointer">{name}</h3>
                  <p className="text-[#c1001c] text-center text-xl  leading-15"> {price} $</p>
                  <button
                    className="border-1 border-[#e4e4e4] px-9 p-2 ml-6 flex gap-3 cursor-pointer hover:bg-[#d2aa5c] hover:text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-100 p-15 rounded-lg transform transition-all duration-500 ease-in-out translate-y-20">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>


            {selectedProduct.image?.[0]?.url && (
              <img
                className="w-full mb-4"
                src={`http://localhost:1337${selectedProduct.image[0].url}`}
                alt={selectedProduct.name}
              />
            )}

            <div className="leading-10">
              <p>Name: {selectedProduct.name}</p>
              <p>Price: ${selectedProduct.price}</p>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-6 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {sidebarOpen && selectedProduct && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-end">
          <div className="bg-white w-96 p-8 flex flex-col transform transition-transform duration-500 ease-in-out translate-x-0">
            <button
              onClick={handleCloseSidebar}
              className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
            >
              X
            </button>

            <h2 className="text-2xl font-bold mb-4">Product Added to Cart</h2>

            {selectedProduct.image?.[0]?.url && (
              <img
                className="w-full mb-4"
                src={`http://localhost:1337${selectedProduct.image[0].url}`}
                alt={selectedProduct.name}
              />
            )}

            <div className="leading-10">
              <p>Name: {selectedProduct.name}</p>
              <p>Price: ${selectedProduct.price}</p>
            </div>

            <div className="mt-4">
              <button className="bg-white  hover:text-white px-6 py-2 text-black hover:bg-amber-300 cursor-pointer border-1 w-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaBasketShopping, FaRegHeart } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";

// interface Product {
//   id: number;
//   name: string | null;
//   price: number | null;
//   image: { url: string }[];
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1337/api/products?populate=*")
//       .then((res) => {
//         setProducts(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//       });
//   }, []);

//   const handleOpenModal = (product: Product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <div>
//       <h1 className="pt-15 text-4xl text-center m-5 font-semibold">New Arrivals</h1>
//       <div className="container mx-75 flex">
//         <ul className="grid grid-cols-4 gap-25">
//           {products.map((product) => {
//             const name = product.name ?? "No name";
//             const price = product.price ?? "Unknown";
//             const imageUrl = product.image?.[0]?.url;

//             return (
//               <li key={product.id}>
//                 <div className="group relative">
//                   {imageUrl && (
//                     <img
//                       className="w-50"
//                       src={`http://localhost:1337${imageUrl}`}
//                       alt={name}
//                     />
//                   )}

//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="flex gap-3">
//                       <button
//                         className="cursor-pointer text-[#c1001c] bg-white shadow-4xl hover:bg-[#c1001c] hover:text-white px-4 py-2"
//                         onClick={() => handleOpenModal(product)}
//                       >
//                         <FaBasketShopping />
//                       </button>
//                       <button className="cursor-pointer hover:bg-[#c1001c] hover:text-white text-[#c1001c] font-bold px-4 py-4 shadow-4xl bg-white">
//                         <IoSearch />
//                       </button>
//                       <button className="cursor-pointer hover:bg-[#c1001c] hover:text-white text-[#c1001c] font-bold px-4 py-4 bg-white shadow-4xl">
//                         <FaRegHeart />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-center hover:text-[#c1001c] cursor-pointer">{name}</h3>
//                   <p className="text-[#c1001c] text-center text-xl leading-15"> {price} $</p>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {modalOpen && selectedProduct && (
//         <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white w-96 p-6 rounded-lg transform transition-all duration-500 ease-in-out translate-y-20">
//             <div className="relative">
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-4 right-4 text-gray-600"
//               >
//                 X
//               </button>
//               <img
//                 className="w-full mb-4"
//                 src={`http://localhost:1337${selectedProduct.image[0].url}`}
//                 alt={selectedProduct.name}
//               />
//               <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
//               <p className="text-lg">Price: ${selectedProduct.price}</p>
//               <p className="text-lg mt-4">Size: S, M, L</p>
//               <p className="text-lg">Specialty: Alcohol Free</p>
//               <div className="mt-4">
//                 <button className="bg-[#c1001c] text-white px-6 py-2 rounded-md w-full">
//                   Add to Cart
//                 </button>
//                 <button className="bg-gray-200 text-[#c1001c] px-6 py-2 rounded-md w-full mt-2">
//                   View Product
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;
