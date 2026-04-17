# 🛍️ E-Commerce Project

Um projeto moderno de e-commerce desenvolvido com React e TypeScript, apresentando uma interface intuitiva para navegação de produtos, detalhes de itens, vendedores populares e blog de tendências.

## 📋 Sobre o Projeto

Este é um mini projeto de e-commerce com foco em criar uma experiência de usuário fluida e responsiva. A aplicação permite aos usuários:

- ✨ Navegar por uma lista de produtos com filtros
- 🛒 Visualizar detalhes individuais de cada produto
- 📊 Consultar vendedores populares
- 📰 Acompanhar blogs e tendências do mercado
- 🎨 Interface moderna e responsiva

O projeto foi desenvolvido seguindo boas práticas de desenvolvimento web moderno, com componentes reutilizáveis, tipagem estática e configuração otimizada para produção.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca JavaScript para construir interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **React Router** - Roteamento cliente-lado para navegação entre páginas
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida
- **Lucide React** - Ícones SVG modernos e customizáveis

### Ferramentas de Desenvolvimento

- **Vite** - Build tool rápido e otimizado
- **ESLint** - Linter para garantir qualidade do código
- **Axios** - Cliente HTTP para requisições

### Configuração

- **TypeScript Config** - Tipagem estrita e validação em tempo de compilação
- **PostCSS & Autoprefixer** - Processamento e compatibilidade de CSS

## 📦 Pré-requisitos

Antes de começar, certifique-se de que você tem instalado:

- **Node.js** (versão 16 ou superior) - [Baixar aqui](https://nodejs.org/)
- **npm** (geralmente vem com Node.js) ou **yarn**
- **Git** (opcional, para clonar o repositório)

Para verificar as versões instaladas, execute no terminal:

```bash
node --version
npm --version
```

## 💻 Instalação e Configuração

### 1. Clone o repositório (se aplicável)

```bash
git clone <URL-DO-REPOSITORIO>
cd ecomm-project
```

### 2. Instale as dependências

```bash
npm install
```

Isso irá instalar todas as dependências listadas no `package.json`.

### 3. Configure as variáveis de ambiente (se necessário)

Crie um arquivo `.env.local` na raiz do projeto (se precisar de variáveis de ambiente específicas).

## 🏃 Como Rodar o Projeto

### Modo de Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento com hot reload:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou similar, Vite irá informar a porta)

### Modo de Produção

Para compilar a aplicação para produção:

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados para produção.

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 🔍 Verificação de Qualidade do Código

Para rodar o linter e verificar a qualidade do código:

```bash
npm run lint
```

## 📂 Estrutura do Projeto

```
ecomm-project/
├── src/
│   ├── components/
│   │   ├── Bookcard.tsx           # Componente de card de blog
│   │   ├── MainContent.tsx        # Conteúdo principal da página
│   │   ├── PopularBlogs.tsx       # Seção de blogs populares
│   │   ├── ProductPage.tsx        # Página de detalhes do produto
│   │   ├── Sidebar.tsx            # Barra lateral com filtros/navegação
│   │   └── TopSellers.tsx         # Seção de vendedores populares
│   ├── context/
│   │   ├── FilterContext.tsx      # Context para gerenciar filtros
│   │   └── MainContext.tsx        # Context principal da aplicação
│   ├── App.tsx                    # Componente raiz
│   ├── main.tsx                   # Ponto de entrada da aplicação
│   └── index.css                  # Estilos globais
├── public/                         # Arquivos estáticos
├── vite.config.ts                 # Configuração do Vite
├── tsconfig.json                  # Configuração do TypeScript
├── package.json                   # Dependências do projeto
└── eslint.config.js               # Configuração do ESLint
```

## 🎨 Componentes Principais

- **Sidebar** - Navegação e filtros de produtos
- **MainContent** - Exibe a lista de produtos
- **ProductPage** - Detalhes completos de um produto individual
- **TopSellers** - Lista de vendedores mais populares
- **PopularBlogs** - Seção de blogs e tendências
- **Bookcard** - Card reutilizável para blogs

## 🌍 Deploy

Para fazer deploy da sua aplicação, você pode usar serviços como:

- **Vercel** - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **GitHub Pages** - [pages.github.com](https://pages.github.com)

Os arquivos da pasta `dist/` gerados pelo `npm run build` são o que precisa ser enviado para o servidor de hosting.

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Contribuições

Sinta-se à vontade para fazer fork, fazer alterações e sugerir melhorias!

---

**Desenvolvido com ❤️ e React**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
