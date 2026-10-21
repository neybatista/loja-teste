import { formatBRL, type Product } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  return (
    <article className="card">
      <div className="card-thumb" style={{ background: product.gradient }} aria-hidden>
        <span>{product.emoji}</span>
      </div>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="card-prices">
          {product.oldPrice && <span className="old">{formatBRL(product.oldPrice)}</span>}
          <span className="price">{formatBRL(product.price)}</span>
        </div>
        <button className="add-button" onClick={() => add(product)}>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  )
}
