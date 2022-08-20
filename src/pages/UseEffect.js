import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UseEffect() {
  const loadData = (n, a, userInfo) => {
    console.log("name:---->", n);
    console.log("age:---->", a);

    console.log("userInfo:----->", userInfo);

    // alert(12313);
  };

  useEffect(() => {
    const name = "Owais";
    const age = 13;

    const data = {
      name: name,
      age: age,
    };

    loadData(name, age, data);
  }, []);

  return (
    <main>
      <h1>Test 2</h1>
      <h2>this is my test 2 page</h2>
    </main>
  );
}

export default UseEffect;
