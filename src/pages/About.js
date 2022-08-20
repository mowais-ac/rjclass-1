import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function About() {
  const [orderTotal, setOrderTotal] = useState(50 + 100 + 100);

  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState([]);

  const changeTabHandler = (index, name) => {
    setName(name);
    setActiveTab(index);
  };

  const fetchDataHandler = () => {
    console.log("function triggered");
    // alert(1212);
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        setEmployees(response.data.data);
        console.log("data: ", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDataHandler();
    setTimeout(() => {
      setName("Value changed");
      setActiveTab(3);
    }, 5000);
  }, []);

  const testUser = {
    firstname: "Hassan",
    friends: ["Test friend 1", "Test friend 2", "Test friend 3"],
    lastname: "Abdullh",
    fullname: "Hassan Abdullah",
    age: "30",
    study_in: "MBA",
    total_no_of_friends: "2500",
    father_name: "Abdullah",
  };
  const testUsers = [
    {
      firstname: "Hassan",
      lastname: "Abdullh",
      fullname: "Hassan Abdullah",
      age: "30",
      study_in: "MBA",
      total_no_of_friends: "2500",
      father_name: "Abdullah",
    },
    {
      firstname: "Owais",
      lastname: "Owais last",
      fullname: "Owais last",
      age: "20",
      study_in: "Matriculation",
      total_no_of_friends: "2500",
      father_name: "Abdullah",
    },
    {
      firstname: "Test user 3",
      lastname: "This is last name",
      fullname: "TEST full name",
      age: "15",
      study_in: "8",
      total_no_of_friends: "2500",
      father_name: "Abdullah",
    },
    {
      firstname: "Hassan",
      lastname: "Abdullh",
      fullname: "Hassan Abdullah",
      age: "30",
      study_in: "MBA",
      total_no_of_friends: "2500",
      father_name: "Abdullah",
    },
    {
      firstname: "Owais",
      lastname: "Owais last",
      fullname: "Owais last",
      age: "30",
      study_in: "MBA",
      total_no_of_friends: "2500",
      father_name: "Abdullah",
    },
    {
      firstname: "Owais",
      lastname: "Owais last",
      fullname: "Owais last",
      age: "30",
      study_in: "MBA",
      total_no_of_friends: "2500",
      father_name: "Abdullah",
    },
  ];

  const getEmployeeById = employees.find((item) => item.id === 4);
  const getEmployeeByIndex = employees[9];
  console.log("filter employees:", employees);
  console.log("find employee", getEmployeeById);

  return (
    <main>
      <h1>About</h1>
      <Link to={"/"}>Visit home</Link>
      {/* {testUsers.map((user, index) => {
        return (
          <div key={index}>
            <h2>{index}</h2>
            <h4>
              {user.firstname} {user.lastname}
            </h4>
            <p>Age: {user.age}</p>
            <p>Study in: {user.study_in}</p>
            <hr />
          </div>
        );
      })} */}
      {/* {employees
        .filter(
          (item) => item.employee_salary <= 200000 && item.employee_age < 30
        )
        .map((emp, i) => {
          const isValidSalary = emp.employee_salary > 100000;
          return (
            <div key={i}>
              <div>Name: {emp.employee_name}</div>
              <div>Age: {emp.employee_age}</div>
              <div>Salary: {emp.employee_salary}</div>
              {isValidSalary ? (
                <span className={"success"}>Salary is Valid</span>
              ) : (
                <span className={"invalid"}>Salary is not valid</span>
              )}
              <hr />
            </div>
          );
        })}
      <h3>Find a record id</h3>
      {getEmployeeById && getEmployeeById.employee_name}
      <hr />
      <h3>Find a record index</h3>
      Name: {getEmployeeByIndex && getEmployeeByIndex.employee_name}
      <br />
      Age: {getEmployeeByIndex && getEmployeeByIndex.employee_age}
      Salary: {getEmployeeByIndex && getEmployeeByIndex.employee_salary}
      <h1>About {name}</h1>
      <button onClick={fetchDataHandler}>Fetch Data</button>
      <div className={"tablist"}>
        <ul>
          <li>
            <button onClick={() => changeTabHandler(1, "Owais")}>Tab 1</button>
          </li>
          <li>
            <button onClick={() => changeTabHandler(2, "Sajjad")}>Tab 2</button>
          </li>
          <li>
            <button onClick={() => changeTabHandler(3, "Jawwad")}>Tab 3</button>
          </li>
          <li>
            <button onClick={() => changeTabHandler(4, "testName")}>
              Tab 4
            </button>
          </li>
        </ul>
      </div>
      <div className={"tabcontent"}>
        {activeTab === 1 ? (
          <h4>Tab 1</h4>
        ) : activeTab === 2 ? (
          <h4>Tab 2</h4>
        ) : activeTab === 3 ? (
          <div className={"tab tab3"}>
            <h4>Tab 3</h4>
          </div>
        ) : activeTab === 4 ? (
          <div className={"tab tab4"}>
            <h4>Tab 4</h4>
          </div>
        ) : (
          <h3>Tab 1 is not selected</h3>
        )}
      </div> */}
    </main>
  );
}

export default About;
