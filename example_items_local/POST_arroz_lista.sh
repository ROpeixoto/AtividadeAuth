curl --request POST \
  --url 'http://localhost:3000/items' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBiMzA0MTI5MTY3MjExN2NiZWZmMiIsImlhdCI6MTc0Njk3MzYzMCwiZXhwIjoxNzQ2OTc3MjMwfQ.ZrMwZ4JdOdFnTahf1ONfMOJZcSEh5Mk4uNDL4XMpkJc' \
  --data '{
    "name": "Feijao",
    "quantity": "3 KG"
  }'