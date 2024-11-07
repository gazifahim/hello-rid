import React, { useState } from 'react';

function App() {
  // State to store the list of tasks and the input for the new task
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== "") { // Check for non-empty input
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear input after adding
    }
  };

  // Function to handle deleting a task by index
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      
      {/* Input field and add button */}
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add</button>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

