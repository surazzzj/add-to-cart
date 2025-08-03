import React from 'react'

const Cart = ({ cart, onRemove, onIncrease, onDecrease, onClear }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">🛒 Cart</h2>
          {cart.length > 0 && (
            <button
              onClick={onClear}
              className="text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-500">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onDecrease(item.id)}
                        className={`px-2 py-1 rounded ${
                          item.quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onIncrease(item.id)}
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="pt-4 mt-6 border-t">
          <h3 className="text-lg font-semibold mb-1">Total Items: {totalItems}</h3>
          <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  )
}

export default Cart
