## POST /Login

Recebe usuário e senha.
~~~json
{
	"email": "email@.gmail.com",
	"password": "123456"
}
~~~

- deve respeitar formato de email, e senha com de no minimo 6 caracteres.

- verifica se o login está correto, se sim retorna o jwt com o id do usuário e role, se não retorna um erro com a mensagem "usuário ou senha invalida".
- 

## user/register
~~~json 
{
	"name": "string",
	"email": "string",
	"password": "string",
}
~~~

- deve respeitar formato de email, e senha com de no minimo 6 caracteres.

- deve respeitar formato de email, e senha com de no minimo 6 caracteres.

- Verificar se o e-mail já existe, se sim não criar usuário.
- retorna token JWT (com id e role).

## GET /products 

retorna todos produtos.

## POST /products (precisa do token)
~~~json
{
 "name": "string",
 "price": 10,
 "urlImage": "string"
}
~~~

só quem pode registrar produto adm e vendedor, cliente não.

retorna uma mensagem "produto criado".

## PUT /products/:id

só quem pode atualizar produto adm e vendedor, cliente não.

~~~json
{
 "name": "string",
 "price": 10,
 "urlImage": "string"
}
~~~
retorna uma mensagem com produto "atualizado".

## DELETE /products/:id 

só quem pode atualizar produto adm e vendedor, cliente não.

ao deletar products sem retorno no body. 

## POST /user/sales

~~~json
	userId: 1,
	sellerId: 2,
	deliveryAddress: "string",
	deliveryNumber: "string",
	listProducts: [
		{ "id": 1, "quantity": 6 }, 
		{ "id": 2, "quantity": 5 }
	]
~~~

## GET /user/sales

deve ter o token, e retorna todas as vendas vendas do usuário autenticado.


## GET /user/sales/:id

deve ter o token, e retorna uma venda;

- Só é possível retorna a venda caso o usuário autenticado seja o client ou o vendedor dessa venda.

retorno esperado;

~~~json
	userId: 1,
	sellerId: 2,
	deliveryAddress: "string",
	deliveryNumber: "string",
	totalPrice: 15.50,
	saleDate: "20/10/2022",
	listProducts: [
		{ "id": 1, "quantity": 6 }, 
		{ "id": 2, "quantity": 5 }
	]
~~~

## PUT /user/sales/:id

deve ter o token, será possível alterar status de uma venda para "entregue", "pendente", "saiu para entrega"  e "preparando".

body:

~~~json
{ "status": "pendente" } 
~~~

retorna mensagem "alterada status com sucesso."
