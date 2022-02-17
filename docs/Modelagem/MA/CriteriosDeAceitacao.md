# Critérios de Aceitação
[comment]: <> (------------------------------------------------------)
## Épico 00 - Sistema

### US26 - Realizar login
<div style="text-align: justify">
Eu, como <b>usuário</b>, quero <b>realizar login na aplicação</b> para que eu <b>possa utilizar a aplicação</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve haver uma conexão com o servidor</div>
- <div style="text-align: justify">Deve apresentar uma tela de login com os campos necessários para o login</div>

### US27 - Recuperar informações de login

<div style="text-align: justify">
Eu, como <b>usuário</b>, quero <b>recuperar minhas informações de login</b> para que eu <b>possa utilizar a aplicação mesmo caso perca ou esqueça minhas informações de login</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve apresentar um botão na tela de login para recuperar informações de login</div>
- <div style="text-align: justify">Deve solicitar apenas o email</div>
- <div style="text-align: justify">Deve enviar para o email informado, caso exista na base dados, uma nova senha</div>

### US29 - Sistema fácil e prático

<div style="text-align: justify">
Eu, como <b>usuário</b>, quero <b>que o sistema seja fácil e prático de usar</b> para que eu <b>possa utilizar a aplicação sem dificuldades</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve apresentar mais de 70% de respostas "Sim", na questão sobre facilidade e praticidade na avaliação do sistema</div>

### US31 - Aplicação intuitiva

<div style="text-align: justify">
Eu, como <b>usuário</b>, quero <b>que a aplicação seja intuitiva</b> para que eu <b>possa utilizar suas funcionalidades o mais rápido possível</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve apresentar mais de 70% de respostas "Sim", na questão sobre intuitividade na avaliação do sistema</div>

[comment]: <> (------------------------------------------------------)
## Épico 01 - Criação, edição e análise de perfil

### US01 - Cadastrar na aplicação

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>me cadastrar na aplicação</b> para que eu <b>possa usar a aplicação</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve apresentar uma tela de cadastro na tela de login, com uma opção "Candidato"</div>
- <div style="text-align: justify">Deve pedir o email, a senha e uma confirmação de senha para efetivar o cadastro</div>

### US02 - Cadastrar na aplicação

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>me cadastrar na aplicação</b> para que eu <b>possa usar a aplicação</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve apresentar uma tela de cadastro na tela de login, com uma opção "Empresa"</div>
- <div style="text-align: justify">Deve pedir o email, a senha e uma confirmação de senha para efetivar o cadastro</div>

### US03 - Editar dados de perfil

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>editar meus dados de perfil, inclusive meu currículo</b> para que eu <b>possa atualizar o perfil conforme novas informações aparecem</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve haver na aplicação a opção "Ver perfil"</div>
- <div style="text-align: justify">Na tela de perfil, deve haver um botão "Editar"</div>
- <div style="text-align: justify">O usuário candidato deve poder alterar seu email e/ou sua senha, entre outras opções de perfil</div>
- <div style="text-align: justify">O usuário candidato deve poder subir um novo arquivo de currículo</div>

### US04 - Editar dados de perfil

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>editar meu perfil</b> para que eu <b>possa atualizar meus dados conforme novas informações aparecem</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve haver na aplicação a opção "Ver perfil"</div>
- <div style="text-align: justify">Na tela de perfil, deve haver um botão "Editar"</div>
- <div style="text-align: justify">O usuário empresa deve poder alterar seu email e/ou sua senha, entre outras opções de perfil</div>

### US05 - Disponibilizar meu currículo

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>disponibilizar meu currículo</b> para que as empresas <b>possam consultá-lo</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de perfil, deve haver uma opção "Subir currículo"</div>
- <div style="text-align: justify">O usuário candidato deve poder subir um novo arquivo com seu currículo</div>

### US06 - Acessar o perfil dos candidatos

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>acessar o perfil dos candidatos das minhas vagas</b> para que eu <b>possa analisar os candidatos</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de uma vaga específica, o usuário empresa deve poder visualizar os candidatos à vaga</div>
- <div style="text-align: justify">O usuário empresa deve poder visualizar qualquer um desses perfis e os dados que podem ser visualizados por outros</div>

### US07 - Acessar o perfil das empresas

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>acessar o perfil das empresas</b> para que eu <b>possa saber se suas características me interessam</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de uma vaga específica, o usuário candidato deve poder visualizar a empresa responsável</div>
- <div style="text-align: justify">O usuário candidato deve poder visualizar o perfil da empresa, com dados que podem ser visualizados por outros</div>

### US08 - Detalhar áreas de interesse

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>detalhar minhas áreas de interesse</b> para que as empresas <b>possam saber mais sobre mim</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de perfil, o usuário candidato deve poder marcar áreas de interesse com que se identifica</div>
- <div style="text-align: justify">Na tela de perfil, o usuário candidato deve poder descrever outras áreas de interesse com que se identifica</div>

[comment]: <> (------------------------------------------------------)
## Épico 02 - Disponibilização de vagas

### US09 - Disponibilizar vagas para universitários e/ou estudantes

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>disponibilizar vagas para universitários e/ou estudantes do ensino médio</b> para que eu <b>possa variar meu tipo de mão de obra</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de cadastro de vaga, o usuário empresa deve poder marcar o tipo de candidato que espera para a vaga que está cadastrando</div>

### US10 - Definir informações claras sobre as vagas

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>definir informações claras sobre as vagas</b> para que eu <b>receba apenas candidatos cientes da vaga que estão concorrendo</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de cadastro de vaga, o usuário empresa deve poder descrever adequadamente a vaga que está criando</div>

