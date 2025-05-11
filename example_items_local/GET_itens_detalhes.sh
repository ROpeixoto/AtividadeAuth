source /workspaces/AtividadeAuth/.env
curl --request GET \
  --url 'https://atividade-auth.vercel.app/items/6820fa0cbb6e06b67e618d26' \
  --header "Authorization: Bearer $TOKEN_JOAO"