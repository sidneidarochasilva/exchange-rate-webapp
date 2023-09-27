## EXCHANGE-RATE-WEBAPP - Aplicação Angular

Este webapp simples permite que os usuários verifiquem a taxa de câmbio do real brasileiro (BRL) em relação a outras moedas. A aplicação foi desenvolvida usando Angular 15.

# Funcionalidades
O usuário pode digitar um código de moeda (por exemplo, USD, EUR, GBP, JPY, CAD).
A aplicação exibe a taxa de câmbio atual para a moeda especificada.
Os usuários têm a opção de verificar a taxa de câmbio dos últimos 30 dias.

# Configuração

npm install
Execute o aplicativo:
ng serve
Acesse o aplicativo:

Abra seu navegador e acesse http://localhost:4200/.

# Requisitos
Node.js e npm devem estar instalados na sua máquina.

Angular CLI deve estar instalado globalmente. Você pode instalar o Angular CLI com o seguinte comando:

bash
Copy code
npm install -g @angular/cli


# Tecnologias Utilizadas
Angular 15
Material Angular


# Estrutura do Projeto
src/app/components: Contém os componentes globais da aplicação.
src/app/modules: Contém as features do sistema.
src/app/services: Contém os serviços responsáveis por fazer as chamadas à API.
src/assets: Contém arquivos estáticos como imagens.
src/shared: Contém arquivos para uso em toda aplicação exemplo pipes.