# Introdução
Este documento tem como finalidade apresentar o projeto **Stag.io** e informar seus principais propósitos, objetivos, restrições, custos e critérios para término do projeto.

# Metodologia
## Descrição do projeto
O **Stag.io** é uma aplicação web em que empresas podem divulgar vagas de estágio a possíveis candidatos interessados, visando facilitar a procura por vagas específicas para estágio e auxiliar na comunicação inicial entre empresa e candidato.

## Propósito e justificativa 
Diversas plataformas para divulgação de vagas de trabalho agregam anúncios para diversas modalidades trabalhistas, apresentam informações incompletas e não permitem filtrar vagas por características específicas, como localização ou grau de escolaridade exigido. O **Stag.io** tem como propósito reunir oportunidades de vagas específicas para estágio, além de permitir que os interessados selecionem as características que desejam em uma vaga. Deste modo, o projeto **Stag.io** busca promover a facilitação da relação empresa-candidato a partir da disponibilização de vagas por empresas e manifestação de interesse dos candidatos.

## Objetivos mensuráveis e critérios de sucesso relacionados

O objetivo principal do projeto **Stag.io** é unir uma empresa que busca um estagiário e um interessado em trabalhar em um estágio.

Abaixo estão listados os objetivos e seus critérios de sucesso:

| Objetivo| Critérios de sucesso |
|:--|:--|
|Divulgar vagas de estágio a possíveis candidatos interessados| - Adicionar uma vaga de estágio;<br/>- Mostrar vagas disponíveis;<br/>- Atualizar a situação da vaga;<br/>|
|Inscrever-se em uma vaga de estágio|- Procurar vaga de interesse;<br/>- Marcar interesse em uma vaga;<br/>- Acompanhar a situação da vaga;<br/>|

## Riscos de Alto Nível


| Risco | Impacto |  Ação preventiva | Ação corretiva |
| ---------- | ----------	| ---------------- | -------------- |
|Prazos apertados| Produto final deficiente | Reforçar prazos e estipular limites antes dos dias das entregas | Efetuar o desenvolvimento correto do que não pode ser feito |
|Equipe não apta a trabalhar com a tecnologia| Produto incompleto| Treinamento da equipe| Pareamento, estudos complementares e busca por ajuda externa |
|Trancamento da disciplina por membro da equipe |  Sobrecarga dos membros da equipe  |   Comunicação ativa constante|   	Replanejamento da divisão de tarefas|
|Problemas de comunicação|Problemas de gerenciamento|Alinhar a equipe quanto às atividades, dificuldades e prazos|Investigar a causa da falha de comunicação e trabalhar na integração da equipe|
|Produto não atende necessidade do cliente |Insatisfação dos usuários |Avaliar as métricas de valor do cliente na tomada de decisões |Refinar o entendimento de valor do cliente e dos requisitos da aplicação|
|Reuniões semanais incompletas|Falta de comunicação e distribuição de tarefas|Definir reuniões que são baseadas no heatmap|Informar àqueles que faltaram o que foi tratado na reunião|


## Restrições
As restrições do projeto são:

* O projeto deve ser realizado pelos integrantes do Grupo 03 da matéria de Arquitetura e Desenho de Software do 2º Semestre letivo de 2021; 
* O prazo para finalização do projeto é 22/04/2022.

## Estimativa de custo

### Custo de Mão de obra

Para o levantamento da estimativa do custo de mão de obra levamos em conta que cada um dos 10 integrantes do grupo trabalharia como um estagiário de desenvolvimento full-stack. Definimos como estagiário pois todos estamos em fase de aprendizagem da tecnologia que vamos trabalhar, alguns sabem mais e outros menos, assim,  ponderamos e concluímos que todos seríamos estagiários. Em relação ao valor da bolsa de cada integrante, a estimativa média destes valores a partir da pesquisa de mercado pelo <a href="https://www.glassdoor.com.br/Sal%C3%A1rios/brasil-estagi%C3%A1rio-sal%C3%A1rio-SRCH_IL.0,6_IN36_KO7,17.htm?clickSource=searchBtn" target="_blank"> Glassdoor </a> foi de R$ 1.300,00, tendo como referência a média brasileira. Foram considerados 4 meses de projeto, equivalente ao tempo de duração da disciplina.

