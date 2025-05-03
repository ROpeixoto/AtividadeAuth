curl --request POST \
  --url 'https://atividade-auth.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "Rodrigo",
    "password": "Senha123",
    "email": "user@user" 
    }'