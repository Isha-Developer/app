"use client";
import { useState } from "react";

const Explore = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const response = await fetch("/api/showStudent", {
      method: "GET",
    });
    const student = await response.json();
    setStudents(student);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-12">
        <h1 className="p-10 text-2xl font-bold">Student</h1>
        <ul>
          {students.map((student: { name: string }, key) => (
            <li key={key} className="bg-indigo-400 m-2 px-10 py-4 rounded">
              {student.name}
            </li>
          ))}
        </ul>
        <button onClick={getStudents}>Show Students</button>
      </div>
    </>
  );
};

export default Explore;
