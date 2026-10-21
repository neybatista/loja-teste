import { useState } from 'react'
import { formatBRL } from '../data/products'
import { useCart } from '../context/CartContext'

interface Props {
  onClose: () => void
}

export default function CheckoutModal({ onClose }: Props) {
  const { total, count, clear } = useCart()
  const [done, setDone] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', address: '', payment: 'Pix' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const order = 'LT-' + Math.floor(100000 + Math.random() * 900000).toString()
    setDone(order)
    clear()
  }

  return (
    <div className="overlay center" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Finalizar compra">
        {done ? (
          <div className="success">
            <div className="success-icon">✅</div>
            <h2>Pedido confirmado!</h2>
            <p>Pedido <strong>{done}</strong> recebido (simulação — nenhum pagamento real foi feito).</p>
            <p>Obrigado pela compra, {form.name.split(' ')[0] || 'cliente'}!</p>
            <button className="checkout-button" onClick={onClose}>Voltar à loja</button>
          </div>
        ) : (
          <>
            <div className="drawer-head">
              <h2>Finalizar compra</h2>
              <button className="icon-button" onClick={onClose} aria-label="Fechar">✕</button>
            </div>
            <p className="modal-total">{count} item(ns) — Total: <strong>{formatBRL(total)}</strong></p>
            <form onSubmit={submit} className="form">
              <label>Nome completo
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" />
              </label>
              <label>E-mail
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="voce@email.com" />
              </label>
              <label>Endereço de entrega
                <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Rua, número, cidade — UF" />
              </label>
              <label>Forma de pagamento
                <select value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value })}>
                  <option>Pix</option>
                  <option>Cartão de crédito</option>
                  <option>Boleto</option>
                </select>
              </label>
              <button className="checkout-button" type="submit">Confirmar pedido</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
