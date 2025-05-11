curl --request POST \
  --url 'https://atividade-auth.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "Joao",
    "password": "Senha123",
    "email": "Joao@user.com"
    }'