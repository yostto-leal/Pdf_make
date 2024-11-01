# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Em aplicações empresariais é muito comum a necessidade de criar documentos em PDF, seja para exibir dados de um relatório ou mesmo para exportar informações exibidas em tela. Neste artigo irei mostrar como criar documentos PDF utilizando React e a biblioteca PdfMake.

Iniciando o projeto
Inicie um novo projeto react utilizando o comando:
yarn create react-app app-react-pdf
Caso você não tenha o Yarn instalado pode iniciar o projeto com o seguinte comando:
npx create-react-app app-react-pdf
Por fim adicione a biblioteca PdfMake ao projeto com o comando:
yarn add pdfmake
ou caso não esteja utilizando yarn utilize o seguinte comando:
npm install pdfmake —sav

criar uma tela inicial bem simples, apenas com um botão para gerar o relatório.

Implementando o documento PDF

O PdfMake utiliza a sintaxe de object literals para construir o layout dos documentos, e sua estrutura é dividida em 4 partes, sendo elas header, content, footer e styles.
Além disso possui um conjunto de elementos como Tabelas, parágrafos e listas, sendo que é possível estilizá-los passando as propriedades inline ou definindo-as dentro da propriedade styles.

O método PreparaDocumento chama o CriaCorpoDocumento que irá iterar os dados do arquivo data.js e devolverá o conteúdo da seção content do documento.

No método GerarDocumento é definido o layout do relatório. Na primeira linha é definido o tamanho da página na propriedade pageSaze. Em seguida definimos as configurações de margem do documento. A propriedade pageMargins é muito importante, pois é ela que determina o tamanho disponível para o header e o footer, já que a altura do header vai de 0 até a quantidade de margem do topo e com o footer é a mesma coisa.

A propriedade content contém uma tabela e seu conteúdo sãos os dados gerados pelo método CriaCorpoDocumento. Na propriedade footer foi declarada uma função que recebe a página atual e a quantidade de páginas. A função do footer retorna uma tabela em que a primeira linha contém um text com vários _ para criar uma linha bem sutil, e na segunda linha foram utilizados os parâmetros recebidos pela função para exibir um contador de páginas.
