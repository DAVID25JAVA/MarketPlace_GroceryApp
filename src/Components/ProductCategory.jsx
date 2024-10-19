import { useContext, useState, useEffect } from "react";
import { contextData } from "../Context/AppContext.jsx";

function ProductCategory() {
  const { allGroceryProduct } = useContext(contextData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
     
    if (selectedCategory === "All") {
      setFilteredProducts(allGroceryProduct);
    } else {
      const filtered = allGroceryProduct.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, allGroceryProduct]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);  
  };

  return (
    <div className="px-4 py-10">
      {/* Header Section */}
      <div className="flex justify-between mb-8 mt-10 mx-auto md:w-[90%]">
        <div>
          <p className="text-2xl font-medium">Explore by Categories</p>
        </div>
        <div className="sm:w-full">
          <select
            className="w-full sm:w-full md:w-auto flex gap-4 font-medium cursor-pointer mt-1 border px-3 py-2 sm:py-1 bg-purple-950 text-white mb-4 sm:mb-0"
            value={selectedCategory}  
            onChange={handleCategoryChange}  
          >
            <option value="All">Filter by categories</option>
            <option value="Vegetables" className="text-white">Vegetables</option>
            <option value="Fruits" className="text-white">Fruits</option>
            <option value="Coffee & Tea" className="text-white">Coffee & Tea</option>
          </select>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredProducts?.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 cursor-pointer shadow-sm overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            {/* Product Image */}
            <img
              className="w-full h-40 object-contain"
              src={item.image}
              alt={item.name}
            />

            {/* Product Details */}
            <div className="text-center">
              {/* Product Name */}
              <p className="text-lg font-medium text-gray-800 mb-2">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
