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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="my-5">
      <div className="flex justify-between text-3xl font-medium">
        <p>Featured Products</p>
        <div className="flex gap-5 text-lg font-medium">
          <p
            onClick={() => handleCategoryChange('All')}
            className={`cursor-pointer ${
              selectedCategory === 'All' ? 'text-purple-600' : ''
            }`}
          >
            All
          </p>
          <p
            onClick={() => handleCategoryChange('Vegetable')}
            className={`cursor-pointer ${
              selectedCategory === 'Vegetable' ? 'text-purple-600' : ''
            }`}
          >
            Vegetables
          </p>
          <p
            onClick={() => handleCategoryChange('Fruits')}
            className={`cursor-pointer ${
              selectedCategory === 'Fruits' ? 'text-purple-600' : ''
            }`}
          >
            Fruits
          </p>
          <p
            onClick={() => handleCategoryChange('Nonveg')}
            className={`cursor-pointer ${
              selectedCategory === 'Nonveg' ? 'text-purple-600' : ''
            }`}
          >
            Meat
          </p>
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
