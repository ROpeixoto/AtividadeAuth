curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "OutraPessoa",
    "password": "Senha123",
    "email": "outro@user.com"
    }'