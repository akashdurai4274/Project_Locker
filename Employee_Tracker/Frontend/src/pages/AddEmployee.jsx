// src/pages/AddEmployee.js
import { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";

const AddEmployees = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [salary, setSalary] = useState("");

  const { token } = useContext(AuthContext); // Access token from AuthContext

  const addEmployee = async (e) => {
    e.preventDefault();

    try {
      axios.post(
          "/api/employees/",
          {
            name,
            email,
            position,
            dateOfJoining,
            salary,
          },
          {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
      // Show success toast
      toast.success("Employee added successfully!");

      // Clear input fields
      setName("");
      setEmail("");
      setPosition("");
      setDateOfJoining("");
      setSalary("");
    } catch (error) {
      console.log(name, email, position, dateOfJoining, salary);
      // Show error toast if something goes wrong
      toast.error("Failed to add employee. Please try again.");
      console.log(token);
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h1 className="mb-4 text-2xl font-bold">Add New Employee</h1>
      <form
        onSubmit={addEmployee}
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
          <label className="block mb-2">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date of Joining</label>
          <input
            type="date"
            value={dateOfJoining}
            onChange={(e) => setDateOfJoining(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployees;
