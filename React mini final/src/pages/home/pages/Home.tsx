import ProductList from "../../../companents/ProductList"
import FeaturedProduct from "../FeaturedProduct"
import NewBrand from "../NewBrand"
import NumberDisplaySection from "../NumberDisplaySection"
import OurGalery from "../OurGalery"
import WelcomeWine from "../WelcomeWIne"
import WineCard from "../WineCard"
import WineDetails from "../WineDetails"


const Home = () => {
  return (
    <div>
      <WelcomeWine/>
      <WineCard/>
      <WineDetails/>
      <NewBrand/>
      <ProductList/>
      <OurGalery/>
      <FeaturedProduct/>
      <NumberDisplaySection/>
      
        
       
    </div>
  )
}

export default Home