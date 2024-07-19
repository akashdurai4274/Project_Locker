// src/pages/Profile.js
import  { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [ , setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchProfile = () => {
      axios.get("/api/employees/").then((res) => {
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
                console.log(res);
                console.log(res.data);
            }); 
    };
    fetchProfile();
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();
    const { data } = await axios.put("/api/profile", { name, email, password });
    setUser(data);
    setName(data.name);
    setEmail(data.email);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Profile</h1>
      <form
        onSubmit={updateProfile}
        className="p-4 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
