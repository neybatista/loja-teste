import { useCart } from '../context/CartContext'

interface Props {
  query: string
  onQuery: (value: string) => void
}

export default function Header({ query, onQuery }: Props) {
  const { count, openCart } = useCart()
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">🛍️ Loja <span>Teste</span></div>
        <input
          className="search"
          type="search"
          placeholder="Buscar produtos..."
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          aria-label="Buscar produtos"
        />
        <button className="cart-button" onClick={openCart} aria-label="Abrir carrinho">
          🛒 Carrinho
          {count > 0 && <span className="cart-badge">{count}</span>}
        </button>
      </div>
    </header>
  )
}
