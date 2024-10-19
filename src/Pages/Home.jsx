import BestSells from "../Components/BestSells"
import GroceryBanner from "../Components/GroceryBanner"
import GroceryCatories from "../Components/GroceryCatories"
import GroceryStore from "../Components/GroceryStore"
import HeaderFirst from "../Components/HeaderFirst"
import MainHeader from "../Components/MainHeader"
import ProductCategory from "../Components/ProductCategory"
import Footer from "./Footer"


 

function Home() {
  return (
    <div> 
          <HeaderFirst />
          <MainHeader />
          <ProductCategory/>
          <GroceryCatories/>
          <GroceryBanner/>
          <BestSells/>
          <GroceryStore/>
           
    </div>
  )
}

export default Home