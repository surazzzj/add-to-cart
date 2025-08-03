import React from 'react'

const products = [
    { id: 1, name: "T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1685883785913-7783b947e450?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Shoes", price: 999, image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Watch", price: 1499, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" }
]

const ProductList = ({ onAddToCart }) => {
    return (
        <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">🛍️ Products</h2>
            <div className="grid gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                            <div>
                                <h3 className="text-lg font-bold">{product.name}</h3>
                                <p className="text-gray-500">₹{product.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => onAddToCart(product)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
