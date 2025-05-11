curl --request POST \
  --url 'https://atividade-auth.vercel.app/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "password": "Senha123",
    "email": "Joao@user.com"
    }'