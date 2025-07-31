# 📄 PDF Generator with React + PdfMake

Este projeto demonstra como gerar documentos PDF em aplicações React utilizando a biblioteca [PdfMake](https://pdfmake.github.io/docs/). É ideal para aplicações empresariais que precisam exportar relatórios ou informações exibidas em tela.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – Build rápido com suporte a HMR
- [PdfMake](https://pdfmake.github.io/docs/) – Geração de PDFs via JavaScript
- ESLint – Regras básicas de linting

## 🔌 Plugins Vite

- `@vitejs/plugin-react` – Usa Babel para Fast Refresh
- `@vitejs/plugin-react-swc` – Usa SWC para Fast Refresh

## 🛠️ Como iniciar o projeto

### 1. Criar o projeto React

Com Yarn:
```bash
yarn create react-app app-react-pdf

Com npx

npx create-react-app app-react-pdf


### 2. Instalar o PdfMake
Com Yarn:

bash
yarn add pdfmake
Com NPM:

npm install pdfmake --save

### 3 - 🧪 Estrutura do Documento PDF

## O layout do PDF é definido por um objeto literal com as seguintes seções:

header: Cabeçalho do documento

content: Conteúdo principal (tabelas, parágrafos, listas)

footer: Rodapé com paginação

styles: Estilos personalizados

🔧 Funções principais

PreparaDocumento: Chama CriaCorpoDocumento para gerar os dados da seção content.

CriaCorpoDocumento: Itera os dados do arquivo data.js e retorna a tabela.

GerarDocumento: Define o layout completo, incluindo pageSize, pageMargins, content e footer.

📄 Rodapé com paginação

O rodapé é gerado dinamicamente com base na página atual e total de páginas. Inclui uma linha sutil e contador de páginas.

🖥️ Interface
A interface inicial é simples: uma tela com um botão que, ao ser clicado, gera o relatório em PDF.

📁 Estrutura de Pastas

Pdf_make/

├── public/

├── src/
│   ├── data.js
│   ├── App.jsx
│   └── ...

├── index.html

├── package.json

├── vite.config.js

└── README.md

📌 Objetivo

Demonstrar como integrar geração de PDFs em aplicações React de forma simples e eficiente, com foco em aplicações empresariais.

