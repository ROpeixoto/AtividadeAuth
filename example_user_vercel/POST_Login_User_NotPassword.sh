curl --request POST \
  --url 'https://atividade-auth.vercel.app/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "RodrigoPeixoto",
    "password": "Naoeminhasenha",
    "email": "user@user.com"
    }'