| Função | Bolsa | Quantidade de integrantes | Total de bolsa |
|:--:|:--:|:--:|:--:|
|Estagiários de desenvolvimento full-stack|R$ 1.300,00 por mês|10|R$ 52.000|

### Aquisições

Com o estudo em relação aos equipamentos que são entregues nas empresas, o modelo mais comum entre os trabalhadores é o Notebook Lenovo Thinkpad E14 Gen 2 I5-1135g7, possuindo 256gb de ssd e 8gb de ram, sendo o mais básico entre o uso de diversas empresas, o valor deste modelo é de R$ 5.244,10 no dia 01/02/2022.

Por se tratar de um trabalho remoto, não há necessidade de alugar de um espaço de interação e trabalho.


| Recursos | Preço Unitário | Quantidade | Preço total |
|:--:|:--:|:--:|:--:|
|Notebooks|R$ 5.244,10|10|R$ 52.441,00|
|Espaço Coworking |R$ 0,00 |0|R$ 0,00 |

### Logística

Em relação ao marketing do aplicativo, valores arbitrários serão investidos em plataformas de anúncio, como Google Ads e Facebook Ads, e em copywriters que farão o desenvolvimento dos anúncios para persistência na disseminação da aplicação. O investimento inicial em logística será de três meses para verificar se existe uma necessidade de mais desenvolvimento ou não.

| Recursos | Preço Unitário | Quantidade | Preço total |
|:--:|:--:|:--:|:--:|
|Anúncios|R$ 100,00|3 meses|R$ 300,00|
|Copywriting|R$ 500,00|3 meses|R$ 1.500,00|

### Infraestrutura

Em relação ao ambientes de domínio e hospedagem, pensamos em ambientes que facilitam no escalonamento da aplicação. Por isso, seria interessante focar em bancos de dados relacionais, como SQL Server ou PostgreSQL, aplicar um back-end que trate estas requisições do banco, que possua memória suficiente para resgatar a informações de maneira otimizada, utilizando ExpressJS ou AdonisJS para distribuir melhor as requisições e assim podê-los hospedar em algum serviço de cloud, como Azure, AWS ou até mesmo o Heroku como uma opção inicial, tanto o front-end quanto o back-end.

A partir do plano production do Heroku, a estimativa de custo a partir da conversão em dólar para real é R$ 132,11, como vamos desenvolver no decorre da matéria, vamos estipular que o prazo seja de 3 meses.

| Recursos | Preço Unitário | Prazo | Preço total |
|:--:|:--:|:--:|:--:|
|Hospedagem|R$ 132,11|3 meses|R$ 396,33|

### Custos Totais

| Tipo de custo| Valor |
|:--:|:--:|
|Aquisições|R$ 52.441,00|
|Logística|R$ 1.800,00|
|Infraestrutura|R$ 396,33|
|**Total**|**R$ 54.637,33**|

Observação: Todos os valores são referentes ao mês de Janeiro de 2022.

## Critérios para término do projeto
O projeto **Stag.io** será finalizado quando a aplicação e a documentação correspondente estiverem completas e dentro dos padrões e dos limites de prazos e custos estabelecidos.

# Bibliografia

> Documentação QRComer, 2019. Página Termo de Abertura do Projeto. Disponível em: <https://fga-desenho-2019-2.github.io/Wiki/seminario1/tap/>. Acesso em: 01 de fevereiro de 2022.

> Documentação Curumim, 2021. Página TAP - Termo de Abertura do Projeto. Disponível em: <https://unbarqdsw2021-1.github.io/2021.1_G6_Curumim/base/tap/tap/>. Acesso em: 27 de janeiro de 2022. 

> Documentação Tá Na Mesa, 2021. Página TAP - Termo de Abertura do Projeto. Disponível em: <https://unbarqdsw2021-1.github.io/2021.1_G02_TaNaMesa_docs/1-Base/extras/TAP/>. Acesso em: 27 de janeiro de 2022. 


# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0| 27/01/2022| Abertura do documento| Hérya|
|2.0| 01/02/2022| Desenvolvimento e conclusão do documento| Hérya e Ítalo Vinícius|