import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData({ ...formData, [name]: value });
    //check box is checked
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        type="text"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        name="lastName"
        type="text"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        name="admin"
        type="checkbox"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
