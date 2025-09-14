# 📝 My CRUD App

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/) 
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue)](https://tailwindcss.com/) 
[![Vite](https://img.shields.io/badge/Vite-4.4.9-blue)](https://vitejs.dev/) 

Uma aplicação web CRUD construída com **React + TypeScript + TailwindCSS + Vite**, demonstrando habilidades em **frontend, backend (mock API) e integração de ferramentas**.

---

## 🔥 Funcionalidades

### CRUD completo
- **Create:** Formulário para adicionar novos itens (`name`, `description`).  
- **Read:** Lista de itens exibindo nome e descrição.  
- **Update:** Editar itens existentes.  
- **Delete:** Excluir itens com confirmação visual via notificação.

### Feedback ao usuário
- **Loader animado:** Exibe carregamento durante fetch ou envio de dados.  
- **Notificações:** Mensagens de sucesso ou erro ao criar, editar ou excluir itens.

### Navegação
- **React Router Dom** para transição entre páginas:
  - `/` → Lista de itens (Home)  
  - `/create` → Criar item  
  - `/edit/:id` → Editar item

### Layout e Responsividade
- Layout baseado em **TailwindCSS**:  
  - Grid responsivo (1 coluna mobile / 2 colunas desktop)  
  - Botões estilizados com cores e hover  
  - Layout centralizado com `max-w`  

### Código modular e organizado
- **Components**: Button, Loader, Notification  
- **Pages**: Home, CreateItem, EditItem  
- **API**: Axios configurado para comunicação com backend  
- **Types**: Tipagem para os itens (`Item.ts`)  

### Acessibilidade
- Formulários com **labels e placeholders** para melhor experiência e acessibilidade.  

---

## ⚡ Tecnologias Utilizadas
- React  
- TypeScript  
- Vite  
- TailwindCSS  
- Axios  
- React Router Dom  
- JSON Server (mock API)  
- PostCSS + Autoprefixer  

---

## 🚀 Como rodar o projeto

1. **Clonar repositório**  

``bash
git clone <link-do-repo>
cd my-crud-app
Instalar dependências

bash
Copiar código
npm install
Rodar mock API

bash
Copiar código
json-server --watch db.json --port 3000
Rodar frontend

bash
Copiar código
npm run dev
Acesse a aplicação: http://localhost:5173

💡 Melhorias futuras
Autenticação de usuário

Pesquisa e filtros avançados

Paginação de itens

Conexão com backend real (Node.js / Spring Boot / Firebase)

Testes unitários e de integração

🖼️ Imagens do projeto
Home Page

Criar Item

Editar Item

Notificações e Loader

Desenvolvido por Nicolas Henrique Oliveira
