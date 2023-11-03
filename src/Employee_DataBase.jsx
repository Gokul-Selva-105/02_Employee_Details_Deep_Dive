import React from "react";
import screen from './assets/screen.png'
import './index.css'
const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
  },
];


function EmployeeTable() {
  const displayEmployeeDetails = () => {
    console.table(employees);
  };

  const displayJuniorWebDevelopers = () => {
    const juniorWebDevelopers = employees.filter((employee) => employee.role === "Junior Web Developer");
    console.log("Junior Web Developers:");
    console.table(juniorWebDevelopers);
  };

  const displayTotalJuniorWebDevelopers = () => {
    const juniorWebDevelopersCount = employees.filter((employee) => employee.role === "Junior Web Developer").length;
    console.log(`Total Junior Web Developers: ${juniorWebDevelopersCount}`);
  };

  const displayEmployeesInSalaryRange = (minSalary, maxSalary) => {
    const employeesInSalaryRange = employees.filter(
      (employee) => employee.payout >= minSalary && employee.payout <= maxSalary
    );
    console.log("Employees in Salary Range:");
    employeesInSalaryRange.forEach((employee) => {
      console.log(`Name: ${employee.name}, Role: ${employee.role}`);
    });
  };

  const displaySeniorEmployee = () => {
    const seniorEmployee = employees.reduce((maxExperience, employee) =>
      maxExperience.experience > employee.experience ? maxExperience : employee
    );
    console.log("Senior Employee:");
    console.table([seniorEmployee]);
  };

  return (
    <>
    <div>
      <button onClick={displayEmployeeDetails}>Display Employee Details</button>
      <button onClick={displayJuniorWebDevelopers}>Display Junior Web Developers</button>
      <button onClick={displayTotalJuniorWebDevelopers}>Display Total Junior Web Developers</button>
      <button onClick={() => displayEmployeesInSalaryRange(25000, 35000)}>Display Employees in Salary Range</button>
      <button onClick={displaySeniorEmployee}>Display Senior Employee</button>
    </div>
    <div className="imgtag">
        <h1>ALL DATA WILL BE SHOWEN IN THE CONSOLE ONCE YOU CLICK THE BUTTON  VERIFY THE CONSOLE </h1>
        <img src={screen}/>
    </div>
    </>
  );
}

export default EmployeeTable;
