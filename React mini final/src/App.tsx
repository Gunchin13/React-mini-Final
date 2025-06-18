import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./routes";
const router = createBrowserRouter(Route)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};
export default App;
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import routes from "./routes";
 
// function App() {
//   const router = createBrowserRouter(routes);

//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   );
// }

// export default App;

