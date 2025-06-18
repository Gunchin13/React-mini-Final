import Layout from "../Layout";
import Collection from "../pages/Collection";
import OurGalery from "../pages/home/OurGalery";
import Home from "../pages/home/pages/Home";
import Pages from "../pages/Pages";
import Restaurant from "../pages/Restaurant";
import Shop from "../pages/Shop";
import TourTasting from "../pages/TourTasting";


const Route =[
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "collecton",
                element: <Collection/>
            },
            {
                index: "shop",
                element: <Shop/>
            },
            {
                index: "ourwines",
                element: <OurGalery/>
            },
            {
                index: "tourtasting",
                element: <TourTasting/>
            },
            {
                index: "restaurant",
                element: <Restaurant/>
            },
            {
                index: "pages",
                element: <Pages/>
            },
        ],
    },
];

export default Route;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../pages/home/pages/Home';
// import Shop from '../pages/Shop';
// import Collection from '../pages/Collection';
// import Restaurant from '../pages/Restaurant';
// import OurWines from '../pages/OurWines';
// import TourTasting from '../pages/TourTasting';
// import Pages from '../pages/Pages';

// const routes = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><link href="/">Home</link></li>
//             <li><link href="/collection">Collection</link></li>
//             <li><link href="/shop">Shop</link></li>
//             <li><link href="/ourwines">OurWInes</link></li>
//             <li><link href="/tourtasting">TourTasting</link></li>
//             <li><link href="/restaurant">Restaurant</link></li>
//             <li><link href="/pages">Pages</link></li>
//           </ul>
//         </nav>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="/shop" element={<Shop/>} />
//         <Route path="/ourwines" element={<OurWines />} />
//         <Route path="/tourtasing" element={<TourTasting/>} />
//         <Route path="/restaurant" element={<Restaurant/>} />
//         <Route path="/pages" element={<Pages/>} />
       

//       </Routes>
//     </Router>
//   );
// };
// export default routes;
