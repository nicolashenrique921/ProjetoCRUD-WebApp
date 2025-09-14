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
<img width="1911" height="991" alt="image" src="https://github.com/user-attachments/assets/0516e2d0-e5c6-4858-bcf0-1d2acaef24f4" />

Criar Item
<img width="1904" height="987" alt="image" src="https://github.com/user-attachments/assets/f36d3086-d158-4c56-a8ce-d6ece0cc16e5" />

Editar Item
<img width="361" height="158" alt="image" src="https://github.com/user-attachments/assets/40694de3-2d91-413b-9926-d42ab28edae8" />
<img width="740" height="353" alt="image" src="https://github.com/user-attachments/assets/eec647c8-9360-4463-a452-acba2987f064" />
<img width="1912" height="891" alt="image" src="https://github.com/user-attachments/assets/1a7d4ceb-113f-47e6-b874-07feb5bdf5f6" />

Notificações e Loader
<img width="1914" height="221" alt="image" src="https://github.com/user-attachments/assets/e978d78a-3a7a-4fbe-b23b-b7a6cae76a10" />
<img width="2" height="5" alt="image" src="https://github.com/user-attachments/assets/924dd0a5-3ff8-4587-bc25-64e4a11220dd" />

Mocki.Api
<img width="1904" height="994" alt="image" src="https://github.com/user-attachments/assets/a49a57ab-12e0-4f40-a6e8-db6ab2613c1a" />
<img width="1899" height="987" alt="image" src="https://github.com/user-attachments/assets/8fe0a140-e0b7-45f7-b36f-09869e051e73" />

Desenvolvido por Nicolas Henrique Oliveira
