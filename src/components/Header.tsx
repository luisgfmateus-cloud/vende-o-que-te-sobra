import React from 'react';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌱 Vende o Que Te Sobra</h1>
        <nav className="flex gap-4">
          <a href="/" className="hover:text-secondary transition">Início</a>
          <a href="/produtos" className="hover:text-secondary transition">Produtos</a>
          <a href="/auth/login" className="hover:text-secondary transition">Login</a>
        </nav>
      </div>
    </header>
  );
}
