Aplicação web construída com React + TypeScript + TailwindCSS + Vite, demonstrando habilidades em frontend, backend (mock API) e integração de ferramentas.
Permite criar, visualizar, editar e excluir itens de forma simples, responsiva e com feedback visual ao usuário.

🛠 Tecnologias utilizadas

React – biblioteca para construção de interfaces

TypeScript – tipagem estática para maior segurança no código

Vite – bundler moderno, rápido e eficiente

TailwindCSS – framework CSS utilitário para layout responsivo

Axios – para comunicação com a API

React Router Dom – navegação entre páginas

JSON Server – mock API para backend simulado

PostCSS + Autoprefixer – para compatibilidade CSS

🚀 Funcionalidades
CRUD completo

Create: Formulário para adicionar novos itens (name, description).

Read: Lista de itens com layout responsivo, exibindo nome e descrição.

Update: Editar informações de itens existentes.

Delete: Excluir itens com confirmação visual via notificação.

Feedback ao usuário

Loader animado: Exibe carregamento durante fetch ou envio de dados.

Notificações: Mensagens de sucesso ou erro ao criar, editar ou excluir itens.

Navegação

Uso do React Router para transição entre páginas:

/ → Lista de itens (Home)

/create → Criar item

/edit/:id → Editar item

Layout e Responsividade

Layout baseado em TailwindCSS:

Grid responsivo para exibir itens (1 coluna mobile / 2 colunas desktop)

Botões estilizados com cores e hover

Layout centralizado com max-w para melhor visualização

Código modular e organizado

Components: Button, Loader, Notification

Pages: Home, CreateItem, EditItem

API: axios configurado para comunicação com backend

Types: Tipagem para os itens (Item.ts)

Acessibilidade

Formulários com labels e placeholders para melhor experiência e acessibilidade.

⚡ Como rodar o projeto

Clonar repositório

git clone <link-do-repo>
cd my-crud-app


Instalar dependências

npm install


Rodar mock API

json-server --watch db.json --port 3000


Rodar frontend

npm run dev


Acesse a aplicação: http://localhost:5173

💡 Melhorias futuras

Autenticação de usuário

Pesquisa e filtros avançados

Paginação de itens

Conexão com backend real (Node.js / Spring Boot / Firebase)

Testes unitários e integração
