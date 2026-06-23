'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import LocationPicker from '@/components/LocationPicker';

export default function NovoprodutoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: 'venda' as const,
    price: '',
    location: '',
    latitude: 0,
    longitude: 0,
  });

  const categories = [
    'Frutas',
    'Vegetais',
    'Mel & Geleia',
    'Artesanato',
    'Livros',
    'Desporto',
    'Eletrônicos',
    'Roupa',
    'Outro',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImagesChange = (urls: string[]) => {
    setImages(urls);
  };

  const handleLocationChange = (lat: number, lng: number, location: string) => {
    setFormData({
      ...formData,
      latitude: lat,
      longitude: lng,
      location,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Implementar com userId real
      const userId = 'temp-user-id';

      const res = await fetch('/api/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: formData.type === 'venda' ? parseFloat(formData.price) : null,
          userId,
          images,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Erro ao criar produto');
        return;
      }

      router.push('/produtos');
    } catch (err) {
      setError('Erro na conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen container py-12">
        <h2 className="text-4xl font-bold mb-8">➕ Criar Novo Produto</h2>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tipo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Anúncio
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="venda"
                    checked={formData.type === 'venda'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  💰 Venda
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="troca"
                    checked={formData.type === 'troca'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  🔄 Troca
                </label>
              </div>
            </div>

            {/* Título */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título do Produto
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="ex: Morangos Frescos"
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição Detalhada
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Descreva seu produto em detalhes..."
              />
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Preço (apenas para venda) */}
            {formData.type === 'venda' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço (€)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="0.00"
                />
              </div>
            )}

            {/* Upload de Imagens */}
            <ImageUploader onImagesChange={handleImagesChange} maxImages={5} />

            {/* Localização */}
            <LocationPicker onLocationChange={handleLocationChange} />

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 disabled:opacity-50"
            >
              {loading ? 'Criando...' : '✓ Criar Produto'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
