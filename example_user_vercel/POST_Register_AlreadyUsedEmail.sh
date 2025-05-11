curl --request POST \
  --url 'https://atividade-auth.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser",
    "password": "securepassword123",
    "email": "user@user.com"
    }'