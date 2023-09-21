const apiUrl = 'http://localhost:4000/graphql'; // Replace with your GraphQL server's URL
const query = `
  query {
    getUser(id: "1") {
      id
      name
      email
    }
  }
`;

fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query}),
})
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);
