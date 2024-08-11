# BankDash

## Projeto de Portfólio

O BankDash é um projeto de frontend estático criado para demonstrar minhas habilidades em desenvolvimento web. O objetivo é criar um dashboard que permita aos usuários visualizar e editar suas informações, exibir gráficos com resumos, previsões e históricos, e gerenciar seus investimentos e transações.

## Funcionalidades

- Visualização e edição de informações do usuário
- Exibição de gráficos com resumos, previsões e históricos
- Gerenciamento de investimentos e transações recentes
- Criação e edição de cartões
- Edição de informações do perfil

## Tecnologias e Linguagens

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/guide)

## Estrutura do Projeto

- O projeto é dividido em componentes reutilizáveis, permitindo fácil manutenção e atualização.
- A estrutura de pastas é organizada de forma lógica, com cada pasta contendo arquivos relacionados a uma funcionalidade específica.

src/
│
├── app/
│ ├── layout.tsx
│ └── (páginas)/
│   └── page.tsx
│
├── components/
│
├── features/
│ └── (separado por página)/
│   └── components/
│   └── NomeComponente/
│       └── NomeComponente.tsx
│
└── arquivos de configuração na raiz do projeto

### Descrição:

- **`src/app/layout.tsx`**: Componente de layout principal do aplicativo.
- **`src/app/(páginas)/page.tsx`**: Página principal ou outras páginas do projeto.
- **`src/components/`**: Pasta para componentes compartilhados que podem ser reutilizados em diferentes partes do projeto.
- **`src/features/(separado por página)/components/Componente/Componente.tsx`**: Componentes específicos de cada feature ou página, organizados de forma modular.
- **Arquivos de configuração na raiz do projeto**: Arquivos como `tsconfig.json`, `tailwind.config.js`, `next.config.js`, entre outros, que configuram e personalizam o comportamento do projeto.

## Instalação e Execução

Para executar o projeto, siga os passos abaixo:

1. Clone o repositório.
2. Execute o comando `npm install`.
3. Em seguida, execute `npm run dev`.

O projeto será executado em modo de desenvolvimento, permitindo que você visualize e interaja com o dashboard.

## Observações

- O projeto é apenas um exemplo de frontend estático e não inclui funcionalidades de backend ou banco de dados.
- O objetivo é demonstrar minhas habilidades em desenvolvimento web e não criar um produto final.
