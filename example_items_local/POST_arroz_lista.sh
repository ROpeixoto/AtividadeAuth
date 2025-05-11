source /workspaces/AtividadeAuth/.env
curl --request POST \
  --url 'https://atividade-auth.vercel.app/items' \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer $TOKEN_JOAO" \
  --data '{
    "name": "Arroz",
    "quantity": "3 KG"
  }'