let backendURL = "localhost:3000/";

export default async function Get(url = "") {
  var Url = baseURL + url;
  const response = await fetch(Url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export default async function Post(url = "", body) {
  var Url = baseURL + url;
  const response = await fetch(Url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });
  return response.json();
}