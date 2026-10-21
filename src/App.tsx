import { useMemo, useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'
import CheckoutModal from './components/CheckoutModal'
import { CATEGORIES, PRODUCTS } from './data/products'
import { useCart } from './context/CartContext'

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('Todos')
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const { closeCart } = useCart()

  const filtered = useMemo(() => PRODUCTS.filter((p) => {
    const byCategory = category === 'Todos' || p.category === category
    const byQuery = p.name.toLowerCase().includes(query.trim().toLowerCase())
    return byCategory && byQuery
  }), [query, category])

  const startCheckout = () => {
    closeCart()
    setCheckoutOpen(true)
  }

  return (
    <div className="app">
      <Header query={query} onQuery={setQuery} />
      <section className="hero">
        <h1>Bem-vindo à Loja Teste</h1>
        <p>Produtos de demonstração com preços em reais. Adicione ao carrinho e finalize uma compra simulada.</p>
      </section>
      <nav className="filters" aria-label="Filtrar por categoria">
        {CATEGORIES.map((c) => (
          <button key={c} className={c === category ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </nav>
      <main className="grid">
        {filtered.length === 0
          ? <p className="empty">Nenhum produto encontrado para essa busca.</p>
          : filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </main>
      <footer className="footer">Loja Teste — projeto de demonstração criado com o Muse. Sem vendas reais nesta versão.</footer>
      <CartDrawer onCheckout={startCheckout} />
      {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}
    </div>
  )
}
