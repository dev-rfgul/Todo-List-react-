 "use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const[mainTask,setMainTask]=useState([]);
  const [delTask,setDelTask]=useState([]);
  const submitHandeler=(e)=>{
    console.log("clicked")
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}])
    // console.log(title)
    // console.log(desc)
    setTitle("");
    setDesc("");
    // console.log(mainTask)
  }
 const deleteHandeler=(i)=>{
  let copyTask=[...mainTask]; 
  copyTask.splice(i,1);
  setMainTask(copyTask);

 }
  let deleteTask=(e)=>{
    e.preventDefault();
    setDelTask([...delTask,mainTask])
    setMainTask([]);
  }
  let renderTask=<h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}className="flex items-center justify-center mb-11"> {/* Increased spacing */}
          <div className="flex items-center justify-center w-2/3 space-x-4"> {/* Increased spacing */}
            <h5 className="text-3xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
            <button onClick={()=>{
              deleteHandeler(i);
            }} className="bg-red-400 text-white px-4 py-2 font-bold rounded">Delete</button>
          </div>
        </li>
      );
    });

  }



  return (
    <div>
      <>
        <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
          My Todo List
        </h1>
        <h1 className="bg-black text-white font-blod text-center  ">
          a project by rf-gul
        </h1>

        <form onSubmit={submitHandeler}>
          <input
            className="text-2xl border-zinc-800 m-8 py-4 px-2"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            
            onChange={(e)=>{
              // console.log(e.target.value)
              setTitle(e.target.value)
            }}  
          />
          <input
            className="text-2xl border-zinc-800 m-8 py-4 px-2"
            type="text"
            placeholder="Enter Discription Here"
            value={desc}
            onChange={(e)=>{
              setDesc(e.target.value)
            }}
          />
          <button className="bg-black rounded text-white font-bold text-2xl m-8 py-4 px-2">
            Add Task
          </button>
        </form>
        <hr />
        <div className=" p-8 bg-slate-400 font-bold text-center">
          <h1 className="text-5xl">My Task</h1>
          <ul>
            {renderTask}
            <button onClick={deleteTask} className="bg-black text-white font-bold text-2xl m-8 py-4 px-2 rounded">
            Delete  All Task
          </button>
          </ul>
        </div>
         
      </>
    </div>
  );
};

export default page;
