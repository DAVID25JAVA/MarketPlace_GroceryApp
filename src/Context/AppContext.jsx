import { createContext } from "react";
import { allGroceryProduct } from "../assets/assets";
import { BuyProductByCategoris } from "../assets/assets";

export const contextData = createContext();

const AppContext = (props) => {
     
    const currency = '$';
    const value = {
        allGroceryProduct,
        currency,
        BuyProductByCategoris
    }
    
    return (
        <contextData.Provider value={value}>
            {props.children}
        </contextData.Provider>
    )
}

export default AppContext