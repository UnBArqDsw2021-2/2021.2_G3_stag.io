# Introdução

Os casos de uso são aqueles que descrevem as funcionalidades que foram propostas para um aplicativo, descrevendo um conjunto de ações que um sistema deve desempenhar com a colaboração de um ou mais usuários externos a esse sistema. Fazendo uso da notação UML, notação orientada a objetos ele pode ser considerado como uma ferramenta que pode auxiliar o levantamento de requisitos funcionais.

Um caso de uso basicamente representa a interação entre um ator que pode ser uma pessoa ou entidade máquina que interage com o sistema para executar algum trabalho. Para a realização do nosso diagrama, foi definido os atores (pessoas ou outros sistemas que interagem com o aplicativo), as classes de interação (ações dos usuários ou do sistema), os relacionamentos (ligação dos atores e as classes de interação) e o escopo do sistema (limite dado pelo sistema atuante).

Sendo eles definidos na imagem abaixo:

<center>
<img src="../../../../assets/Modelagem/CasosDeUso/acoesCasoDeUso.png" width="700px"></br>
<figcaption>Figura 1 : Componetes Casos de Uso</figcaption>
</center>

## Diagramas Caso de Uso

A gente definiu dois diagramas principais de caso de uso, um para candidatos (estudantes do ensino médio, universitários, profissionais com pouca experiência) e outra para empresas.

### Caso de uso - Candidato

<center>
<img src="../../../../assets/Modelagem/CasosDeUso/CasoDeUsoCandidato.png" width="700px"></br>
<figcaption>Figura 2 : Diagrama caso de uso Candidato</figcaption>
</center>

## Cadastrar Candidato
<center>

| Caso 1          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando o site é acessado é necessário realizar o login para acessar as vagas                                                                                                                            |
| Ator(es)        | Candidatos                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e ter navegador instalado                                                                                                                                                                                                              |
| Fluxo           | 1 - O ator precisa abrir o site <br/>2 - Necessita criar uma conta com seus dados <br/>|
| Pós-condições   | O autor terá acesso a todas as funcionalidades do site                                                                                        |                                                                                                                                          |
<figcaption>Tabela 1 - Descrição de login</figcaption>
</center>
<br/>


## Gerenciar Perfil - Candidato
<center>

| Caso 2          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando já logado no site, é possível editar perfil de usuário adicionando currículo e outras informações                                                                                                                            |
| Ator(es)        | Candidatos                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e ter navegador instalado                                                                                                                                                                                                              |
| Fluxo           | 1 - O ator precisa abrir o site <br/>2 - Precisa estar cadastrado e logado <br/>3 - Acessar a área de perfil e gerenciar os seus dados <br/>|
| Pós-condições   | O usuário tera seus dados atualizados                                                                                 |                                                                                                                                          |
<figcaption>Tabela 2 - Descrição da Gerência do perfil</figcaption>
</center>
<br/>

## Visualizar vaga de estágio
<center>

| Caso 3          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando já logado no site, o usuário poderá visualizar as vagas de estágio e filtrar com as características desejadas                                                                                                                           |
| Ator(es)        | Candidatos                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e ter navegador instalado  e cadastro no site                                                                                                                                                                                                             |
| Fluxo           | 1 - O ator precisa abrir o site <br/>2 - Precisa estar cadastrado e logado <br/>3 - Acessar a área de estágios <br/>4 - Buscar o estágio desejado <br/>5 - Aplicar para esse estágio encontrado <br/>6 - Receber notificações do status da sua vaga <br/>|
| Pós-condições   | O usuário aguarda aprovação e status da sua vaga                                                                                 |                                                                                                                                          |
<figcaption>Tabela 3 - Descrição da vaga do estágio</figcaption>
</center>
<br/>


## Acessar perfil da empresa
<center>

| Caso 4          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando já logado no site, o usuário poderá acessar o perfil da empresa que esta aplicando a vaga de estágio                                                                                                                          |
| Ator(es)        | Candidatos                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e ter navegador instalado  e cadastro no site                                                                                                                                                                                                             |
| Fluxo           | 1 - O ator precisa abrir o site <br/>2 - Precisa estar cadastrado e logado <br/>3 - Acessar a área de estágios <br/>4 - Visualizar a empresa que está aplicando estágio <br/>5 - Ver as informações da empresa <br/>|
| Pós-condições   | O usuário descobre qual empresa está aplicando o estágio e suas informações                                                                                 |                                                                                                                                          |
<figcaption>Tabela 4 - Descrição da vaga do estágio</figcaption>
</center>
<br/>


### Caso de uso - Empresa

