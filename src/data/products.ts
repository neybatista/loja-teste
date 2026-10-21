export interface Product {
  id: string
  name: string
  category: string
  price: number
  oldPrice?: number
  emoji: string
  gradient: string
  description: string
}

export const CATEGORIES = ['Todos', 'Eletrônicos', 'Casa', 'Moda', 'Esporte'] as const

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Fone de Ouvido Bluetooth', category: 'Eletrônicos', price: 199.9, oldPrice: 299.9, emoji: '🎧', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', description: 'Cancelamento de ruído, 30h de bateria e Bluetooth 5.3.' },
  { id: 'p2', name: 'Smartwatch Esportivo', category: 'Eletrônicos', price: 349.9, oldPrice: 449.9, emoji: '⌚', gradient: 'linear-gradient(135deg,#11998e,#38ef7d)', description: 'Monitor de batimentos, GPS e resistência à água.' },
  { id: 'p3', name: 'Luminária de Mesa LED', category: 'Casa', price: 89.9, emoji: '💡', gradient: 'linear-gradient(135deg,#f7971e,#ffd200)', description: 'Luz ajustável em 3 tons, ideal para leitura e trabalho.' },
  { id: 'p4', name: 'Jogo de Toalhas (4 peças)', category: 'Casa', price: 119.9, oldPrice: 159.9, emoji: '🛁', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', description: 'Algodão macio, alta absorção, banho e rosto.' },
  { id: 'p5', name: 'Camiseta Básica Premium', category: 'Moda', price: 59.9, emoji: '👕', gradient: 'linear-gradient(135deg,#fa709a,#fee140)', description: 'Malha premium, modelagem confortável, várias cores.' },
  { id: 'p6', name: 'Mochila Urbana', category: 'Moda', price: 179.9, oldPrice: 229.9, emoji: '🎒', gradient: 'linear-gradient(135deg,#a8edea,#fed6e3)', description: 'Compartimento para notebook 15", material impermeável.' },
  { id: 'p7', name: 'Tênis de Corrida', category: 'Esporte', price: 299.9, oldPrice: 399.9, emoji: '👟', gradient: 'linear-gradient(135deg,#ff9966,#ff5e62)', description: 'Amortecimento responsivo, leve e respirável.' },
  { id: 'p8', name: 'Garrafa Térmica 750ml', category: 'Esporte', price: 69.9, emoji: '🍶', gradient: 'linear-gradient(135deg,#36d1dc,#5b86e5)', description: 'Mantém gelado por 24h ou quente por 12h, aço inox.' },
]

export const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
