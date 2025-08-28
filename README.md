# bloco-de-notas-fastapi
Uma solução web de bloco de notas. Atividade para prática de RESTAPIs.

## Casos de Uso

# CSU01 - Visualização do histórico de notas
O usuário entra no site
É disponibilizada a visualização de todas as notas presentes no banco de dados

# CSU02 - Envio de nova nota.
O usuário solicita o formulário de preenchimento da nota
Abre-se um pop-up do formulário
O usuário preenche o título e depois a descrição da nota e clica em enviar.
O formulário se fecha e a página apresenta o histórico de notas.

# CSU03 - Exclusão de Nota
O usuário clica na nota, é aberto o pop-up com as informações;
O usuário clica no botão de excluir
A nota é excluída e o histórico é atualizado.
O usuário volta para a tela inicial com todas as notas.

## Arquitetura
* Backend : FastAPI
* Frontend : NextJS
* Banco de Dados : PostgresSQL

## classe Nota
titulo: String
descricao: String
data : Date
