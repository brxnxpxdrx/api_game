# 🧩 API de Usuários com Prisma + MongoDB + Express

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0CAADC?style=for-the-badge\&logo=prisma\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

## 💻 Sobre o Projeto

Essa é uma API de usuários construída com **Node.js, Express, Prisma e MongoDB**. Permite criar, listar, atualizar e deletar usuários com senha **hashada** utilizando bcrypt.

---

## 🛠 Funcionalidades

* **GET /usuarios** → Lista todos os usuários
* **POST /usuarios** → Cria um novo usuário (senha hashada)
* **PUT /usuarios/\:id** → Atualiza um usuário pelo ID
* **DELETE /usuarios/\:id** → Deleta um usuário pelo ID

---

## ⚡ Tecnologias

* Node.js ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
* Express ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
* Prisma ![Prisma](https://img.shields.io/badge/Prisma-0CAADC?style=for-the-badge\&logo=prisma\&logoColor=white)
* MongoDB ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
* JavaScript ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
* Bcrypt ![Bcrypt](https://img.shields.io/badge/Bcrypt-563D7C?style=for-the-badge\&logo=appveyor\&logoColor=white)

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o .env

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nomeDoBanco>?retryWrites=true&w=majority"
PORT=3000
```

> Substitua `<usuario>`, `<senha>`, `<cluster>` e `<nomeDoBanco>` pelas informações do seu MongoDB Atlas.

### 4. Gerar Prisma Client

```bash
npx prisma generate
```

### 5. Rodar o servidor

```bash
nodemon server.js
```

O servidor estará rodando em:
`http://localhost:3000`

---

## 📦 Estrutura do Projeto

```
api/
├─ prisma/
│  └─ schema.prisma
├─ server.js
├─ package.json
└─ .env
```

---

## 🔐 Segurança

* Senhas armazenadas **hashadas** com `bcrypt`
* Prisma Client configurado para MongoDB
* Rotas RESTful para gerenciamento de usuários

---

## 📝 Autor

**Bruno Pedro**
[LinkedIn](https://www.linkedin.com/in/bruno-s-60132b102/) | [GitHub](https://github.com/brxnxpxdrx)
