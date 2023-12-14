"Projeto Full Stack M6".

Descrição

Este projeto é um sistema de gerenciamento de contatos desenvolvido com Node.js e React. Ele permite que os usuários criem, editem e excluam contatos.

Instruções de instalação

Para instalar este projeto, siga estas etapas:

1.Clone o repositório com o comando git clone.

2.Acesse a pasta do back-end com o comando cd back.

3.Instale as dependências com o comando npm install.

4.Crie um arquivo .env com as seguintes variáveis de ambiente (use o env.example):

    PORT: A porta na qual o servidor back-end será executado.
    DB_HOST: O host do banco de dados.
    DB_PORT: A porta do banco de dados.
    DB_USERNAME: O nome de usuário do banco de dados.
    DB_PASSWORD: A senha do banco de dados.
    DB_DATABASE: O nome do banco de dados.

5. Rode a migrações com esse comando npm run typeorm migration:run -- -d src/data-source

6. Execute o servidor back-end com o comando npm run dev.

7. Acesse a pasta do front-end com o comando cd front.

8. Instale as dependências com o comando npm install.

9. Execute o front-end com o comando npm run dev.

Recursos:

Criação de usuarios
Edição de usuarios
Exclusão de usuarios

Criação de contatos
Edição de contatos
Exclusão de Contatos

Funcionalidades:

Link para Email, de cada contato
Link para WhatsZapp de cada contato

Agradecimentos:

A Kenzie Academy Brasil, pela oportunidade de aprender e desenvolver este projeto.
