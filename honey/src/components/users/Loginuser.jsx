import React, { useState } from "react";
import { toast } from "react-toastify";

const Loginuser = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      toast.error("Email və ya şifrə yalnışdır");
      return;
    }

    localStorage.setItem("login", "true");
    toast.success("Uğurla daxil oldunuz");
    setEmail("");
    setPassword("");

    if (onLogin) onLogin(true);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifrə"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Daxil ol</button>
    </form>
  );
};

export default Loginuser;
