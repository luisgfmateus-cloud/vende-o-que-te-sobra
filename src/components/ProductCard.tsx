import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'venda' | 'troca';
  price?: number;
  location: string;
  image?: string;
  seller: {
    name: string;
    rating?: number;
  };
}

export default function ProductCard({
  id,
  title,
  description,
  category,
  type,
  price,
  location,
  image,
  seller,
}: ProductCardProps) {
  return (
    <div className="card hover:shadow-lg transition cursor-pointer">
      <div className="mb-3 bg-gray-200 h-48 rounded-lg flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        ) : (
          <span className="text-4xl">📦</span>
        )}
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${
          type === 'venda' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {type === 'venda' ? '💰 Venda' : '🔄 Troca'}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-2">{description.substring(0, 80)}...</p>
      
      <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
        <span>📍 {location}</span>
        <span>🏷️ {category}</span>
      </div>
      
      {price && (
        <div className="text-lg font-bold text-primary mb-3">
          {price.toFixed(2)}€
        </div>
      )}
      
      <div className="flex justify-between items-center pt-3 border-t">
        <span className="text-xs text-gray-600">👤 {seller.name}</span>
        {seller.rating && (
          <span className="text-yellow-500">⭐ {seller.rating}</span>
        )}
      </div>
      
      <button className="btn-primary w-full mt-3">
        Ver Detalhes
      </button>
    </div>
  );
}
