import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./routes";

const router = createBrowserRouter(Route)
function App() {
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;


 
