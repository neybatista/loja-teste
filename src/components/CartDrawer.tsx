import { formatBRL } from '../data/products'
import { useCart } from '../context/CartContext'

interface Props {
  onCheckout: () => void
}

export default function CartDrawer({ onCheckout }: Props) {
  const { items, isOpen, closeCart, setQty, remove, total } = useCart()
  if (!isOpen) return null
  return (
    <div className="overlay" onClick={closeCart}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()} aria-label="Carrinho de compras">
        <div className="drawer-head">
          <h2>Seu carrinho</h2>
          <button className="icon-button" onClick={closeCart} aria-label="Fechar carrinho">✕</button>
        </div>
        {items.length === 0 ? (
          <p className="empty">Seu carrinho está vazio. Adicione um produto da vitrine 🙂</p>
        ) : (
          <>
            <ul className="drawer-list">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="drawer-item">
                  <div className="drawer-thumb" style={{ background: product.gradient }}>{product.emoji}</div>
                  <div className="drawer-info">
                    <strong>{product.name}</strong>
                    <span>{formatBRL(product.price)}</span>
                    <div className="qty">
                      <button onClick={() => setQty(product.id, qty - 1)} aria-label="Diminuir">−</button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(product.id, qty + 1)} aria-label="Aumentar">+</button>
                      <button className="remove" onClick={() => remove(product.id)}>remover</button>
                    </div>
                  </div>
                  <span className="drawer-subtotal">{formatBRL(product.price * qty)}</span>
                </li>
              ))}
            </ul>
            <div className="drawer-foot">
              <div className="total-row"><span>Total</span><strong>{formatBRL(total)}</strong></div>
              <button className="checkout-button" onClick={onCheckout}>Finalizar compra</button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
