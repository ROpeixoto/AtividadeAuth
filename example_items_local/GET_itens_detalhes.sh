source /workspaces/AtividadeAuth/.env
curl --request GET \
  --url "https://atividade-auth.vercel.app/items/$ID_ITEM" \
  --header "Authorization: Bearer $TOKEN_JOAO"