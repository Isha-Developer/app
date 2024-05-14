"use client";
import { useState, useEffect } from "react";

const Search = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [course, setcourse] = useState("");

  const submitForm = async () => {
    const response = fetch("/api/createStudent", {
      method: "POST",
      body: JSON.stringify({
        course: course,
        email: email,
        gender: gender,
        name: name,
      }),
    });
  };

  return (
    <form className="grid w-screen max-w-md mx-auto mt-12 gap-10">
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />

      <input
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="Enter email"
      />

      <select
        onChange={(e) => setgender(e.target.value)}
        name="gender"
        id="gender"
      >
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
      </select>

      <input
        onChange={(e) => setcourse(e.target.value)}
        type="text"
        placeholder="course"
      />

      <button onClick={submitForm}>Add Record</button>
    </form>
  );
};

export default Search;
