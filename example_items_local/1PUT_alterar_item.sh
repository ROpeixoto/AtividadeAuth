source /workspaces/AtividadeAuth/.env
curl --request PUT \
  --url "https://atividade-auth.vercel.app/items/$ID_ITEM" \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer $TOKEN_JOAO" \
  --data '{
    "name": "Feijao fradinho",
    "quantity": "2 unidades",
    "prioridade": "baixa"
  }'