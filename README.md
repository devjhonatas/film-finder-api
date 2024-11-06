# film-finder-api

API de Recomendações de Filmes
Este projeto é uma API simples de recomendações de filmes, criada com Node.js e Express. Ela permite listar filmes, obter recomendações de filmes com base em um gênero específico, e avaliar filmes com notas de 1 a 5.

🚀 Funcionalidades
Listar todos os filmes disponíveis com título, gênero e avaliação.
Recomendar filmes: obtém uma recomendação aleatória baseada em um gênero específico.
Avaliar filmes: permite que os usuários avaliem filmes, atualizando a nota de avaliação.

📑 Endpoints
Listar Filmes: Retorna a lista completa de filmes.
GET /api/movies
Resposta: JSON com lista de filmes.
Recomendar um Filme por Gênero: Retorna um filme aleatório do gênero solicitado.
GET /api/recommend?genre=<GENERO>
Parâmetro: genre (string) - Gênero desejado (por exemplo, Sci-Fi ou Action).
Resposta: JSON com um filme recomendado do gênero especificado.
Avaliar um Filme: Atualiza a avaliação de um filme específico.
POST /api/movies/:id/rate

Parâmetros:
id (int) - ID do filme a ser avaliado.
Body: { "rating": <NOTA> } - Nota entre 1 e 5.
Resposta: Confirmação de avaliação e o filme atualizado.
🛠️ Configuração

Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Instale as dependências:
npm install

Inicie o servidor:
node src/index.js

O servidor rodará por padrão em http://localhost:3000.

📌 Exemplo de Uso:

Listar todos os filmes: GET http://localhost:3000/api/movies
Recomendar um filme de gênero "Sci-Fi": GET http://localhost:3000/api/recommend?genre=Sci-Fi
Avaliar o filme com ID 1: POST http://localhost:3000/api/movies/1/rate com body { "rating": 5 }
