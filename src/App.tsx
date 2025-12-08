import { useEffect, useState } from "react";
import { getUsers, createUser } from "./api/userApi";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  const submitUser = async () => {
    await createUser({ name: "Tes TypeScript" });
    const updated = await getUsers();
    setUsers(updated);
  };

  return (
    <div>
      <h1>Test FE → BE → DB</h1>
      <button onClick={submitUser}>Tambah User</button>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default App;
