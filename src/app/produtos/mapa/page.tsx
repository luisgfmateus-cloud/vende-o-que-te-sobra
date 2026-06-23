'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), {
  ssr: false,
});

export default function ProdutosMapaPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - será substituído por fetch real
    const mockProducts = [
      {
        id: '1',
        title: 'Morangos Frescos',
        location: 'Lisboa',
        latitude: 38.7223,
        longitude: -9.1393,
        price: 5.99,
        type: 'venda',
      },
      {
        id: '2',
        title: 'Alface Hidropônica',
        location: 'Porto',
        latitude: 41.1579,
        longitude: -8.6291,
        price: 2.50,
        type: 'venda',
      },
      {
        id: '3',
        title: 'Mel Artesanal',
        location: 'Évora',
        latitude: 38.2674,
        longitude: -7.9015,
        price: 8.50,
        type: 'venda',
      },
    ];
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen container py-12">
        <h2 className="text-4xl font-bold mb-8">🗺️ Produtos no Mapa</h2>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Carregando mapa...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            <MapContainer
              center={[39.3999, -8.2245]} // Centro de Portugal
              zoom={7}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {products.map((product) => (
                <Marker key={product.id} position={[product.latitude, product.longitude]}>
                  <Popup>
                    <div className="text-sm">
                      <h3 className="font-bold">{product.title}</h3>
                      <p className="text-gray-600">{product.location}</p>
                      <p className="text-primary font-bold">{product.price}€</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