<center>
<img src="../../../../assets/Modelagem/CasosDeUso/CasoDeUsoEmpresa.png" width="700px"></br>
<figcaption>Figura 3 : Diagrama caso de uso Empresa</figcaption>
</center>


## Cadastrar empresa
<center>

| Caso 5          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando o site é acessado pela primeira vez, é necessário realizar um cadastro para ter acesso as funcionalidades do site                                                                                                                            |
| Ator(es)        | Empresa                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e o navegador instalado                                                                                                                                                                                                              |
| Fluxo           | 1 - O ator precisa abrir o site <br/>2 - Necessita inserir um email e senha válidos<br/>3 - Necessita inserir um CNPJ válido <br/>4 - O autor então terá de resolver um CAPTCHA e então é finalizado o cadastro |
| Pós-condições   | O autor terá acesso a todas as funcionalidades do aplicativo                                                                                                                                                                                                |

<figcaption>Tabela 5 - Cadastro de um perfil de empresa</figcaption>
</center>
<br/>

## Gerenciar Perfil - Empresa
<center>

| Caso 6          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando o usuário deseja alterar ou incluir novos dados ao seu perfil, após já possuir uma conta                                                                                                                            |
| Ator(es)        | Empresa                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e o navegador instalado                                                                                                                                                                                                              |
| Fluxo           | 1 - O ator precisa abrir o site <br/>2 - Necessita logar na sua conta previamente cadastrada<br/>3 - Navegar até o seu perfil <br/>4 - Selecionar o ícone de EDIÇÃO <br/>5 - Salvar as alterações de perfil|
| Pós-condições   | O autor terá livre acesso a modificar os dados de seu perfil quando desejar                                                                                                                                                                                              |

<figcaption>Tabela 6 - Gerenciar perfil da empresa</figcaption>
</center>
<br/>

## Visualizar perfil de candidato
<center>

| Caso 7          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando um usuário se candidatar a uma vaga disponibilizada pela empresa e ela desejar avaliar o seu perfil                                                                                                                           |
| Ator(es)        | Empresa e Candidato                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e o navegador instalado                                                                                                                                                                                                              |
| Fluxo           | 1 - A empresa precisa abrir o site <br/>2 - Necessita logar na sua conta previamente cadastrada<br/>3 - Quando houver um candidato a vaga a aba de notificações no perfil da empresa ficará sinalizado e assim deve ser selecionada <br/>4 - Então, a empresa será direcionada a uma página com os candidatos aquela vaga <br/>5 - Clicar no nome de um candidato exibirá o seu perfil|
| Pós-condições   | A empresa poderá visualizar todos os perfis de candidatos para uma vaga disponibilizada por ela                                                                                                                                                                                              |

<figcaption>Tabela 7 - Visualizar perfil de candidato</figcaption>
</center>
<br/>

## Cadastrar vaga de estágio
<center>

| Caso 8          | Informações                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição       | Quando uma empresa deseja divulgar uma vaga para estágios e decide utilizar o Stag.io                                                                                                                           |
| Ator(es)        | Empresa                                                                                                                                                                                                                                                     |
| Pré-condições   | Ter acesso à internet e o navegador instalado                                                                                                                                                                                                              |
| Fluxo           | 1 - A empresa precisa abrir o site <br/>2 - Necessita logar na sua conta previamente cadastrada<br/>3 - Na tela inicial o usuário deverá selecionar o ícone do seu perfil <br/>4 - Então, será direcionada a uma página com os dados da empresa e assim selecionar a opção "Criar nova vaga" <br/>5 - Assim serão requisitados os dados e o tipo de vaga que este usuário gostaria de criar <br/>6 - Finalizar o processo clicando no botão "Publicar nova Vaga"|
| Pós-condições   | A empresa disponibilizará os dados a respeito da vaga criada na plataforma e será notificada dos usuários que se inscreverem nela                                                                                                                                                                                              |

<figcaption>Tabela 7 - Visualizar perfil de candidato</figcaption>
</center>
<br/>


# Bibliografia

>BARBOSA S. D. J.; SILVA B. S. <strong>Interação Humano-Computador</strong> ed. Elsevier, 2010.

>VAZQUEZ, Carlos; Simões, Guilherme (2016). Engenharia de Requisitos: Software Orientado ao Negócio.

# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0|14/02/22|Abertura do documento|Gabriel Avelino|
|1.1|15/02/22|Adicionando diagrama candidato|Gabriel Avelino e João Victor|
|1.2|16/02/22|Adicionando diagrama empresa|Gabriel Avelino e João Victor|
|1.3|16/02/22|Tabelas de casos de uso|Gabriel Avelino e João Victor|
