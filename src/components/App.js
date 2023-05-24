import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
let [tasks,setTasks] = useState(TASKS)
let[category,setCategory]= useState("ALL")

function handleAddTask(newTask){
  setTasks([...tasks, newTask])
}

function handleDeleteTasks(deletedTaskText){
  setTasks(tasks.filter((task) => task.text !== deletedTaskText))
}

let visibleTasks = tasks.filter(
  (task) => category === "ALL" || task.category === category
)
  
return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories={CATEGORIES}
      selectedCategory={category}
      onSelectedCategory={setCategory}
      />
      <div ClassName= "tasks">
        <h5>Tasks</h5>
        <NewTaskForm 
        categories={CATEGORIES.filter((cat) => cat !=="ALL")}
        onTaskFormSubmit={{handleAddTask}}
        />
        <TaskList onDeleteTask={handleDeleteTasks} tasks={visibleTasks}/>
      
      </div>
  </div>
  );
}

export default App;
