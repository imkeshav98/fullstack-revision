import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [register, setRegister] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        username: username,
        mobile: mobile,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error === false) {
          setRegister(true);
          setName("");
          setEmail("");
          setPassword("");
          setUsername("");
          setMobile("");
          setDescription("");
        }
      })
      .catch((err) => {
        setRegister(false);
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Password"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="number"
            name="mobile"
            placeholder="Enter Mobile No."
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Descrption"
            onChange={handlechange}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
      {register ? <div>Register Sucessful go to login</div> : <div></div>}
    </div>
  );
};
