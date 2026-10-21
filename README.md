# Loja Teste

Loja online de demonstração criada com o Muse como agente de programação.

## O que já funciona (v1)
- Vitrine com catálogo de produtos (dados de exemplo em `src/data/products.ts`)
- Busca por nome e filtro por categoria
- Carrinho lateral: adicionar, remover, alterar quantidade e total
- Checkout simulado com formulário e confirmação de pedido (sem pagamento real)

## Stack
- React + TypeScript + Vite (mesma base dos projetos Lovable)
- Estado do carrinho com Context API (`src/context/CartContext.tsx`)
- Sem backend nesta versão — produtos e pedidos são locais/mock

## Como rodar
```bash
npm install
npm run dev
```

## Próximos passos sugeridos
- Trocar os produtos de exemplo por um banco de dados (Supabase)
- Pagamento real (Stripe / Mercado Pago)
- Área do cliente e acompanhamento de pedidos
