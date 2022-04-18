# Introdução

A Reutilização de Software, essencialmente, é o processo de criação de sistemas a partir de softwares ou técnicas já existente, ou seja, a ideia é evitar retrabalho no desenvolvimento de uma aplicação.

No mundo da programação existem diversas frameworks e bibliotecas, sendo todas criadas com o princípio de que todos os outros programadores as usem para economizar tempo, principalmente, já que esses recursos já foram usados e muitas vezes validados quanto ao seu funcionamento e performance, consequentemente, a utilização desses recursos como técnicas de reutilização promovem as seguintes vantagens:

- Redução de tempo e custos;
- Maior confiabilidade do produto;
- Adequação aos padrões;

# Metodologia

## Reutilização no Backend

### _Node.js_

O _Node.js_ é um ambiente de execução Javascript server-side, ou seja, com ela é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução. Além disso, abordando o tema de Reutilização de Software, o NPM (Node Package Manager) não pode deixar de ser citado, pois por meio dele conseguimos facilmente instalar e trabalhar com um conjunto de componentes reutilizáveis ​​publicamente disponíveis.

### Framework _Express.js_

O framework _Express.js_ foi utilizado para otimizar o processo de construção da API da aplicação. Entre as funções desta framework, as principais são:

- Possui um sistema de rotas completo;
- Possibilita o tratamento de exceções dentro da aplicação;
- Permite a integração de vários sistemas de templates que facilitam a criação de páginas web para suas aplicações;
- Gerencia diferentes requisições HTTP com seus mais diversos verbos.

### Biblioteca _body-parser_

O _body-parser_ foi usado na construção do nosso backend devido a sua funcionalidade de converter as requisições HTTP para o formato .json, o que facilitou a construção da nossa API.

### Biblioteca _cors_

O _cors_ tem o objetivo de fornecer um middleware Connect/Express e ele foi usado na nossa aplicação para configurarmos de maneira mais fácil as opções de segurança das conexões dos clientes.

### Biblioteca _mssql_

O _mssql_ foi usado para realizar a conexão do backend com o SQL Server por meio das chaves de autenticação.

### Heroku

O Heroku é um serviço que permite hospedagem, configuração, testagem e publicação de projetos virtuais na nuvem, desta maneira, utilizamos esse serviço para realizar o deploy da nossa aplicação. Vale ressaltar também que ele serviu como ponto de versionamento do deploy já que ele vai atualizando o deploy apenas da parte que modificamos no código, ou seja, o deploy não precisa ser feito todo novamente a cada mudança na aplicação.

## Reutilização no Frontend

### Biblioteca React.js

A principal utilização da Reutilização de Software no frontend da nossa aplicação pode ser visto no uso da biblioteca React.js, que é uma biblioteca JavaScript para criar interfaces de usuário, sendo que um grande diferencial dela e o fato de ser uma biblioteca rápida, escalável e simples, além de poder ser usada com outras bibliotecas ou frameworks de JavaScript.

### Biblioteca _axios_

O _axios_ foi utilizado para realizar a conexão do frontend com a API.

### Biblioteca _qs_

O _qs_ foi utilizado para realizar a tradução dos objetos _js_ para _querystring_, o que facilitou na hora de realizar as requisições HTTP.

### Components

Dentro da construção do frontend a utilização da Reutilização de Software também pode ser muto vista dentro da pasta 'Components', que é onde se encontram vários componentes criados utilizando o React.js e que se encontram nesta pasta devido ao fato de serem utilizados em diferentes páginas criadas no nosso site, o que ajuda na padronização e organiza em um só lugar todos esses componentes.

# Bibliografia

> Express - framework de aplicativo da web Node.js. Disponível em: <https://expressjs.com/pt-br/>. Acesso em: 14 de abril de 2022.

> Felipe Batista. Como converter os dados de uma requisição com o body-parser. Disponível em: <https://medium.com/@febatista107/como-converter-os-dados-de-uma-requisição-com-o-body-parser-2b5b93100f00> . Acesso em: 14 de abril de 2022.

> React. Disponível em: <https://pt-br.reactjs.org>. Acesso em: 14 de abril de 2022.

> npm. cors. Disponível em: <https://www.npmjs.com/package/cors>. Acesso em: 16 de abril de 2022.

> npm. node-mssql. Disponível em: <https://www.npmjs.com/package/mssql>. Acesso em: 16 de abril de 2022.

> npm. qs. Disponível em: <https://www.npmjs.com/package/qs>. Acesso em: 16 de abril de 2022.

> npm. axios. Disponível em: <https://www.npmjs.com/package/axios>. Acesso em: 16 de abril de 2022.

> Heroku. Disponível em: <https://www.heroku.com>. Acesso em: 16 de abril de 2022.

> Node. Disponível em: <https://nodejs.org/en/>. Acesso em: 16 de abril de 2022.

# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0|14/04/2022|Criação do documento de Reutilização de Software|Ian Fillipe|
|1.1|16/04/2022|Revisão do documento e adição dos novos tópicos|Hérya, Ian Fillipe, Ítalo V. e João Victor|
