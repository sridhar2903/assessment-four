import React, { useState, createContext } from "react";

export const Studentcontext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
    {
     userId: "1",
      Name: "Sridhar",
      Age: "22",
      Course: "MERN",
      Batch: "Oct",
    },

    {
     userId: "2",
      Name: "Madhav",
      Age: "20",
      Course: "MERN",
      Batch: "Nov",
    },

    {
     userId: "3",
      Name: "Aditya",
      Age: "24",
      Course: "MERN",
      Batch: "Oct",
    },

    {
     userId: "4",
      Name: "Harsha",
      Age: "20",
      Course: "MERN",
      Batch: "Nov",
    },

    {
     userId: "5",
      Name: "Suraj",
      Age: "21",
      Course: "MERN",
      Batch: "Oct",
    },

    {
     userId: "6",
      Name: "Badri",
      Age: "22",
      Course: "MERN",
      Batch: "Nov",
    },


  ]);

  return (
    <Studentcontext.Provider value={[students, setStudents]}>
      {props.children}
    </Studentcontext.Provider>
  );
};