import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vende o Que Te Sobra - Marketplace de Pequenos Produtores',
  description: 'Plataforma para vender ou trocar produtos entre pequenos produtores e pessoas singulares',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
