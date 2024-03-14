// Add your code here
function submitData(nameValue, emailValue) {
  const response = fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${nameValue}`,
      email: `${emailValue}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML = `${data.id}`;
    })
    .catch((error) => (document.body.innerHTML = `Error: ${error}`));
  return response;
}

submitData("Steve", "Steve@example.com");
