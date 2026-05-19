# 🎯 Projeto Individual — FalleN

Um projeto individual desenvolvido com o objetivo de apresentar a história de Gabriel "FalleN" Toledo, jogador da FURIA Esports, com quiz interativo, calculadora de K/D e curiosidades sobre um dos maiores nomes da história do Counter-Strike.

---

## 🎓 São Paulo Tech School

---

## 📌 Trello: [clique aqui](https://trello.com/b/3xaN0hEp/fallen-counter-strike-2)

---

## 📋 Sobre o Projeto

O **Projeto FalleN** é uma aplicação web fullstack que reúne informações, curiosidades e funcionalidades interativas sobre Gabriel "FalleN" Toledo. O usuário pode se cadastrar, fazer login, responder um quiz sobre a carreira do jogador e acompanhar seu desempenho em uma dashboard com KPIs e gráficos.

---

## 🚀 Funcionalidades

- 📖 **História** — Linha do tempo da carreira do FalleN
- 🏆 **Conquistas** — Principais títulos e times
- ❓ **Quiz** — 8 perguntas sobre o FalleN com salvamento de resultados no banco
- 📊 **Dashboard** — KPIs e gráficos com o desempenho do usuário no quiz
- 🔢 **Calculadora de K/D** — Calcula o Kill/Death ratio com mensagens do Professor
- 👤 **Cadastro e Login** — Autenticação de usuários com sessão

---

## 🛠️ Tecnologias Utilizadas

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express.js

**Banco de Dados**
- MySQL

**Bibliotecas**
- Chart.js — gráficos da dashboard
- dotenv — variáveis de ambiente
- mysql2 — conexão com o banco
- cors — permissões de requisição

---

## 📁 Estrutura do Projeto

```
Projeto-individual/
├── public/                  # Frontend
│   ├── assets/imgs/         # Imagens
│   ├── css/                 # Estilos
│   ├── js/                  # Scripts (sessao.js)
│   ├── index.html
│   ├── login.html
│   ├── cadastro.html
│   ├── quiz.html
│   ├── dashboard.html
│   ├── historia.html
│   ├── conquistas.html
│   └── calculadora.html
├── src/
│   ├── controllers/         # Lógica das rotas
│   ├── models/              # Queries do banco
│   ├── routes/              # Rotas da API
│   └── database/            # Configuração do MySQL
├── .env                     # Variáveis de produção
├── .env.dev                 # Variáveis de desenvolvimento
├── app.js                   # Servidor principal
└── package.json
```

---

## ⚙️ Como Instalar e Rodar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [MySQL](https://www.mysql.com/) instalado e rodando

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure o banco de dados**

Crie o banco e as tabelas rodando o script:
```
src/database/script-tabelas.sql
```

**4. Configure as variáveis de ambiente**

Edite o arquivo `.env.dev` com suas credenciais do MySQL:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_DATABASE=projetofallen
DB_PORT=3306
APP_PORT=3333
APP_HOST=localhost
AMBIENTE_PROCESSO=desenvolvimento
```

**5. Inicie o servidor**
```bash
npm start
```

**6. Acesse no navegador**
```
http://localhost:3333
```

---

## 🗄️ Banco de Dados

O projeto utiliza as seguintes tabelas:

| Tabela | Descrição |
|---|---|
| `usuarios` | Dados de cadastro dos usuários |
| `logins` | Registro de logins realizados |
| `times` | Times e vitórias do FalleN |
| `quiz_perguntas` | Perguntas do quiz |
| `quiz_tentativas` | Tentativas realizadas por usuário |
| `quiz_respostas` | Respostas individuais por tentativa |

---

## 👤 Autor

Desenvolvido por **[Guilherme Ferreira Moura]** — São Paulo Tech School
