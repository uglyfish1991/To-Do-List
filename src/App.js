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

  //if you delete from the top of the list, index is impacted. How can I make it so it hides item I just clicked, but doesn't impact index?

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
            <p>Input a task to the list using the text field above</p>
          </div>
        </div>
        <div className='container'>
          <h1> Task List</h1>
          <hr></hr>
          <div className="taskList">
          {list.map((aTask, index) => {
        return (
            <Tasks key={index} aTask={aTask} list={list} addToList={addToList} item={index}/>
        )
          })}
          </div>
        </div>
      </div>
    </>
  );
};

const Tasks = ( {aTask, list, addToList, item} ) => {
  console.log(item)

  // const removeHandler=(index) =>{
  //   let allTasks = [...list]
  //   allTasks.splice(index,1)
  //   addToList(allTasks)
  // }

  const [done,setDone]=useState(false)
  const [del, setDel] = useState(false)

  return (
    <div>
          <div className="taskCard" style={{display: del ? "none": "flex"}}>
            { done ? (
              <p className='doneItem'>{aTask}</p>
            ) : (
              <p>{aTask}</p>
            )
          }
            <button onClick={()=>setDone(!done)} className="done">&#x2714;</button>
            <button onClick={()=>setDel(!del)} className="delete">X</button>
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