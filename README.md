# 🌱 Vende o Que Te Sobra

Marketplace comunitário para pequenos produtores e pessoas singulares venderem ou trocarem o que têm em excesso.

![Status](https://img.shields.io/badge/status-MVP%20em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-18%2B-brightgreen)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12%2B-blue)

## 🎯 Sobre o Projeto

**Vende o Que Te Sobra** é uma plataforma que conecta:
- 👨‍🌾 Pequenos produtores rurais
- 🏡 Pessoas com hobbies (artesanato, jardinagem, etc)
- 🍎 Qualquer um com produtos/itens em excesso

Para **vender ou trocar** com a comunidade local, sem intermediários e com **pagamento 100% presencial**.

---

## ✨ Features do MVP

### 🔐 Autenticação
- ✅ Registro de usuários
- ✅ Login com email/senha
- ✅ Perfil de produtor

### 📦 Produtos
- ✅ Listar produtos/trocas
- ✅ Criar novo produto
- ✅ Editar produto
- ✅ Ver detalhes do produto
- ✅ Filtrar por tipo (venda/troca)

### 💬 Comunicação
- ✅ Sistema de mensagens entre usuários
- ✅ Chat com vendedor/trocador

### ⭐ Avaliações
- ✅ Deixar review (1-5 stars)
- ✅ Ver histórico de avaliações
- ✅ Rating do produtor

### 🏠 Dashboard
- ✅ Visualizar meus produtos
- ✅ Minhas mensagens
- ✅ Minha avaliação

---

## 🛠️ Tech Stack

```
Frontend:
├── Next.js 14 (App Router)
├── React 18
├── TypeScript
├── Tailwind CSS
└── Zustand (State Management)

Backend:
├── Next.js API Routes
├── Node.js
├── Prisma ORM
└── NextAuth.js (Auth)

Database:
└── PostgreSQL 12+

Validation:
├── Zod
└── React Hook Form
```

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- PostgreSQL 12+
- npm/yarn

### Instalação

```bash
# 1. Clone
git clone https://github.com/luisgfmateus-cloud/vende-o-que-te-sobra.git
cd vende-o-que-te-sobra

# 2. Instale dependências
npm install

# 3. Configure o banco
cp .env.example .env
# Edite .env com suas credenciais PostgreSQL

# 4. Setup do banco
npx prisma db push

# 5. Inicie
npm run dev
```

**Acesse:** http://localhost:3000

📖 **Guia detalhado:** Veja [SETUP.md](./SETUP.md)

---

## 📂 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── auth/              # Auth (login/register)
│   ├── produtos/          # Produtos
│   ├── dashboard/         # Dashboard
│   └── page.tsx           # Home
├── components/             # React Components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                    # Utilitários
│   ├── prisma.ts
│   ├── auth.ts
│   ├── store.ts
│   └── validators.ts
└── styles/                 # CSS Global

prisma/
├── schema.prisma          # Database Schema
└── migrations/            # Migrations
```

---

## 🔌 API Endpoints

### Autenticação
- `POST /api/auth/register` - Criar conta
- `POST /api/auth/login` - Fazer login

### Produtos
- `GET /api/produtos` - Listar todos
- `POST /api/produtos` - Criar produto
- `GET /api/produtos/[id]` - Ver detalhe
- `PUT /api/produtos/[id]` - Editar

### Mensagens
- `GET /api/mensagens?userId=X` - Minhas mensagens
- `POST /api/mensagens` - Enviar mensagem

### Avaliações
- `GET /api/avaliacoes?userId=X` - Reviews recebidos
- `POST /api/avaliacoes` - Deixar review

### Usuários
- `GET /api/usuarios/[id]` - Ver perfil

---

## 🎨 Como Funciona

### Fluxo de Venda
```
Vendedor cria produto → Comprador vê em destaque 
→ Comprador envia mensagem → Negociam presencialmente 
→ Comprador deixa review
```

### Fluxo de Troca
```
Vendedor publica troca (sem preço) → Interessado contacta 
→ Negoção de troca presencial → Reviews mútuos
```

---

## 🚧 Funcionalidades Futuras (Fase 2+)

- 📸 Upload de múltiplas imagens
- 🗺️ Mapa interativo com geolocalização
- 🔔 Notificações em tempo real (Socket.io)
- 💳 Pagamento integrado (Stripe/PayPal) - opcional
- 🔍 Busca avançada com filtros
- 📊 Dashboard analytics do vendedor
- ⭐ Sistema de reputação melhorado
- 🌙 Dark mode
- 📱 App mobile (React Native)

---

## 🐛 Issues

Encontre um bug? Reporte em:
https://github.com/luisgfmateus-cloud/vende-o-que-te-sobra/issues

---

## 📝 Licença

MIT - veja [LICENSE](./LICENSE)

---

## 👨‍💻 Desenvolvido por

[luisgfmateus-cloud](https://github.com/luisgfmateus-cloud)

---

## 💚 Contribuições

Contribuições são bem-vindas! Faça um fork e envie um Pull Request.

---

**Desenvolvido com ❤️ para conectar produtores locais** 🌱
