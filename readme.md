# Redshift UI Design System

O **Redshift UI** é um Design System moderno e flexível, desenvolvido para acelerar a construção de interfaces consistentes e acessíveis em aplicações React.

## Monorepo

Este repositório utiliza [Turborepo](https://turbo.build/) para gerenciar múltiplos pacotes:

- [`@redshiftui/tokens`](packages/tokens) — Tokens de design (cores, espaçamentos, tipografia, etc.)
- [`@redshiftui/react`](packages/react) — Componentes React reutilizáveis e estilizados
- [`@redshiftui/docs`](packages/docs) — Documentação interativa com Storybook
- [`@redshiftui/eslint-config`](packages/eslint-config) — Configuração compartilhada de ESLint
- [`@redshiftui/ts-config`](packages/ts-config) — Configuração compartilhada de TypeScript

## Começando

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/design-system-redshift.git
cd design-system-redshift
npm install
```

### Scripts principais

- `npm run dev` — Executa todos os pacotes em modo desenvolvimento
- `npm run build` — Faz o build de todos os pacotes
- `npm run release` — Publica os pacotes (exceto docs) usando Changesets

### Documentação

Acesse a documentação interativa rodando:

```sh
cd packages/docs
npm run dev
```

Acesse em [http://localhost:6006](http://localhost:6006).

## Estrutura dos Pacotes

- **Tokens:** Definições de design system exportadas como objetos JS/TS.
- **React:** Componentes como `Button`, `TextInput`, `Avatar`, `Toast`, etc., prontos para uso.
- **Docs:** Storybook customizado para visualizar e testar os componentes e tokens.
- **Configurações:** ESLint e TypeScript compartilhados para padronização do código.

## Contribuindo

1. Crie uma branch a partir da `master`
2. Faça suas alterações
3. Abra um Pull Request

## Licença

MIT

---

Feito com ❤️ por [Mateus Cristian Ferreira de Paula](https://github.com/seu-usuario)
