# Introdução

Quando as partes interessadas não podem concordar com as prioridades dos requisitos por meio de outras informações relativamente informais
técnicas, pode ser útil aplicar um método mais analítico.
Esta técnica de priorização analítica é utilizada na classificação de importância  relativa dos requisitos, depois que for identificados os requisitos essenciais ao produto que será entregue.

# Metodologia

A técnica de "Valor, custo e risco" tem como objetivo produzir uma tabela que prioriza os requisitos sem que haja desbalanceamento por parte apenas do cliente ou do desenvolvedor. Ele envolve 3 papéis, o gerente, o representante dos clientes e o representante do desenvolvimento.

Elaboramos o passo a passo de como fizemos nossa priorização utilizando a técnica de valor, custo e risco.

* Passo 1: Listar todos os requisitos funcionais em uma tabela. 

* Passo 2: Estimar o benefício relativo que cada recurso fornece ao cliente ou ao negócio de 1 a 9, em que 1 é o menos significativo e 9 é o mais significativo.

* Passo 3: Estimar a penalidade que o negócio sofreria, se o recurso não for incluído, de 1 a 9, em que 1 é o com menor penalidade e 9 a maior penalidade.

* Passo 4: A Coluna valor total é a soma do (Benefício Relativo * Peso Relativo + Penalidade Relativa * Peso Relativo), o peso relativo utilizado nesse caso foi de 1.

* Passo 5: Estime o custo relativo de implementação de cada requisito, de 1 a 9.

* Passo 6: Estime o grau relativo ao risco a cada requisito de uma escala de 1 a 9.

* Passo 7: Calcular a prioridade para cada requisito usando: valor % / (custo % * Peso custo + risco % * Peso Risco). O Peso custo e risco aqui utilizados foram de 1.

