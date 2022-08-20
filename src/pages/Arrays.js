function Arrays() {
  const userData = [
    {
      first_name: "Muhammad ",
      last_name: "Owais",
      age: "31",
      company: "ilmyst123123.com",
    },
    {
      first_name: "Muhammad ",
      last_name: "Owais",
      age: "31",
      company: "ilmysttesting.com",
    },
    {
      first_name: "Muhammad ",
      last_name: "Owais",
      age: "31",
      company: "ilmyst12312asdasdasd.com",
    },
  ];

  const activeUser = {
    first_name: "Muhammad ",
    last_name: "Owais",
    age: "31",
    company: "ilmyst12312asdasdasd.com",
  };

  // updating object
  activeUser["first_name"] = "This is updated name";
  console.log("activeUser::::", activeUser);

  // updating array
  console.log("01 userData:", userData);
  userData[1]["company"] = "updated websites value";

  console.log("02 userData", userData);

  return (
    <main>
      <h1>Arrays</h1>
    </main>
  );
}

export default Arrays;
