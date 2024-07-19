// src/pages/Dashboard.js
import  { useEffect, useState } from "react";
import axios from "axios";

const Dashboards = () => {
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await axios.get("/api/employees");
      setEmployeeCount(data.length);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl">Total Employees</h2>
        <p className="text-4xl">{employeeCount}</p>
      </div>
    </div>
  );
};

export default Dashboards;
