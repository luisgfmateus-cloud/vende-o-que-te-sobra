'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Home() {
  // Mock data - será substituído por dados reais do BD
  const featuredProducts = [
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
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">🌱 Bem-vindo ao Vende o Que Te Sobra</h2>
            <p className="text-xl mb-8">Conecte-se com produtores locais e troque ou venda o que tem em excesso</p>
            <div className="flex gap-4 justify-center">
              <Link href="/produtos" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Ver Produtos
              </Link>
              <Link href="/auth/register" className="btn-secondary bg-white bg-opacity-20 border-2 border-white hover:bg-opacity-30">
                Começar a Vender
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container py-16">
          <h3 className="text-3xl font-bold mb-8 text-center">✨ Produtos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-16">
          <div className="container">
            <h3 className="text-3xl font-bold mb-12 text-center">🎯 Como Funciona</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-5xl mb-4">📝</div>
                <h4 className="text-xl font-bold mb-2">Crie sua Conta</h4>
                <p className="text-gray-600">Registe-se em segundos e comece a vender ou trocar</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-5xl mb-4">📦</div>
                <h4 className="text-xl font-bold mb-2">Publique Produtos</h4>
                <p className="text-gray-600">Adicione fotos, descrição e preço do que quer vender/trocar</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-5xl mb-4">💬</div>
                <h4 className="text-xl font-bold mb-2">Comunique</h4>
                <p className="text-gray-600">Negocie diretamente com compradores ou trocadores</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
