import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const HOST = "http://127.0.0.1:3000/api";

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function handlerChange(event) {
    const clave = event.target.name;
    const value = event.target.value;
    setMsg("");
    setUser({ ...user, [clave]: value });
  }

  async function postUser(event) {
    event.preventDefault();

    if (user.name.trim() === "") {
      setMsg("Completar el nombre de usuario");
      return;
    }

    if (user.name.trim().length < 3) {
      setMsg("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (user.email.trim() === "") {
      setMsg("Completar el email");
      return;
    }

    if (user.password.trim() === "") {
      setMsg("Completar la contraseña");
      return;
    }

    if (user.password.trim().length < 3) {
      setMsg("La contraseña debe tener al menos 3 caracteres");
      return;
    }

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(`${HOST}/users`, options);
      const data = await response.json();

      console.log(data);

      if (data.msg === "Usuario creado correctamente") {
        navigate("/login");
      } else {
        setMsg(data.msg || "Error al crear el usuario");
      }
    } catch (error) {
      alert("Tenemos un error al registrar el usuario");
    }
  }

  return (
  <>
    <header>
      <h1>Crear Usuario</h1>
    </header>
    <main>
      <div className="form-container">
        <hr />
        <p style={{ color: "red" }}>{msg}</p>
        <form onSubmit={postUser}>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            value={user.name}
            onChange={handlerChange}
            type="text"
            minLength={3}
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handlerChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            value={user.password}
            onChange={handlerChange}
            type="password"
          />

          <button type="submit">Registrar</button>
        </form>
      </div>
    </main>
  </>
);
};

export default UserCreate;
