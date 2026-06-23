'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const MapComponent = dynamic(() => import('./MapComponent'), {
  loading: () => <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Carregando mapa...</div>,
  ssr: false,
});

interface LocationPickerProps {
  onLocationChange: (lat: number, lng: number, location: string) => void;
  initialLocation?: string;
  initialLat?: number;
  initialLng?: number;
}

export default function LocationPicker({
  onLocationChange,
  initialLocation,
  initialLat,
  initialLng,
}: LocationPickerProps) {
  const [location, setLocation] = useState(initialLocation || '');
  const [lat, setLat] = useState(initialLat || 38.7223); // Lisboa
  const [lng, setLng] = useState(initialLng || -9.1393);
  const [geoEnabled, setGeoEnabled] = useState(false);

  const handleGetCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLng(longitude);
          onLocationChange(latitude, longitude, location);
          setGeoEnabled(true);
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
          alert('Não foi possível obter sua localização');
        }
      );
    } else {
      alert('Geolocalização não suportada no seu navegador');
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    onLocationChange(lat, lng, newLocation);
  };

  const handleMapClick = (latitude: number, longitude: number) => {
    setLat(latitude);
    setLng(longitude);
    onLocationChange(latitude, longitude, location);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          📍 Localização
        </label>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="ex: Lisboa, Rua Principal 123"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="button"
        onClick={handleGetCurrentLocation}
        className="w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
      >
        📍 Usar Minha Localização Atual
      </button>

      {/* Mapa */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Coordenadas: {lat.toFixed(4)}, {lng.toFixed(4)}
        </p>
        <MapComponent
          latitude={lat}
          longitude={lng}
          onMapClick={handleMapClick}
        />
      </div>
    </div>
  );
}
