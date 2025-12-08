export async function getUsers() {
  const res = await fetch("https://localhost:44378/api/ping/all", {
    method: "GET",
    credentials: "include",     // penting kalau pakai AllowCredentials()
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}


interface User {
  name: string;
}

export async function createUser(payload: User) {
  const res = await fetch("https://localhost:44378/api/ping/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Failed to create user");
  }

  return res.json();
}
