import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [orderTotal, setOrderTotal] = useState(50 + 100 + 100);

  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState([]);
  const params = useParams();

  console.log("params: ", params.productName);

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

  const getEmployeeById = employees.find((item) => item.id === 4);
  const getEmployeeByIndex = employees[9];
  console.log("filter employees:", employees);
  console.log("find employee", getEmployeeById);

  return (
    <main>
      <h1>Product</h1>
      <h2>this is my product detail page</h2>
      <p>
        you are viewing product <strong>{params.productName}</strong>
      </p>
    </main>
  );
}

export default Product;
