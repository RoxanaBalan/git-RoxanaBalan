import Student from "./4.student";
import studentsListData from "../data/students-list-data";
import Button from "./3.button";
import React, { useState } from "react";

function ListStudents() {
  const [isBlack, setIsBlack] = useState(true);
  const toggleColor = () => {
    if (isBlack === true) {
      setIsBlack(false);
    } else {
      setIsBlack(true);
    }
  };

  const [showStudentList, setStudentList] = useState(false);
  const renderStudents = () => {
    showStudentList ? setStudentList(false) : setStudentList(true);
  };

  let renderedStudentsList = [];
  if (showStudentList === true) {
    renderedStudentsList = studentsListData;
  } else {
    renderedStudentsList = [];
  }

  return (
    <div>
      <Button click={toggleColor} buttonTitle="Toggle color" />
      <Button
        click={renderStudents}
        style={showStudentList ? "orange" : "aqua"}
        buttonTitle={showStudentList ? "Hide students" : "Show students"}
      />

      {renderedStudentsList.map((dateStudent) => (
        <Student
          key={dateStudent.id}
          data={dateStudent}
          isBlack={isBlack}
          toggleColor={toggleColor}
        />
      ))}
    </div>
  );
}

export default ListStudents;
