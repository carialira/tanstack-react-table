# 📊 Projeto de Tabelas com React Table (TanStack)

Este repositório contém a implementação de tabelas dinâmicas utilizando a biblioteca [React Table (TanStack)](https://tanstack.com/table/latest/docs/react/overview). O projeto foi desenvolvido com React, TypeScript e Tailwind CSS, proporcionando uma solução eficiente e flexível para exibição de dados tabulares.

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/) 19
- [React Table (TanStack)](https://tanstack.com/table/latest/docs/react/overview) 8.20.6
- [TypeScript](https://www.typescriptlang.org/) 5.7.2
- [Tailwind CSS](https://tailwindcss.com/) 3
- [ShadCN](https://ui.shadcn.com/) (Componentes de UI baseados no Radix UI)
- [Radix UI](https://www.radix-ui.com/) (Checkbox, Dropdown Menu, Select, Slot)
- [Lucide React](https://lucide.dev/) (Ícones)
- [Class Variance Authority](https://cva.style/) (Gerenciamento de estilos)
- [clsx](https://www.npmjs.com/package/clsx) (Manipulação de classes CSS)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) (Otimização de classes Tailwind)
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate) (Animações)

## 📌 Funcionalidades

- Renderização eficiente de tabelas com React Table
- Paginação e ordenação de dados
- Filtros dinâmicos
- Customização de colunas
- Suporte a seleção de linhas

## 📦 Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

```sh
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
pnpm install  # ou npm install

# Inicie o servidor de desenvolvimento
pnpm run dev  # ou npm run dev
```

## 🛠 Como Utilizar

Dentro do projeto, você pode criar novas tabelas facilmente definindo colunas e dados.

Exemplo de definição de colunas:

```tsx
import { ColumnDef } from "@tanstack/react-table";

type Data = {
  id: number;
  nome: string;
  idade: number;
};

export const columns: ColumnDef<Data>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "nome", header: "Nome" },
  { accessorKey: "idade", header: "Idade" }
];
```

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionando minha feature'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


## 🎓 Créditos

Este projeto foi desenvolvido acompanhando a aula da [**JStack**](https://app.jstack.com.br) com [**Mateus Silva**](https://github.com/maateusilva).

---

Feito com ❤️ por [Ariadne Candido Liranço](https://github.com/carialira).

