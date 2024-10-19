import React, { useContext } from 'react';
import { contextData } from '../Context/AppContext';

function MyCart() {
  const { cart, removeFromCart, currency } = useContext(contextData);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="my-10 px-5">
      <h1 className="text-2xl font-bold mb-5">My Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-3">
              <div>
                <p className="font-medium">{item.name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-5">
                  {currency}
                  {item.price * item.quantity}
                </p>
                <button
                  className="text-red-600"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold mt-5">
            Total: {currency}
            {totalPrice}
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default MyCart;
