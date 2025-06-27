import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../src/contexts/AuthContext";

const UserLogin = () => {
  const HOST = "http://127.0.0.1:3000/api";
  const [user, setUser] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  function handlerChange(event) {
    const clave = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [clave]: value });
  }

  async function postUser(event) {
    event.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      };

      const response = await fetch(`${HOST}/users/login`, options);
      const data = await response.json();
      console.log(data);

      if (data.token) {
        login({ email: user.email }, data.token);
        navigate("/usersabm");
      } else {
        setMsg(data.msg || "Error en login");
      }
    } catch (error) {
      alert("Tenemos un error al loguear el usuario");
    }
  }

 return (
  <>
    <header>
      <h1>Login</h1>
    </header>
    <main>
      <div className="form-container">
        <hr />
        <p>{msg}</p>
        <form onSubmit={postUser}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handlerChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handlerChange}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  </>
);
};

export default UserLogin;
