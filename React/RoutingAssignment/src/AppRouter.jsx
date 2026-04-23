import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: "products/:category", element: <ProductsPage /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
