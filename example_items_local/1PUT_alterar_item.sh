source /workspaces/AtividadeAuth/.env
curl --request PUT \
  --url 'http://localhost:3000/items/6820b3fb1291672117cbeffe' \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer $TOKEN_JOAO" \
  --data '{
    "name": "Feijao fradinho",
    "quantity": "2 unidades",
    "prioridade": "baixa"
  }'