import { ClassNames } from "@emotion/react";
import Navigation from "./customer/components/Navigation/Navigation";
// import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
// import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";

// import Product from "./customer/components/Product/Product";


function App() {
  return (
    <div className="">
      <Navigation/>
      <div>

      <Cart/>
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <HomePage /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
