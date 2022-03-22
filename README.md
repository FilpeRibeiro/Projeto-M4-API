# Projeto-M4-API
<div align="center">
  <a href="https://github.com/FilpeRibeiro/Projeto-M4-API">
    <img src="./src/image/LOGO.jpg" alt="Logo loja Shark Informatica" width="100" height="100">
  </a>
  
  <h1 align="center">Loja de Informática API</h1>
  
  <p align="center">
   Projeto educacional do curso de Web Dev Full Stack da Resilia Educação referente ao Módulo 04, utilizando o Node.js com framework Express.
   <br />
    <a href=""><strong>Explore os arquivos do projeto. »</strong></a>
    <br />
</div>
<br />
<br />
  <summary>Conteúdo sobre a documentação.</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
    </li>
    <li>
      <a href="#como-instalar-e-iniciar">Como instalar e iniciar o projeto</a>
    </li>
  </ol>
  
  ## Sobre o Projeto
  
  O objeto proposto como projeto final do módulo 4, é criar uma API Rest de uma Loja de Informática. Criei a entidade 'Funcionarios' e com ela você poderá realizar as operações básicas CRUD, que são elas:
  <br />
  * Ler todos os funcionarios, e suas informaçoes do banco de dados, ou, filtrar um funcionario por ID ou por nome.
  * Adicionar novos funcionarios no banco de dados.
  * Deletar um funcionario pelo número do ID.
  * Atualizar um ou vários dados de um funcionario.

  #### Tecnologias, pacotes e frameworks utilizados ⚙️
 
  * [JavaScript](https://www.javascript.com/)
  * [Node.js](https://nodejs.org/en/) v16.14.0
  * [NPM](https://www.npmjs.com/) v8.3.1
  * [Express](https://www.npmjs.com/package/express) v4.17.3
  * [Nodemon](https://www.npmjs.com/package/nodemon) v2.0.15
  * [SQLite](https://www.sqlite.org/index.html) v5.0.2


 ## Como instalar e iniciar 🏁
  
 Este é um exemplo sobre como instalar e configurar seu projeto localmente. Para fazer uma cópia local e iniciar, siga estas etapas de exemplo simples.

#### Pré-Requisitos

Lembre-se do que você irá precisará ter instalado em sua máquina para executar o prejeto. 👇
1. Instale NPM
   ```sh
   npm install
   ```
2. Instale Express
   ```sh
   npm install express
   ```
3. Instale Nodemon
   ```sh
   npm install nodemon
   ```
3. Instale SQLite
   ```sh
   npm install sqlite3
   ```
   
  #### Instalação
  
  Abra o terminal/Powershell e rode os comandos abaixo:

Para clonar o repositório:
 ```sh
   git clone https://github.com/FilpeRibeiro/Projeto-M4-API.git
   ```
Acesse a pasta criada:
```sh
cd Projeto-M4-API
```
Para iniciar os projetos use o comando abaixo
```sh
npm start
```

#### Popular o banco de dados
Para o arquivo 'database.db' ser populado, executete o arquivo cria-inseri.js Para fazê-lo rodar, abra seu terminal e execute o comando:
```sh
npm run create
```
*OBS: Caso de algum erro ao rodar os comandos colocar na pasta packjson a linha :
<br/>
"type":"modules",

#### Rotas e seus resultados

Ao executar a entidade funcionarios, aparecerá os atributos adicionados à ela, que são: id, nome, email, cpf, cargo. Veja os resultados:

* Método GET para visualizar todos os funcionarios marcados. ( /funcionarios)

Schema da resposta. 
```sh
{
	"Funcionarios": [
		{
			"ID": 1,
			"NOME": "Filipe Ribeiro Martins",
			"EMAIL": "filipe-negreti@hotmail.com",
			"CPF": "123456789",
			"CARGO": "Suporte"
		},
  ]
  ```
  
  * Método GET para filtrar um dado por EMAIL ( /funcionario/email/{o email do funcionario})

Schema da resposta. 
```sh
{
	"funcionario": [
		{
			"ID": 5,
			"NOME": "Rafaela Souza",
			"EMAIL": "rafaela@uol.com.br",
			"CPF": "***********",
			"CARGO": "suporte"
		}
	],
	"erro": false
}
  ```
  * Método POST para adicionar um novo funcionario ( /funcionario)

Schema da resposta. 
```sh
{
  "Mensagem": (string),
  "Erro": (booleano)
 }
  ```
  * Método DELETE para apagar um funcionario por ID ( /funcionario/id/{o número de id})

Schema da resposta. 
```sh
{
  "Mensagem": (string),
  "Erro": (booleano)
  }
  ```
  * Método PUT para atualizar um funcionario por ID ( /funcionario/id/{o número de id})

Schema da resposta. 
```sh
{
	"mensagem": "Funcionario de id 1 atualizado com sucesso",
	"funcionario": {
		"nome": "Filipe Ribeiro Martins",
		"email": "filipe-negreti@hotmail.com",
		"cpf": "123456789",
		"cargo": "Suporte"
	},
	"erro": false
}

  



   
   
   
   
   
   
   
   
  
  