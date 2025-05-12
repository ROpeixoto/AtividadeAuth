source /workspaces/AtividadeAuth/.env
curl --request PATCH \
  --url "https://atividade-auth.vercel.app/items/$ID_ITEM" \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer $TOKEN_RODRIGO" \
  --data '{"quantity": "100 kg"}'