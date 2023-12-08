import { ClassNames } from "@emotion/react";
import Navigation from "./customer/components/Navigation/Navigation";
// import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Product from "./customer/components/Product/Product";

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      <Product/>

      {/* <HomePage /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
