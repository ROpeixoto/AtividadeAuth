source /workspaces/AtividadeAuth/.env
curl --request PATCH \
  --url 'https://atividade-auth.vercel.app/items/6820fa0cbb6e06b67e618d26' \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer $TOKEN_JOAO" \
  --data '{"quantity": "5 kg"}'