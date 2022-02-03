# Introdução

<p style="text-indent: 20px; text-align: justify">
Quando as partes interessadas não podem concordar com as prioridades dos requisitos por meio de outras informações relativamente informais
técnicas, pode ser útil aplicar um método mais analítico.
Esta técnica de priorização analítica é utilizada na classificação de importância  relativa dos requisitos, depois que for identificados os requisitos essenciais ao produto que será entregue.
</p>

# Metodologia

<p style="text-indent: 20px; text-align: justify">
A técnica de "Valor, custo e risco" tem como objetivo produzir uma tabela que prioriza os requisitos sem que haja desbalanceamento por parte apenas do cliente ou do desenvolvedor. Ele envolve 3 papéis, o gerente, o representante dos clientes e o representante do desenvolvimento.

Elaboramos o passo a passo de como fizemos nossa priorização utilizando a técnica de valor, custo e risco.

* Passo 1: Listar todos os requisitos funcionais em uma tabela. 

* Passo 2: Estimar o benefício relativo que cada recurso fornece ao cliente ou ao negócio de 1 a 9, em que 1 é o menos significativo e 9 é o mais significativo.

* Passo 3: Estimar a penalidade que o negócio sofreria, se o recurso não for incluído, de 1 a 9, em que 1 é o com menor penalidade e 9 a maior penalidade.

* Passo 4: A Coluna valor total é a soma do (Benefício Relativo * Peso Relativo + Penalidade Relativa * Peso Relativo), o peso relativo utilizado nesse caso foi de 1.

* Passo 5: Estime o custo relativo de implementação de cada requisito, de 1 a 9.

* Passo 6: Estime o grau relativo ao risco a cada requisito de uma escala de 1 a 9.

* Passo 7: Calcular a prioridade para cada requisito usando: valor % / (custo % * Peso custo + risco % * Peso Risco). O Peso custo e risco aqui utilizados foram de 1.
</p>


