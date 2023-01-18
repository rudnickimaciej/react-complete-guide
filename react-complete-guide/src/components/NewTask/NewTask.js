import { useState, useEffect } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/http-hook";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: addTaskRequest } = useHttp();

  const addTask = (data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: data.taskText };

    props.onAddTask(createdTask);
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={addTaskRequest(
          {
            url: "https://yacht-ea1ac-default-rtdb.europe-west1.firebasedatabase.app//tasks.json",
          },
          addTask
        )}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
