# Introdução

O documento abaixo tem como objetivo descrever quais são os métodos HTTP que foram criados para a API da aplicação Stag.io. Descrevendo quais são os requisitos e respostas para as requisições.

# Metodologia

A partir de um estudo feito por meio do protótipo de alta fidelidade e da modelagem de dados já feitos, inferimos quais seriam os métodos necessários, e por meio da ferramenta Insomnia, desenvolvemos exemplos de requisições que necessitamos no front-end da aplicação.

A API foi desenvolvida por meio da biblioteca Express que é compatível com Javascript e é executada e instalada por meio do ambiente Node.js, utilizamos também a biblioteca Nodemon para rodar uma versão hot-reload das alterações que fizemos, assim não precisaríamos para e executar novamente o comando "npm start", aumentando a produtividade do desenvolvimento.

Os métodos criado no Express foram:

- Login: GET
    - SEND:
        - cnpj/cpf
        - senha
    - RETURN:
        - idUsuarioLogado
        - tipoUsuario

- CadastroCandidato: POST
    - SEND:
        - tipoUsuario = cand
        - nome
        - cpf
        - senha
        - localização (cidade, uf)
        - idEscolaridade
        - currículo (varbinary)
        - areasInteresse
     - RETURN: 
        - idUsuarioLogado
        - tipoUsuario

- CadastroEmpresa: POST
    - SEND:
        - tipoUsuario = empr
        - nome
        - cnpj
        - senha
        - descrição
        - localização (cidade, uf)
        - siteProprio
    - RETURN:
        - idUsuarioLogado
        - tipoUsuario

- AdicionarVaga: POST
    - SEND:
        - idVaga (caso seja null, adição, caso tenha valor, edição)
        - idEmpresa
        - titulo
        - descricao
        - privilegios
        - regime (1 = REMOTO, 2 = PRESENCIAL)
        - idEscolaridade

- EditarVaga (getVaga): PUT
    - SEND:
        - idVaga
    - RETURN:
        - titulo
        - descricao
        - privilegios
        - regime (1 = REMOTO, 2 = PRESENCIAL)
        - idEscolaridade

- EditarVaga (updVaga): PUT
    - SEND:
        - idVaga
    - RETURN:
        - titulo
        - descricao
        - privilegios
        - regime (1 = REMOTO, 2 = PRESENCIAL)
        - idEscolaridade

- ExcluirVaga: DELETE
    - SEND:
        - idVaga

- VerVagasCandidato: GET
    - SEND:
        - cpfCandidato
    - RETURN:
        - vagasCandidato

- GetAllVagas: GET
    - SEND:
        - filtrosOpcionais
    - RETURN:
        - vagasFiltradas

- GetVagasCandidato: GET
    - SEND:
        - cpfCandidato
    - RETURN:
        - vagasCandidato

- GetVagaEspecifica: GET
    - SEND:
        - idVaga
    - RETURN:
        - vaga

- CandidatarVaga: POST
    - SEND:
        - cpfCandidato
        - idVaga

Todos os erros de conexão ou de busca em relação ao banco de dados são retornados por meio do status 500, por exemplo, erros na autenticação ou armazenamento de cadastros.

Cada erro especifica a mensagem de erro, ou seja, existe uma melhor compreensão do erro que ocorreu e o usuário fica informado desse erro.

# Bibliografia

> Métodos de requisição HTTP - HTTP | MDN. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods>. Acesso em: 10 abr. 2022. 

> Express - framework de aplicativo da web Node.js. Disponível em: <https://expressjs.com/pt-br/>. Acesso em: 09 abr. 2022. 

> nodemon. Disponível em: <https://nodemon.io/>. Acesso em: 10 abr. 2022. 

> The API Design Platform and API Client. Disponível em: <https://insomnia.rest/>. Acesso em: 11 abr. 2022. 

# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0|14/04/22|Criando documento| Ítalo Vinícius|
|1.1|14/04/22|Listagem das requisições| Álvaro |