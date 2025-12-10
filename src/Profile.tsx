import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Profile({ token }: { token: string }) {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");

  const handleLogout = async () => {
  await supabase.auth.signOut();
  localStorage.removeItem("token");
  window.location.reload();
  };


  console.log("TOKEN:", token);
console.log("HEADER:", JSON.parse(atob(token.split('.')[0])));
console.log("PAYLOAD:", JSON.parse(atob(token.split('.')[1])));

  useEffect(() => {
    fetch("https://absensi-kpu-kota-batu-be.onrender.com/api/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then(setProfile)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Profile (Backend)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
}