### US11 - Colocar valor da bolsa

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>colocar o valor da bolsa na vaga</b> para que os candidatos <b>saibam qual o valor da vaga que estão aplicando</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de cadastro de vaga, o usuário empresa deve poder colocar o valor da bolsa da vaga que está criando</div>

### US12 - Separar minhas vagas

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>separar minhas vagas para ensino médio das vagas para ensino superior</b> para que eu <b>possa separar bem quais são os candidatos que eu espero para as minhas vagas</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de cadastro de vaga, o usuário empresa deve poder marcar se a vaga que está criando é voltada para uma escolaridade específica ou não</div>

### US30 - Cadastrar vagas

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>cadastrar vagas</b> para que eu <b>possa receber candidatos para analisar e eventualmente contratar</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Para o usuário empresa, deve haver uma tela de cadastro de vagas</div>
- <div style="text-align: justify">Deve haver um cadastro de vagas com campos como nome e descrição da vaga</div>

[comment]: <> (------------------------------------------------------)
## Épico 03 - Análise de candidatos

### US13 - Analisar os candidatos que aplicaram para as vagas

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>analisar os candidatos que aplicaram para as minhas vagas</b> para que eu <b>possa escolher um ou alguns para os próximos níveis ou contratar</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Para o usuário empresa, deve haver uma tela de vagas cadastradas</div>
- <div style="text-align: justify">O usuário deve poder analisar uma vaga específica e ver os candidatos que se inscreveram nela</div>
- <div style="text-align: justify">O usuário deve poder analisar individualmente cada um dos candidatos</div>

### US14 - Escolher candidatos

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>escolher quais candidatos aplicaram para as minhas vagas</b> para que eu <b>possa contratar</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de análise individual de candidato, o usuário empresa deve poder selecioná-lo para avançar para uma próxima fase ou possível contratação</div>

### US15 - Ordenar os interessados por seus dados

<div style="text-align: justify">
Eu, como <b>usuário empresa</b>, quero <b>ordenar os interessados para as minhas vagas por seus dados, como tempo de experiência, escolaridade, entre outros,</b> para que eu <b>possa analisar os candidatos organizadamente</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de análise de candidatos, o usuário empresa deve poder filtrar os candidatos por uma característica desejada</div>

[comment]: <> (------------------------------------------------------)
## Épico 04 - Aplicação e consulta de vagas

### US16 - Aplicar para vagas disponíveis

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>aplicar para vagas disponíveis</b> para que eu <b>possa ser selecionado por uma empresa</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve haver uma tela de vagas disponíveis para que o usuário candidato possa selecionar alguma e se inscrever</div>

### US17 - Consultar status das solicitações das aplicações para vaga

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>consultar o status da solicitação das minhas aplicações para vaga</b> para que eu <b>possa acompanhar se minha solicitação está evoluindo ou sendo recusada</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve haver uma tela para que o usuário candidato veja as vagas em que se candidatou para que possa ver os status das vagas</div>

### US18 - Consultar vagas disponíveis

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>consultar vagas disponíveis</b> para que eu <b>possa arranjar um estágio</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Deve haver uma tela para que o usuário candidato possa explorar vagas disponíveis</div>

### US28 - Receber notificação de mudança de status

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>receber uma notificação caso o status de uma das minhas aplicações mude</b> para que eu <b>possa saber sobre a evolução ou negação da minha solicitação sem precisar ficar entrando no sistema o tempo todo para acompanhá-la</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na aplicação, deve haver uma sinalização na tela do usuário candidato caso o status de alguma de suas solicitações mude</div>

[comment]: <> (------------------------------------------------------)
## Épico 05 - Vagas específicas

### US19 - Procurar vagas com base em localização

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar vagas com base numa localização</b> para que eu <b>possa me candidatar apenas para vagas que tenho condições geográficas de aplicar</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las com base em uma localização</div>

### US20 - Procurar por vagas com base no valor da bolsa

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar por vagas com base no valor da bolsa</b> para que eu <b>possa me candidatar apenas para vagas que me agradam financeiramente</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las por uma faixa de valor das bolsas</div>

### US21 - Procurar por vagas de áreas de interesse

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar por vagas de áreas de interesse específicas como artes, exatas e etc.</b> para que eu <b>possa me candidatar para vagas em áreas que tenho interesse</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las por vagas que focam em uma ou mais áreas de interesse específicas</div>

### US22 - Procurar por vagas em cursos

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar por vagas voltadas para cursos específicos</b> para que eu <b>possa me candidatar em vagas voltadas para meu perfil universitário</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las por vagas voltadas para cursos específicos</div>

### US23 - Procurar por vagas de uma empresa

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar por vagas de uma empresa específica</b> para que eu <b>possa me candidatar em vagas de uma empresa que já me interesso</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las por vagas de uma empresa específica</div>

### US24 - Procurar por vagas voltadas para um nível de escolaridade

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar por vagas voltadas para escolaridades específicas</b> para que eu <b>possa achar vagas que combinem com meu nível de escolaridade</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las por vagas de um nível de escolaridade específico</div>

### US25 - Procurar por vagas em modelo remoto ou presencial

<div style="text-align: justify">
Eu, como <b>usuário candidato</b>, quero <b>procurar por vagas em modelo remoto ou presencial</b> para que eu <b>possa achar vagas que se adequem ao modelo que posso estagiar</b>.
</div>

Critérios de aceitação:

- <div style="text-align: justify">Na tela de busca de vagas, o usuário candidato deve poder filtrá-las por vagas de modelo remoto ou presencial</div>

# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
| 1.0 | 15/02/2022 | Criação dos critérios de aceitação | Álvaro, Ítalo |