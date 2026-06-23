'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function ProdutosPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    // Mock data - será substituído por fetch real
    const mockProducts = [
      {
        id: '1',
        title: 'Morangos Frescos',
        description: 'Morangos orgânicos colhidos hoje pela manhã, super frescos!',
        category: 'Frutas',
        type: 'venda' as const,
        price: 5.99,
        location: 'Lisboa',
        seller: { name: 'João Silva', rating: 4.8 },
      },
      {
        id: '2',
        title: 'Alface Hidropônica',
        description: 'Alface verde hidropônica, sem pesticidas. Perfeita para saladas!',
        category: 'Vegetais',
        type: 'venda' as const,
        price: 2.50,
        location: 'Porto',
        seller: { name: 'Maria Santos', rating: 4.9 },
      },
      {
        id: '3',
        title: 'Troca de Livros',
        description: 'Tenho vários livros de ficção científica para trocar por mistério',
        category: 'Livros',
        type: 'troca' as const,
        location: 'Covilhã',
        seller: { name: 'Pedro Costa', rating: 4.5 },
      },
      {
        id: '4',
        title: 'Mel Artesanal',
        description: 'Mel 100% puro da minha produção. Encomendas para abraços!',
        category: 'Mel',
        type: 'venda' as const,
        price: 8.50,
        location: 'Évora',
        seller: { name: 'Carla Mendes', rating: 5.0 },
      },
      {
        id: '5',
        title: 'Bicicleta Montanha',
        description: 'Bicicleta em bom estado, pouco usada. Troco por patinete elétrico',
        category: 'Desporto',
        type: 'troca' as const,
        location: 'Braga',
        seller: { name: 'Nuno Oliveira', rating: 4.7 },
      },
      {
        id: '6',
        title: 'Tomates Maduros',
        description: 'Tomates de qualidade premium, direto da horta',
        category: 'Vegetais',
        type: 'venda' as const,
        price: 3.00,
        location: 'Setúbal',
        seller: { name: 'Rita Ferreira', rating: 4.9 },
      },
    ];
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const filteredProducts = filtro === 'todos' 
    ? products 
    : filtro === 'venda'
    ? products.filter(p => p.type === 'venda')
    : products.filter(p => p.type === 'troca');

  return (
    <>
      <Header />
      <main className="min-h-screen container py-12">
        <h2 className="text-4xl font-bold mb-8">🛍️ Todos os Produtos</h2>

        {/* Filters */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setFiltro('todos')}
            className={`px-4 py-2 rounded-lg transition ${
              filtro === 'todos'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Todos ({products.length})
          </button>
          <button
            onClick={() => setFiltro('venda')}
            className={`px-4 py-2 rounded-lg transition ${
              filtro === 'venda'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            💰 Venda ({products.filter(p => p.type === 'venda').length})
          </button>
          <button
            onClick={() => setFiltro('troca')}
            className={`px-4 py-2 rounded-lg transition ${
              filtro === 'troca'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            🔄 Troca ({products.filter(p => p.type === 'troca').length})
          </button>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Carregando produtos...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Nenhum produto encontrado</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
