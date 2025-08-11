import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email və şifrəni daxil edin");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.find((user) => user.email === email)) {
      toast.error("Bu email artıq qeydiyyatdan keçib");
      return;
    }

    existingUsers.push({ email, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));
    toast.success("Uğurla qeydiyyatdan keçdiniz");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleRegister}>
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
      <button type="submit">Qeydiyyatdan keç</button>
    </form>
  );
};

export default Register;
