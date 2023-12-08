import { ClassNames } from "@emotion/react";
import Navigation from "./customer/components/Navigation/Navigation";
// import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import ProductReviewCard from "./customer/components/ProductDetails/ProductReviewCard";
// import Product from "./customer/components/Product/Product";

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      {/* <Product/> */}
      <ProductDetails/>
      {/* <ProductReviewCard></ProductReviewCard> */}
      {/* <HomePage /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
