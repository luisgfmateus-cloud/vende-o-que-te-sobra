# 🌱 Vende o Que Te Sobra

Marketplace comunitário para pequenos produtores e pessoas singulares venderem ou trocarem o que têm em excesso.

## 🎯 MVP Features

✅ **Autenticação** - Registro e login de usuários  
✅ **Listagem de Produtos** - Ver todos os produtos/trocas disponíveis  
✅ **Criar Produtos** - Publicar o que quer vender ou trocar  
✅ **Perfil do Produtor** - Ver informações e histórico  
✅ **Mensagens** - Chat entre interessados e produtores  
✅ **Avaliações** - Sistema de reviews (1-5 stars)  

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js
- **State**: Zustand

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 12+
- npm ou yarn

## 🚀 Quick Start

### 1. Clone e instale dependências

```bash
git clone https://github.com/luisgfmateus-cloud/vende-o-que-te-sobra.git
cd vende-o-que-te-sobra
npm install
```

### 2. Configure o banco de dados

```bash
cp .env.example .env
# Edite .env com suas credenciais PostgreSQL
# Gere um NEXTAUTH_SECRET: openssl rand -base64 32
```

### 3. Rode as migrations do Prisma

```bash
npx prisma db push
npx prisma generate
```

### 4. Inicie o servidor

```bash
npm run dev
```

Acesse em `http://localhost:3000`

## 📝 Licença

MIT