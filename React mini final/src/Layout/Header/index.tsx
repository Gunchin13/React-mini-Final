import { Link } from "react-router-dom"
import { MainLogo } from "../../Icons"
const Header = () => {
  return (
    <div >
      <div className='flex justify-between pt-3'>
      <div className="w-20 flex gap-7 ml-10 ">
      <svg className=' fill-black hover:fill-[#c1001c] transition-colors duration-200 cursor-pointer'
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 100 100"
  
  xmlSpace="preserve"
>
  <path d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
	l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1c-17.1,0-30.9-13.8-30.9-30.9
	c0-17.1,13.8-30.9,30.9-30.9c17.1,0,30.9,13.8,30.9,30.9c0,0,0,0,0,0C75.1,61.3,61.3,75.1,44.3,75.1z" />
      </svg>
      <svg
  className="fill-black hover:fill-[#c1001c] transition-colors duration-200 cursor-pointer"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 100 100"
  >
  <g>
    <path d="M46.8,57c0.9,0,1.8,0,2.7,0c12,0,19.2-13.2,20.7-23.7c0.3-1.5,0.6-3.3,0.6-5.1C70.9,15.5,62.8,5,49.5,5S28.2,15.5,28.2,28.2C28.2,39.6,34.5,54.6,46.8,57z"></path>
    <path d="M64.3,60.6c-3.6-0.9-4.8-0.6-6.9,5.1l-7.2,20.7l-7.5-20.7c-2.1-5.7-3.3-6-6.9-5.1c-15.3,3.3-24,3.9-23.7,20.1v10.2c0,2.6,1.5,4,3,4c0,0,0,0,0,0h69.9v0c1.6,0,3.1-1.4,3.1-4.1V80.7C88.3,64.5,79.6,63.9,64.3,60.6z"></path>
  </g>
</svg>

       
      </div>
      <MainLogo/>
      <div className="w-20 flex gap-7 mr-10">
      <svg className="heart-filled fill-black hover:fill-[#c1001c] transition-colors duration-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" >
  
  <path d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
    C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
    S83.7,28.3,81.1,30.9z"></path>
      </svg>
      <svg className=' fill-black hover:fill-[#c1001c] transition-colors duration-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 100 100">
       <g>
	     <path d="M94.4,22.7c-0.4-0.1-0.8-0.2-1.2-0.2H77.5h-7.8H46.1h-7.8h-9.8L25,12.8c-2.1-6-7.8-10-14.2-9.9H6.8c-2.2,0-3.9,1.8-3.9,3.9
		   s1.8,3.9,3.9,3.9h3.9c3,0,5.7,1.9,6.7,4.7l15.2,42.4c1.7,4.7,6.1,7.8,11.1,7.8h32c5.1,0,9.6-3.2,11.2-8l10-30
		   C97.6,25.6,96.5,23.4,94.4,22.7z"></path>
	     <circle cx="42.1" cy="85.3" r="11.8"></circle>
	     <circle cx="73.5" cy="85.3" r="11.8"></circle>
       </g>
      </svg>
      </div>
      </div>
      <div className="pt-20" >
        <div className="flex justify-center">
          {/* <ul >
            <li>
              <Link to="/">Home</Link>
              <Link to="/collection">collection</Link>
              <Link to="/shop">shop</Link>
            </li>
          </ul> */}


         <div className="">
         <ul className="flex gap-5 cursor-pointer ">
            <li className=" cursor-pointer ">Home</li>
            <li className="">Collection</li>
            <li>Shop</li>
            <li>OurWines</li>
            <li>Restaurant</li>
            <li>Pages</li>
            <li>Tour & Tasting</li>
          </ul>
         </div>
          {/* <ul className='flex gap-12  '>
            {
              navbarItems?.map((item,index)=>(
                <li key ={index} className='text-black hover:text-[#c1001c] transition-colors duration-200 cursor-pointer' >
                {item.title} 
                </li>
              ))
            }
          </ul> */}

        </div>
      </div>
    </div>
  )
}

export default Header