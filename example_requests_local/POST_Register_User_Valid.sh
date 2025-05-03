curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "RodrigoPeixoto",
    "password": "Senha123",
    "email": "user@user.com"
    }'