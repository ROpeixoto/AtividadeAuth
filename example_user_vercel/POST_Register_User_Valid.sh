curl --request POST \
  --url 'https://atividade-auth.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "RodrigoPeixot",
    "password": "Senha133",
    "email": "user@user.com"
    }'