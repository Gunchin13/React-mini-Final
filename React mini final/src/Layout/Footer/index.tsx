import { FaHome, FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

const Footer = () => {
  return (
  <div className="flex gap-5 relative pt-15  ">
    <img src="https://dt-wine.myshopify.com/cdn/shop/files/footer_46a4e8fb-eedd-4ab8-9889-0511b7a7a03d.jpg?v=1623125003" className="h-100 w-800 object-cover" alt="" />
    
   <div className="absolute flex gap-60 leading-10 p-10 pl-20">
   <div>
      <h1 className="font-bold text-xl ">Help</h1>
      <ul>
        <li>Search</li>
        <li>Help</li>
        <li>Information</li>
        <li>Privacy Policy</li>
        <li>Shipping Details</li>
      </ul>
    </div>
    <div className="div">
      <h1 className="font-bold text-xl">Support</h1>
      <ul>
      <li>Contact Us</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Refunds & Returns</li>
      <li>Deliveries</li>
      </ul>
    </div>
    <div className="div">
      <h1 className="font-bold text-xl">Information</h1>
      <li>Search Terms</li>
      <li>Advanced Search</li>
      <li>Help & FAQ's</li>
      <li>Store Location</li>
      <li>Orders & Returns</li>
    </div>
    <div className="div">
      <h1 className="font-bold text-xl">Contact Us</h1>
      <h3 className="flex gap-2 "> <FaHome className="mt-3" />
      No: 58 A, East Madison <br /> Street,
      Baltimore, MD, USA 4508
      </h3>
      <h4 className="flex gap-2" ><FaPhoneAlt className="mt-3"/>
      0000 - 123 - 456789</h4>
      <h5 className="flex gap-2"> <IoMdMail className="mt-3" />
      mailto:mail@example.com</h5>
    </div>
   </div>
  </div>
  )
}

export default Footer