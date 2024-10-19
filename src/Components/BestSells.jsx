import React, { useContext, useState, useEffect } from 'react';
import { contextData } from '../Context/AppContext';
import { IoCartOutline } from 'react-icons/io5';

function BestSells() {
  const { BuyProductByCategoris, currency } = useContext(contextData);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (selectedCategory === 'All') {
      const filtered = BuyProductByCategoris.filter(item => item._id < 6);
      setFilteredProducts(filtered);
    } else if (selectedCategory === 'Popular') {
      const filtered = BuyProductByCategoris.filter(item => item.bestSells);
      setFilteredProducts(filtered);
    } else if (selectedCategory === 'New') {
      const filtered = BuyProductByCategoris.filter(item => item.upcomming);
      setFilteredProducts(filtered);
    } else {
      const filtered = BuyProductByCategoris.filter(
        item => item.type === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [BuyProductByCategoris, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="my-5 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <div className="flex justify-between text-2xl sm:text-3xl font-medium">
        <p>Daily Best Sells</p>
        <div className="flex gap-3 sm:gap-5 text-lg font-medium">
          <p
            onClick={() => handleCategoryChange('All')}
            className={`cursor-pointer ${
              selectedCategory === 'All' ? 'text-purple-600' : ''
            }`}
          >
            Features
          </p>
          <p
            onClick={() => handleCategoryChange('Popular')}
            className={`cursor-pointer ${
              selectedCategory === 'Popular' ? 'text-purple-600' : ''
            }`}
          >
            Popular
          </p>
          <p
            onClick={() => handleCategoryChange('New')}
            className={`cursor-pointer ${
              selectedCategory === 'New' ? 'text-purple-600' : ''
            }`}
          >
            New
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 w-full max-w-full">
        {filteredProducts?.map((item, index) => (
          <div
            key={index}
            className="border flex flex-col pb-5 cursor-pointer text-center text-xs hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="w-full h-40 object-contain"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col px-2 items-start">
              <p className="font-medium text-gray-400">{item.type}</p>
              <p className="font-medium pt-1 text-sm sm:text-base pb-2">
                {item.name} {item.quantity}
              </p>
            </div>
            <div className="flex justify-between px-2 text-sm sm:text-base">
              <p className="font-medium">
                <span>{currency}</span>
                {item.price}
              </p>
            </div>
            <hr />
            <div className="flex justify-center mt-2">
              <button className="border text-white flex items-center gap-1 px-5 sm:px-10 text-[13px] sm:text-[15px] py-2 sm:py-3 bg-purple-600">
                <IoCartOutline />
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSells;
