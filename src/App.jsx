import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleAddToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const handleIncreaseQty = (productId) => {
    setCart(prev =>
      prev.map(p =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    )
  }

  const handleDecreaseQty = (productId) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter(p => p.quantity > 0)
    )
  }

  const handleClearCart = () => {
    setCart([]) // removes everything
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8 flex flex-col md:flex-row gap-10">
      <ProductList onAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        onRemove={handleRemoveFromCart}
        onIncrease={handleIncreaseQty}
        onDecrease={handleDecreaseQty}
        onClear={handleClearCart}
      />
    </div>
  )
}

export default App
