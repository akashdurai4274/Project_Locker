// src/pages/EmployeeList.js
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        console.log("Fetching employees with token:", token);

        const res = await axios.get("/api/employees/", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });

        console.log("API response:", res.data);

        if (Array.isArray(res.data)) {
          setEmployees(res.data);
        } else {
          console.error("API response is not an array:", res.data);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [token]);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in Authorization header
        },
      });
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Employee List</h1>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Position</th>
            <th className="p-2 border-b">Date of Joining</th>
            <th className="p-2 border-b">Salary</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="p-2 border-b">{employee.name}</td>
              <td className="p-2 border-b">{employee.email}</td>
              <td className="p-2 border-b">{employee.position}</td>
              <td className="p-2 border-b">
                {new Date(employee.dateOfJoining).toLocaleDateString()}
              </td>
              <td className="p-2 border-b">{employee.salary}</td>
              <td className="p-2 border-b">
                <button
                  onClick={() => deleteEmployee(employee._id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
