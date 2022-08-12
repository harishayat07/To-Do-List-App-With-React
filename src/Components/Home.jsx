import React, { useEffect,useState } from 'react'
import Task from './Task';

const Home = () => {
  
  const initialArray = localStorage.getItem("taskArray") 
  ? JSON.parse(localStorage.getItem("taskArray")) : [] ;

  const [taskArray,setTask]=useState(initialArray);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
   setTask([...taskArray,{title,description}]);
   setTitle("");
   setDescription("");
   
  };

  useEffect(() => {
    localStorage.setItem("taskArray",JSON.stringify(taskArray));
  }, [taskArray])
  

  const deleteTask = (index)=>{
    const filterdArray = taskArray.filter((val,i)=>{
      return i!==index;
    });
    setTask(filterdArray);
  };


  return (
    <div className='container'>
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='Title' 
        value={title}
        onChange={(e)=>setTitle(e.target.value)} />

        <textarea 
        placeholder='Description'
        value={description}
        onChange={(e)=>setDescription(e.target.value)} />
        
        <button type='submit'>ADD</button>
      </form>
      
      {taskArray.map((item,index)=>(
        <Task  
        key={index} 
        title={item.title} 
        description={item.description}
        deleteTask={deleteTask}
        index={index}/>
      ))}
    </div>
  )

}

export default Home