<table style="max-width: 70%;">
    <tr>
        <td>Id requisito</td>
        <td>requisito</td>
        <td>Benefício relativo</td>
        <td>Penalidade relativa</td>
        <td>Valor relativo</td>
        <td>Valor %</td>
        <td>Custo relativo</td>
        <td>Custo %</td>
        <td>Risco relativo</td>
        <td>Risco %</td>
        <td>Prioridade</td>
    </tr>
    <tr>
        <td>RF01</td>
        <td>Aplicar para vagas disponíveis</td>
        <td>8</td>
        <td>9</td>
        <td>17</td>
        <td>0,064</td>
        <td>7</td>
        <td>0,037</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,0927</td>
    </tr>
    <tr>
        <td>RF02</td>
        <td>Consultar status da solicitação de aplicação para a vaga</td>
        <td>7</td>
        <td>6</td>
        <td>13</td>
        <td>0,049</td>
        <td>3</td>
        <td>0,015</td>
        <td>2</td>
        <td>0,012</td>
        <td>1,814</td>
    </tr>
    <tr>
        <td>RF03</td>
        <td>Consultar vagas disponíveis</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>6</td>
        <td>0,031</td>
        <td>5</td>
        <td>0,032</td>
        <td>1,079</td>
    </tr>
    <tr>
        <td>RF04</td>
        <td>Empresa pode analisar cada um que se candidatou para sua vaga e escolher quais manter</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>7</td>
        <td>0,037</td>
        <td>6</td>
        <td>0,038</td>
        <td>0,906</td>
    </tr>
    <tr>
        <td>RF05</td>
        <td>Usuário candidato pode editar seus dados de perfil, inclusive seu currículo</td>
        <td>7</td>
        <td>8</td>
        <td>15</td>
        <td>0,057</td>
        <td>6</td>
        <td>0,031</td>
        <td>6</td>
        <td>0,038</td>
        <td>0,826</td>
    </tr>
    <tr>
        <td>RF06</td>
        <td>Permitir vagas para universitários e estudantes do ensino médio</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>4</td>
        <td>0,021</td>
        <td>2</td>
        <td>0,012</td>
        <td>2,060</td>
    </tr>
    <tr>
        <td>RF07</td>
        <td>Empresa define informações claras sobre as vagas</td>
        <td>7</td>
        <td>7</td>
        <td>14</td>
        <td>0,053</td>
        <td>5</td>
        <td>0,026</td>
        <td>3</td>
        <td>0,019</td>
        <td>1,177</td>
    </tr>
    <tr>
        <td>RF08</td>
        <td>Fazer cadastro do usuário</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>6</td>
        <td>0,031</td>
        <td>4</td>
        <td>0,025</td>
        <td>1,214</td>
    </tr>
    <tr>
        <td>RF09</td>
        <td>Diferenciar perfil de usuário (Empresa/interessado)</td>
        <td>9</td>
        <td>8</td>
        <td>17</td>
        <td>0,064</td>
        <td>7</td>
        <td>0,037</td>
        <td>7</td>
        <td>0,045</td>
        <td>0,780</td>
    </tr>
    <tr>
        <td>RF10</td>
        <td>Empresa tem que colocar o valor da bolsa</td>
        <td>6</td>
        <td>7</td>
        <td>13</td>
        <td>0,049</td>
        <td>4</td>
        <td>0,021</td>
        <td>3</td>
        <td>0,019</td>
        <td>1,225</td>
    </tr>
    <tr>
        <td>RF11</td>
        <td>A empresa pode editar seus dados de perfil</td>
        <td>7</td>
        <td>7</td>
        <td>14</td>
        <td>0,053</td>
        <td>6</td>
        <td>0,031</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,841</td>
    </tr>
    <tr>
        <td>RF12</td>
        <td>Poder disponibilizar seu currículo para consulta das empresas</td>
        <td>7</td>
        <td>9</td>
        <td>16</td>
        <td>0,061</td>
        <td>7</td>
        <td>0,037</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,884</td>
    </tr>
    <tr>
        <td>RF13</td>
        <td>Empresa pode acessar o perfil dos interessados em suas vagas para análise</td>
        <td>8</td>
        <td>9</td>
        <td>17</td>
        <td>0,064</td>
        <td>7</td>
        <td>0,037</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,927</td>
    </tr>
    <tr>
        <td>RF14</td>
        <td>Diferenciar as vagas entre o ensino médio e superior</td>
        <td>6</td>
        <td>7</td>
        <td>13</td>
        <td>0,049</td>
        <td>4</td>
        <td>0,021</td>
        <td>3</td>
        <td>0,019</td>
        <td>1,225</td>
    </tr>
    <tr>
        <td>RF15</td>
        <td>Usuários podem acessar perfil das empresas</td>
        <td>8</td>
        <td>9</td>
        <td>17</td>
        <td>0,064</td>
        <td>7</td>
        <td>0,037</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,927</td>
    </tr>
    <tr>
        <td>RF16</td>
        <td>Buscar vagas baseadas numa localização específica</td>
        <td>7</td>
        <td>6</td>
        <td>13</td>
        <td>0,049</td>
        <td>5</td>
        <td>0,026</td>
        <td>4</td>
        <td>0,025</td>
        <td>0,960</td>
    </tr>
    <tr>
        <td>RF17</td>
        <td>Candidato pode filtrar as vagas pelo valor da bolsa</td>
        <td>7</td>
        <td>5</td>
        <td>12</td>
        <td>0,045</td>
        <td>5</td>
        <td>0,026</td>
        <td>4</td>
        <td>0,025</td>
        <td>0,882</td>
    </tr>
    <tr>
        <td>RF18</td>
        <td>Candidato pode filtrar pela área de interesse</td>
        <td>8</td>
        <td>7</td>
        <td>15</td>
        <td>0,057</td>
        <td>5</td>
        <td>0,026</td>
        <td>4</td>
        <td>0,025</td>
        <td>1,117</td>
    </tr>
    <tr>
        <td>RF19</td>
        <td>Filtrar as vagas de estágio por curso</td>
        <td>7</td>
        <td>7</td>
        <td>14</td>
        <td>0,053</td>
        <td>5</td>
        <td>0,025</td>
        <td>4</td>
        <td>0,025</td>
        <td>1,060</td>
    </tr>
    <tr>
        <td>RF20</td>
        <td>Empresa pode filtrar os interessados em sua vaga por dados dos candidatos (tempo de experiência, escolaridade, ...)</td>
        <td>8</td>
        <td>7</td>
        <td>13</td>
        <td>0,049</td>
        <td>6</td>
        <td>0,031</td>
        <td>4</td>
        <td>0,025</td>
        <td>0,875</td>
    </tr>
    <tr>
        <td>RF21</td>
        <td>Candidato pode filtrar vagas por nome da empresa</td>
        <td>6</td>
        <td>7</td>
        <td>13</td>
        <td>0,049</td>
        <td>5</td>
        <td>0,026</td>
        <td>4</td>
        <td>0,025</td>
        <td>0,960</td>
    </tr>
    <tr>
        <td>RF22</td>
        <td>Filtrar as vagas de estágio por nível de escolaridade</td>
        <td>6</td>
        <td>6</td>
        <td>12</td>
        <td>0,045</td>
        <td>5</td>
        <td>0,026</td>
        <td>4</td>
        <td>0,025</td>
        <td>0,882</td>
    </tr>
    <tr>
        <td>RF23</td>
        <td>Candidato pode filtrar por estágio remoto ou presencial</td>
        <td>8</td>
        <td>6</td>
        <td>14</td>
        <td>0,053</td>
        <td>5</td>
        <td>0,026</td>
        <td>4</td>
        <td>0,025</td>
        <td>1,039</td>
    </tr>
    <tr>
        <td>RF24</td>
        <td>Vagas detalhadas por interesse</td>
        <td>8</td>
        <td>7</td>
        <td>15</td>
        <td>0,057</td>
        <td>4</td>
        <td>0,021</td>
        <td>4</td>
        <td>0,025</td>
        <td>1,239</td>
    </tr>
    <tr>
        <td>RF25</td>
        <td>Usuários candidatos podem detalhar suas áreas de interesse</td>
        <td>6</td>
        <td>5</td>
        <td>11</td>
        <td>0,041</td>
        <td>5</td>
        <td>0,026</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,706</td>
    </tr>
    <tr>
        <td>RF26</td>
        <td>Realizar login</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>6</td>
        <td>0,031</td>
        <td>7</td>
        <td>0,045</td>
        <td>0,894</td>
    </tr>
    <tr>
        <td>RF27</td>
        <td>Recuperar suas informações de login</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>7</td>
        <td>0,037</td>
        <td>9</td>
        <td>0,058</td>
        <td>0,715</td>
    </tr>
    <tr>
        <td>RF28</td>
        <td>Receber uma notificação caso o status ou descrição da vaga seja alterado</td>
        <td>9</td>
        <td>7</td>
        <td>16</td>
        <td>0,061</td>
        <td>6</td>
        <td>0,031</td>
        <td>5</td>
        <td>0,032</td>
        <td>0,968</td>
    </tr>
    <tr>
        <td>RF30</td>
        <td>Conseguir cadastrar vagas de estágio</td>
        <td>9</td>
        <td>9</td>
        <td>18</td>
        <td>0,068</td>
        <td>5</td>
        <td>0,026</td>
        <td>3</td>
        <td>0,019</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>TOTAL</td>
        <td>262</td>
        <td>262</td>
        <td>524</td>
        <td>1</td>
        <td>188</td>
        <td>1</td>
        <td>155</td>
        <td>1</td>
        <td>1,317</td>
    </tr>
</table>

<figcaption>Tabela 1 - Valor, Custo e Risco</figcaption>

# Bibliografia

>WIEGERS, Karl; BEATTY, Joy. "Software Requirements". Microsoft Press, 2013.
 
# Versionamento

Versão | Data | Modificação | Autor(es) |
|--|--|--|--|
|1.0| 01/02/2022 | Criação da Documentação | Nathan |
|1.1| 03/02/2022 | Revisões ortográficas | Álvaro |