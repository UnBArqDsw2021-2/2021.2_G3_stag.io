# Introdução

Durante a reunião entre o quarteto responsável por desenvolver os GOFs, decidimos quais métodos eram mais compatíveis com o projeto atual, a partir desta conversa investigamos os diferentes métodos de cada um dos padrões, percorrendo os padrões mais utilizados e até os mais desconhecidos, de preferência decidimos iniciar por meio dos padrões apresentados pela docente da matéria, porém não conseguimos identificar os casos de uso em nossa aplicação que poderiam utilizar estes padrões e assim justificamos cada um destes por meio deste documento.

# Metodologia

Nesse tópico serão apresentados os padrões que foram abordados porém não obtemos nenhuma perspectiva deles no projeto, pode ser que o projeto exija alguma implementação básica de algum deles ou até mesmo de outros não mencionados neste documento, porém aqui serão descritos os padrões pensados, no entanto, não utilizados, sendo justificada a sua ausência nos GOFs.

## Padrões não utilizados

### Padrões criacionais

#### Factory method

##### Definição

O **Factory Method** é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para um método fábrica especial, sendo que as novas instâncias são chamadas dentro do método fábrica.

##### Justificativa

Utiliza-se o Factory Method quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar, ou seja, em razão do escopo menor do nosso projeto e que ele é bem definido por meio de nossas GRASPs, decidimos por não utilizá-lo, principalmente pelo fato de que este padrão se identifica mais como incremental do que inicial.

#### Abstract method

##### Definição

O **Abstract Factory** é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.

A primeira coisa que o padrão Abstract Factory sugere é declarar explicitamente interfaces para cada produto distinto da família de produtos. Então você pode fazer todas as variantes dos produtos seguirem essas interfaces.

##### Justificativa

A razão por pensarmos neste padrão seria para implementá-la na parte de categorização de vagas, no entanto, ao observar a modelagem de dados já construída, percebe-se que este padrão equivale e é simplificado na construção de uma entidade vaga que já possui a categorização da vaga.

### Padrões estruturais

#### Adapter

##### Definição

O **Adapter** é um padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.

Um adaptador encobre um dos objetos para esconder a complexidade da conversão acontecendo nos bastidores. O objeto encobrido nem fica ciente do adaptador.

##### Justificativa

Pensamos em implementar este padrão para facilitar na construção de estruturas que a aplicação e o banco de dados interpretassem, impedindo que possíveis tipagens fossem errôneas, porém o express já trata esta conversão por meio das requisições HTTP, evitando o processo de construção de objetos que adaptassem estas comunicações.

#### Decorator

##### Definição

O **Decorator** é um padrão de projeto estrutural que permite que você acople novos comportamentos para objetos ao colocá-los dentro de invólucros de objetos que contém os comportamentos.

##### Justificativa

Pensamos em encapsular o fator de autenticação por meio de um decorator, especificando qual foi o valor inserido e assim resgatássemos o login daquele usuário e já identificássemos se é uma empresa ou candidato, no entanto, o método se torna complexo e reforça basicamente o que queríamos evitar, que seria a utilização de condicionais para identificar cada usuário.

Além do que não precisamos projetar comportamentos adicionais para objetos em tempo de execução, pois cada objeta já possui sua própria responsabilidade e é modularizado exatamente para ter esse objetivo.

### Padrões comportamentais

#### Memento

##### Definição

O **Memento** é um padrão de projeto comportamental que permite que você salve e restaure o estado anterior de um objeto sem revelar os detalhes de sua implementação.

O padrão Memento delega a criação dos retratos do estado para o próprio dono do estado, o objeto originador. Portanto, ao invés de outros objetos tentarem copiar o estado do editor “a partir do lado de fora”, a própria classe do editor pode fazer o retrato já que tem acesso total a seu próprio estado.

##### Justificativa

A utilização deste padrão seria para criar um objeto que lesse o armazenamento local do browser e assim configurasse o browser para aquela instância que já estava sendo utilizada, porém a partir de uma conversa do grupo, percebemos que não haveriam situação para se manter as configurações do site, por exemplo, não temos uma feature de tema escuro, ou seja, não necessidade de resgatar qual foi a opção escolhida pelo usuário.

Outro motivo foi a questão da segurança, pois não queremos que o usuário fique logado em sua conta toda vez que entre no site, e sim que faça seu login toda vez que houver a necessidade de acessá-lo.

#### State

##### Definição

O **State** é um padrão de projeto comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda. Parece como se o objeto mudasse de classe.

O padrão State sugere que você crie novas classes para todos os estados possíveis de um objeto e extraia todos os comportamentos específicos de estados para dentro dessas classes.

##### Justificativa

Este padrão foi mencionado na hora estávamos debatendo, porém percebemos que seria algo que não precisaríamos implementar, principalmente pelo fato de que o React já possui implementados funções que manipulam o estado, evitando que houvesse conflitos na modificação de várias e também confusão ao modificar o estado das variáveis instanciadas.

O método do React é o useState.

# Bibliografia

O Catálogo dos Padrões de Projeto. Disponível em: <https://refactoring.guru/pt-br/design-patterns/catalog>. Acesso em: 15 mar. 2022. 


# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0|16/03/2022|Criando template do documento|Ítalo V., Hérya, Guilherme Vial, Nathan|
|2.0|17/03/2022|Documento desenvolvido|Ítalo V.|