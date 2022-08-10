import { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [list, addToList] = useState([])

  const handleChange = event => {
    setTask(event.target.value);
  };

  const taskAdd = (task) =>{
    let allTasks = [...list]
    allTasks.push(task)
    addToList(allTasks)
    console.log(allTasks)

  }

  return (
    <div>
      <input type="text" id="newTask" name="newTask" onChange={handleChange} value={task}/>

      <h2>Task: {task}</h2>
      <button onClick={()=> taskAdd(task)}>Save item</button>
    </div>
  );
};

export default App;

// default State, empty list?
// box for accepting text for to do list?
// each add pushes a new item to the state list? (doing the copy cos you can't mutate it directly)
// then each item can be refered to by the index to be ticked off or deleted?

// conditional rendering? if done button add strikethrough, if delete button display: none?

// how do you make it so it doesn't add everything? How can you collect the value on click? 

// sounds easy when you block it out like that