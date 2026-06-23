# 🌱 Vende o Que Te Sobra - Guia de Instalação

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18+ ([Baixar aqui](https://nodejs.org/))
- **npm** ou **yarn** (vem com Node.js)
- **PostgreSQL** 12+ ([Baixar aqui](https://www.postgresql.org/download/))
- **Git** ([Baixar aqui](https://git-scm.com/))

### Verificar instalações

```bash
node --version
npm --version
psql --version
git --version
```

---

## 🚀 Setup Passo a Passo

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/luisgfmateus-cloud/vende-o-que-te-sobra.git
cd vende-o-que-te-sobra
```

### 2️⃣ Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3️⃣ Configure o Banco de Dados

**A. Crie um banco de dados PostgreSQL:**

```bash
# Via terminal (no Windows, use pgAdmin ou outro gerenciador)
psql -U postgres
```

No prompt do PostgreSQL:

```sql
CREATE DATABASE vende_o_que_te_sobra;
```

**B. Crie o arquivo `.env` na raiz do projeto:**

```bash
cp .env.example .env
```

**C. Edite o `.env` com suas credenciais:**

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vende_o_que_te_sobra"

# NextAuth (gere com: openssl rand -base64 32)
NEXTAUTH_SECRET="seu-secret-aleatorio-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

**Exemplo de DATABASE_URL:**

```
# Padrão: postgresql://username:password@host:port/database
postgresql://postgres:senha123@localhost:5432/vende_o_que_te_sobra
```

### 4️⃣ Rode as Migrations do Prisma

```bash
# Push schema para o banco
npx prisma db push

# Gerar cliente Prisma
npx prisma generate

# (Opcional) Abrir Prisma Studio para gerenciar dados
npx prisma studio
```

### 5️⃣ Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em: **http://localhost:3000**

---

## 🌐 Primeiras Páginas para Testar

- **Home**: http://localhost:3000
- **Produtos**: http://localhost:3000/produtos
- **Registro**: http://localhost:3000/auth/register
- **Login**: http://localhost:3000/auth/login
- **Dashboard**: http://localhost:3000/dashboard

---

## 🧪 Dados de Teste

Você pode criar um usuário de teste durante o setup:

1. Acesse http://localhost:3000/auth/register
2. Preencha o formulário com:
   - **Nome**: João Silva
   - **Email**: joao@example.com
   - **Localização**: Lisboa
   - **Senha**: senha123

---

## 📊 Gerenciar o Banco com Prisma Studio

Para visualizar e editar dados no banco:

```bash
npx prisma studio
```

Isso abre uma interface web em **http://localhost:5555**

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build & Produção
npm run build        # Build para produção
npm start            # Inicia o servidor de produção

# Linting
npm run lint         # Verifica código

# Banco de Dados
npm run db:push      # Push schema para banco
npm run db:studio    # Abre Prisma Studio
```

---

## ⚠️ Troubleshooting

### "Erro: database connection failed"

- Verifique se o PostgreSQL está rodando
- Confirme a DATABASE_URL está correta
- Teste a conexão: `psql -U postgres -d vende_o_que_te_sobra`

### "Erro: Cannot find module"

```bash
rm -rf node_modules
npm install
```

### "Porta 3000 já está em uso"

```bash
# Linux/Mac
lsof -i :3000
# Windows
netstat -ano | findstr :3000

# Matar processo
kill -9 <PID>  # Linux/Mac
# ou use outra porta
PORT=3001 npm run dev
```

### "NEXTAUTH_SECRET não definido"

Gere um novo secret:

```bash
openssl rand -base64 32
```

Copie o resultado e adicione ao `.env` como `NEXTAUTH_SECRET`

---

## 📁 Estrutura do Projeto

```
vende-o-que-te-sobra/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── api/            # API routes
│   │   ├── auth/           # Auth pages
│   │   ├── produtos/       # Produtos page
│   │   ├── dashboard/      # Dashboard
│   │   ├── layout.tsx      # Layout global
│   │   └── page.tsx        # Home
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── lib/                 # Utilidades
│   │   ├── prisma.ts       # Prisma client
│   │   ├── auth.ts         # NextAuth config
│   │   ├── store.ts        # Zustand store
│   │   └── validators.ts   # Zod validators
│   └── styles/
│       └── globals.css
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── .env.example            # Template env
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

---

## 🎨 Tecnologias Usadas

| Stack | Tecnologia |
|-------|------------|
| **Frontend** | Next.js 14, React 18, TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | PostgreSQL, Prisma ORM |
| **Auth** | NextAuth.js |
| **State** | Zustand |
| **Validation** | Zod |
| **Forms** | React Hook Form |

---

## 📚 Próximos Passos

1. ✅ Setup local (você está aqui)
2. 🔒 Implementar autenticação completa com NextAuth
3. 📸 Upload de imagens para produtos
4. 💬 Chat em tempo real com Socket.io
5. 🔔 Notificações
6. 📊 Dashboard do vendedor
7. 🌍 Deploy (Vercel, Railway, etc)

---

## 🤝 Suporte

Se tiver dúvidas:

1. Verifique a [documentação de Next.js](https://nextjs.org/docs)
2. Consulte a [documentação de Prisma](https://www.prisma.io/docs/)
3. Abra uma issue no [GitHub](https://github.com/luisgfmateus-cloud/vende-o-que-te-sobra/issues)

---

**Happy coding! 🚀**
