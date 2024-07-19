const Employee = require('../models/Employee');

const addEmployee = async (req, res) => {
    const { name, email, position, dateOfJoining, salary } = req.body;

    const employeeExists = await Employee.findOne({ email });

    if (employeeExists) {
        return res.status(400).json({ message: 'Employee already exists' });
    }

    const employee = await Employee.create({
        name,
        email,
        position,
        dateOfJoining,
        salary,
    });

    res.status(201).json(employee);
};

const getEmployees = async (req, res) => {
    const employees = await Employee.find({});
    res.json(employees);
};

const deleteEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if (employee) {
        await employee.remove();
        res.json({ message: 'Employee removed' });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
};

module.exports = { addEmployee, getEmployees, deleteEmployee };
