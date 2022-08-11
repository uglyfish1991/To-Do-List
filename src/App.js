import { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [list, addToList] = useState([])

  const handleChange = event => {
    setTask(event.target.value);
  };

  const taskAdd = (task) => {
    let allTasks = [...list]
    allTasks.push(task)
    addToList(allTasks)
    console.log(allTasks)

  }

  return (
    <>

      <div className="wrapper">

        <div className="newTask">
          <div className="innerTask">
            <h2>Add New Task:</h2>
            <div className='inputwrapper'>
            <input type="text" id="newTask" name="newTask" placeholder="Add New Task" onChange={handleChange} value={task} />
            <button onClick={() => taskAdd(task)}>&nbsp;+&nbsp;</button>
            </div>
            <p>If I can I will add categories here for you to pick from</p>
          </div>
        </div>
        <div className='container'>
          <h1> Task List</h1>
          <hr></hr>
          <div className="taskList">
          {list.map((aTask, index) => {
        return (
            <Tasks key={index} aTask={aTask} list={list} addToList={addToList} />
        )
          })}
          </div>
        </div>
      </div>
    </>
  );
};

const Tasks = (props) => {

  const removeHandler=(index) =>{
    let allTasks = [...props.list]
    allTasks.splice(index,1)
    props.addToList(allTasks)
  }

  const [done,setDone]=useState(false)

  return (
    <div>
          <div className="taskCard">
            { done ? (
              <p className='doneItem'>{props.aTask}</p>
            ) : (
              <p>{props.aTask}</p>
            )
          }
            <button onClick={()=>setDone(!done)} className="done">&#x2714;</button>
            <button onClick={()=>removeHandler()} className="delete">X</button>
          </div>
    </div>
  )
}

export default App;

// default State, empty list?
// box for accepting text for to do list?
// each add pushes a new item to the state list? (doing the copy cos you can't mutate it directly)
// then each item can be refered to by the index to be ticked off or deleted?

// conditional rendering? if done button add strikethrough, if delete button display: none?

// how do you make it so it doesn't add everything? How can you collect the value on click? 

// sounds easy when you block it out like that