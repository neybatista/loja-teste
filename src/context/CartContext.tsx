import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export interface CartItem {
  product: Product
  qty: number
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  add: (product: Product) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
  count: number
  total: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const add = (product: Product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === product.id)
      if (found) return prev.map((i) => (i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { product, qty: 1 }]
    })
    setIsOpen(true)
  }

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.product.id !== id))

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) return remove(id)
    setItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, qty } : i)))
  }

  const clear = () => setItems([])

  const { count, total } = useMemo(() => ({
    count: items.reduce((acc, i) => acc + i.qty, 0),
    total: items.reduce((acc, i) => acc + i.qty * i.product.price, 0),
  }), [items])

  const value: CartContextValue = {
    items, isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    add, remove, setQty, clear, count, total,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart precisa estar dentro de CartProvider')
  return ctx
}
