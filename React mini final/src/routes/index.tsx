import Layout from "../Layout";
import Collection from "../pages/Collection";
import OurGalery from "../pages/home/OurGalery";
import Home from "../pages/home/pages/Home";
 import Restaurant from "../pages/Restaurant";
import Shop from "../pages/Shop";
 import TourTasting from "../pages/TourTasting";

const Route = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "collection", 
                element: <Collection />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "ourwines",
                element: <OurGalery />
            },
            {
                path: "tourtasting",
                element: <TourTasting />
            },
            {
                path: "restaurant",
                element: <Restaurant />
            },
        ],
    },
];

export default Route;

 