import React, { useContext, useEffect, useState } from 'react';
import { contextData } from '../Context/AppContext';
import { IoCartOutline } from 'react-icons/io5';

function GroceryCategories() {
  const { BuyProductByCategoris, currency } = useContext(contextData);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(BuyProductByCategoris);
    } else {
      const filtered = BuyProductByCategoris.filter(
        (item) => item.type === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [BuyProductByCategoris, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); 
  };

  return (
    <div className="my-5">
      <div className="flex justify-between ">
        <p className='font-medium text-3xl'>Featured Products</p>
        <div className="flex gap-5">
          
          <select
            className="w-full sm:w-full md:w-auto flex gap-4  cursor-pointer mt-1 border px-3 py-2 sm:py bg-purple-950 text-white mb-4 sm:mb-0"
            onChange={handleCategoryChange}  
            value={selectedCategory} 
          >
            <option value="All">All</option>
            <option value="Vegetable">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Meat">Meat</option>
          </select>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col items-center gap-4 text-gray-800">
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
          {filteredProducts?.map((item, index) => (
            <div
              key={index}
              className="flex border flex-col pb-5 cursor-pointer text-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="w-40" src={item.image} alt={item.name} />
              <div className="flex flex-col px-2 items-start">
                <p className="font-medium text-gray-400">{item.type}</p>
                <p className="font-medium pt-1 text-base pb-2">
                  {item.name} {item.quantity}
                </p>
              </div>
              <div className="flex justify-between px-2 text-base">
                <p className="font-medium">
                  <span>{currency}</span>
                  {item.price}
                </p>
                <button className="border text-white flex items-center gap-1 px-3 py-1 bg-purple-600">
                  <span>
                    <IoCartOutline />
                  </span>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroceryCategories;