Id requisito | requisito | Benefício relativo | Penalidade relativa  | Valor relativo | Valor % | Custo relativo | Custo % | Risco relativo | Risco % | Prioridade 
|--|--|--|--|--|--|--|--|--|--|--|
| RF01 | Aplicar para vagas disponíveis | 8 | 9 | 17 | 0,064 | 7 | 0,037 | 5 | 0,032 | 0,0927 |
| RF02 | Consultar status da solicitação de aplicação para a vaga | 7 | 6 | 13 | 0,049 | 3 | 0,015 | 2 | 0,012 | 1,814 |
| RF03 | Consultar vagas disponíveis | 9 | 9 | 18 | 0,068 | 6 | 0,031 | 5 | 0,032 | 1,079 |
| RF04 | Empresa pode analisar cada um que se candidatou para sua vaga e escolher quais manter | 9 | 9 | 18 | 0,068 | 7 | 0,037 | 6 | 0,038 | 0,906 |
| RF05 | Usuário candidato pode editar seus dados de perfil, inclusive seu currículo | 7 | 8 | 15 | 0,057 | 6 | 0,031 | 6 | 0,038 | 0,826 |
| RF06 | Permitir vagas para universitários e estudantes do ensino médio | 9 | 9 | 18 | 0,068 | 4 | 0,021 | 2 | 0,012 | 2,060 |
| RF07 | Empresa define informações claras sobre as vagas | 7 | 7 | 14 | 0,053 | 5 | 0,026 | 3 | 0,019 | 1,177 |
| RF08 | Fazer cadastro do usuário | 9 | 9 | 18 | 0,068 | 6 | 0,031 | 4 | 0,025 | 1,214 |
| RF09 | Diferenciar perfil de usuário (Empresa/interessado) | 9 | 8 | 17 | 0,064 |7 | 0,037 | 7 | 0,045 | 0,780 |
| RF10 | Empresa tem que colocar o valor da bolsa | 6 | 7 | 13 | 0,049 | 4 | 0,021| 3 | 0,019 | 1,225 |
| RF11 | A empresa pode editar seus dados de perfil |7 | 7 | 14 | 0,053 | 6 | 0,031 | 5 | 0,032 | 0,841 |
| RF12 | Poder disponibilizar seu currículo para consulta das empresas | 7 | 9| 16 | 0,061 | 7 | 0,037 | 5 | 0,032 | 0,884 |
| RF13 | Empresa pode acessar o perfil dos interessados em suas vagas para análise | 8 | 9 | 17 | 0,064 | 7 | 0,037 | 5 | 0,032 | 0,927 |
| RF14 | Diferenciar as vagas entre o ensino médio e superior | 6 | 7 | 13 | 0,049 | 4 | 0,021 | 3 | 0,019 | 1,225 |
| RF15 | Usuários podem acessar perfil das empresas | 8 | 9 | 17 | 0,064 | 7 | 0,037 | 5 | 0,032 | 0,927 |
| RF16 | Buscar vagas baseadas numa localização específica | 7 | 6 | 13 | 0,049 | 5 | 0,026 | 4 | 0,025 | 0,960 |
| RF17 | Candidato pode filtrar as vagas pelo valor da bolsa | 7 | 5 | 12 | 0,045 | 5 | 0,026 | 4 | 0,025 | 0,882 |
| RF18 | Candidato pode filtrar pela área de interesse | 8 | 7 | 15 | 0,057 | 5 | 0,026 | 4 | 0,025 | 1,117 |
| RF19 | Filtrar as vagas de estágio por curso | 7 | 7 | 14 | 0,053 | 5 | 0,025 | 4 | 0,025 | 1,060 |
| RF20 | Empresa pode filtrar os interessados em sua vaga por dados dos candidatos (tempo de experiência, escolaridade, ...) | 8 | 7 | 13 | 0,049 | 6 | 0,031 | 4 | 0,025 | 0,875 |
| RF21 | Candidato pode filtrar vagas por nome da empresa | 6 | 7 | 13 | 0,049 | 5 | 0,026 | 4 | 0,025 | 0,960 |
| RF22 | Filtrar as vagas de estágio por nível de escolaridade | 6 | 6 | 12 | 0,045| 5 | 0,026 | 4 | 0,025 | 0,882 |
| RF23 | Candidato pode filtrar por estágio remoto ou presencial | 8 |6 | 14 | 0,053 | 5 | 0,026 | 4 | 0,025 | 1,039 |
| RF24 | Vagas detalhadas por interesse | 8 | 7 | 15 | 0,057 | 4 | 0,021 | 4 | 0,025 | 1,239 |
| RF25 | Usuários candidatos podem detalhar suas áreas de interesse | 6 | 5 | 11 | 0,041 | 5 | 0,026 | 5 | 0,032 | 0,706 |
| RF26 | Realizar login | 9 | 9 | 18 | 0,068 | 6 | 0,031 | 7 | 0,045 | 0,894 |
| RF27 | Recuperar suas informações de login | 9 | 9 | 18 | 0,068 | 7 | 0,037 | 9 | 0,058 | 0,715 |
| RF28 | Receber uma notificação caso o status ou descrição da vaga seja alterado | 9 | 7 | 16 | 0,061 | 6 | 0,031 | 5 | 0,032 | 0,968 |
| RF30 | Conseguir cadastrar vagas de estágio | 9 | 9 | 18 | 0,068 | 5 | 0,026 | 3 | 0,019 | |
|      | TOTAL | 262 | 262 | 524 | 1 | 188 | 1 | 155 | 1 | 1,317 |

# Bibliografia

>WIEGERS, Karl; BEATTY, Joy. "Software Requirements". Microsoft Press, 2013.
 
# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0| 01/02/2022 | Criação da Documentação | Nathan |
|1.1| 03/02/2022 | Revisões ortográficas | Álvaro |