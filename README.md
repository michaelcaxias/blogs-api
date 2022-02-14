<img src="https://khalilstemmler.com/img/blog/sequelize/banner.png" alt="exemplo imagem" width="100px" align="right">

# Blogs API

Projeto feito de forma individual durante o curso da [Trybe](https://www.betrybe.com/) com o objetivo de criar um [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD) a partir da criação de uma API RESTful.

## ⭐ Habilidades

- Utilizar as habilidades de associação do MySQL.
- Criar uma API utilizando o Sequelize e NodeJs.
- Validar e criptografar tokens de autenticação com o [JWT](https://jwt.io/).
- Realizar validações com o [Joi](https://joi.dev/api/).

## 🔧 Funçoes

- Criar um usuário a partir de informações passadas pelo body da requisição.
- Após a criação do usuário, é gerado um JWT a partir do ID do usuário.
- Realizar validações dos dados passados pelo body da requisição.
- Logar na API a partir da rota `/login` com informações já existentes no Banco de Dados.
- Listar todos os usuários cadastrados na API com o método `GET`.
- Mostrar um usuário específico com o método `GET` e com querys passadas por parâmetros `/user/:id`.
- Criar uma categoria a partir de informações passadas pelo body da requisição.
- Listar todas as categorias cadastradas na API com o método `GET`.
- Criar um post a partir de informações passadas pelo body da requisição e com **chaves estrangeiras** da tabela de categorias.
- Listar todas as publicações, juntamente com o usuário que a publicou e a(s) categoria(s) a qual a publicação pertence, com o método `GET`.
```json
[
  {
    "id": 1,
    "title": "Título da publicação",
    "content": "Descrição da publicação",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Michael Caxias",
      "email": "7michaeel7@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Diversão"
      }
    ]
  }
]
```

## A fazer
- [ ] Listar publicação por ID.
- [ ] Atualizar publicação
- [ ] Deletar publicação
- [ ] Deletar usuário
- [ ] Buscar publicação por query


## 💻 Como iniciar

1. Faça o clone do projeto
2. Entre no Visual Studio Code
3. Instale as dependências
```shell
npm install
```
4. Inicie a aplicação
```shell
npm run debug
```


## Feito Com:
[![IDE](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![NODEJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
[![SEQUELIZE](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/master/)
[![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)


### Contato

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/michaelcaxias/)

<p align="center">Copyright © 2021 Michael Caxias</p>
