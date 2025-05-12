# AtividadeAuth: API de Lista de Compras

Este projeto consiste em uma API RESTful desenvolvida em Node.js com Express.js para gerenciar uma lista de compras. A aplicação utiliza autenticação baseada em JSON Web Tokens (JWT) para proteger as rotas e MongoDB como banco de dados, com Mongoose como ODM. O ambiente de desenvolvimento é facilitado pelo uso de Docker e Docker Compose.

## Funcionalidades Principais

*   **Gerenciamento de Usuários:**
    *   Cadastro de novos usuários.
    *   Login de usuários com geração de token JWT.
*   **CRUD de Itens da Lista de Compras (Protegido por Autenticação):**
    *   `POST /items`: Adicionar um novo item à lista de compras do usuário autenticado.
    *   `GET /items`: Listar todos os itens da lista de compras do usuário autenticado.
    *   `GET /items/:id`: Obter detalhes de um item específico da lista do usuário autenticado.
    *   `PUT /items/:id`: Atualizar completamente um item específico da lista do usuário autenticado.
    *   `PATCH /items/:id`: Atualizar parcialmente um item específico da lista do usuário autenticado.
    *   `DELETE /items/:id`: Remover um item específico da lista do usuário autenticado.

## Tecnologias Utilizadas

*   **Backend:** Node.js, Express.js
*   **Banco de Dados:** MongoDB (com Mongoose como ODM)
*   **Autenticação:** JSON Web Tokens (JWT), bcrypt (para hashing de senhas)
*   **Gerenciamento de Ambiente:** Docker, Docker Compose, dotenv
*   **Desenvolvimento:** Nodemon


[Assista ao vídeo de demonstração 1](./VideoMongoDB.mp4)

[Assista ao vídeo de demonstração 2](./VideoMongoDB-requests.mp4)