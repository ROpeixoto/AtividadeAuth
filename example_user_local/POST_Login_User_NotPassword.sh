curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "password": "Naoeminhasenha",
    "email": "user@user.com"
    }'