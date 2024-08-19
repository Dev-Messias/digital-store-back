# Api Digital Store

<img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5830595/og_image/optimized/1-331d350d67cb0fbf52807f12b1f7efa4.png" alt="Nodejs">

> Este repositório contém uma API desenvolvida em Node.js, utilizando TypeScript, Prisma, Express e PostgreSQL. A API foi projetada para o projeto digital-store do curso geração-tech.

 ## Tecnologias Utilizadas :

 <div style="display: inline_block" >
    <img align="center" alt="" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
    <img align="center" alt="" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
    <img  align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
    <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    <img align="center" alt="Nodejs" height="50" width="60"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
    <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
</div>

## Funcionalidades :
<ul>
  <li>Cadastro de usuário.</li>
  <li>Login e autenticação com email e senha do usuário</li>
  <li>JWT  para adicionar segurança e limitar o acesso nas rotas de API</li>
  <li>Cadastro, atualização e listagem de produtos</li>
</ul>

## Como executar o projeto

1. Clone do repositório :

```

$ git clone https://github.com/Dev-Messias/digital-store-back

```
> Acesse a página utilizando `cd digital-store-back`

2. Instale as dependências :

```

$ npm install

```

3. Configure o Banco de Dados :<br><br>
  • Crie um banco de dados PostgreSQL<br>
  • Configure as variáveis de ambiente no arquivo `.env` com as informações do banco de dados:


```

$ DATABASE_URL="postgresql://postgres:senha@localhost:5432/nome_do_banco?schema=public"

# Secret JWT => para gerar o token
JWT_SECRET=Sua_jwt_secret

```
4. Execute as Migrações :

```

$ npx prisma migrate dev --name nome-da-migration

```
5. Inicie o Servidor :

```

$ npm run dev

```

## Endpoints Principais

- Usuário:
    - `POST /users` : Cria um novo usuário.
    - `POST /session` : Login usuário.
    - `GET  /me` : Detalhes do usuário.
    - `PUT  /users` : Atualiza os dados dos usuário.
    - `DELETE /user` : Detela usuário.
      
- Categoria:
    - `POST /category` : Adiciona categoria.
    - `GET /category` : Lista todas as categorias.
    - `PUT /category` : Atualiza categorias.

- Produtos:
    - `POST /product` : Adiciona um novo produto.
    - `GET /category/product` : Lista todos os produtos por categoria.
    - `PUT /product` : Atualizar dados do produto.
    - `GET /product-detail` : Detalhes de um produto.
    - `DELETE /product-delete` : Remove o produto.
    - `POST /product-img` : Adiciona imagem do produto.


 



