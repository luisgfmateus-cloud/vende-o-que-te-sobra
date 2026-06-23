'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DashboardPage() {
  // TODO: Implementar lógica de usuário logado
  return (
    <>
      <Header />
      <main className="min-h-screen container py-12">
        <h2 className="text-4xl font-bold mb-8">Meu Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">📦 Meus Produtos</h3>
            <p className="text-3xl font-bold text-primary">0</p>
            <Link href="/dashboard/produtos" className="text-primary hover:underline text-sm mt-2 inline-block">
              Ver todos →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">💬 Mensagens</h3>
            <p className="text-3xl font-bold text-secondary">0</p>
            <Link href="/dashboard/mensagens" className="text-secondary hover:underline text-sm mt-2 inline-block">
              Ver mensagens →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">⭐ Avaliação</h3>
            <p className="text-3xl font-bold text-yellow-500">4.5★</p>
            <p className="text-sm text-gray-600 mt-2">(0 reviews)</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4">Ações Rápidas</h3>
          <div className="flex gap-4">
            <Link href="/dashboard/novo-produto" className="btn-primary bg-primary text-white">
              ➕ Novo Produto
            </Link>
            <Link href="/perfil" className="btn-secondary bg-secondary text-white">
              👤 Editar Perfil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
