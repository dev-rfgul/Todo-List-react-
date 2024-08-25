// "use client";
// import React, { useState } from "react";

// const Page = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [mainTask, setMainTask] = useState([]);
//   const [delTask, setDelTask] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setMainTask([{ title, desc }, ...mainTask]); // Add the new task at the beginning of the array
//     setTitle("");
//     setDesc("");
//   };

//   const deleteHandler = (i) => {
//     let copyTask = [...mainTask];
//     copyTask.splice(i, 1);
//     setMainTask(copyTask);
//   };

//   const deleteTask = (e) => {
//     e.preventDefault();
//     setDelTask([...delTask, ...mainTask]);
//     setMainTask([]);
//   };

//   let renderTask = <h2 className="text-2xl text-gray-600">No Task Available</h2>;

//   if (mainTask.length > 0) {
//     renderTask = mainTask.map((t, i) => {
//       return (
//         <li
//           key={i}
//           className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInUp"
//         >
//           <div className="flex flex-col items-start w-full md:w-2/3">
//             <h5 className="text-2xl font-semibold text-gray-800">{t.title}</h5>
//             <p className="text-lg text-gray-600 mt-2 md:mt-0">{t.desc}</p>
//           </div>
//           <button
//             onClick={() => {
//               deleteHandler(i);
//             }}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-bold rounded-lg mt-4 md:mt-0 md:ml-4 transition-all duration-300"
//           >
//             Delete
//           </button>
//         </li>
//       );
//     });
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 py-10">
//       <div className="container mx-auto p-5">
//         <h1 className="bg-black text-white p-5 text-5xl font-bold text-center rounded-lg shadow-lg">
//           My Todo List
//         </h1>
//         <h2 className="bg-black text-white text-center mt-2 py-2 rounded-lg shadow-md">
//           A project by rf-gul
//         </h2>

//         <form onSubmit={submitHandler} className="mt-8 bg-white p-8 rounded-lg shadow-lg">
//           <input
//             className="text-2xl border border-gray-300 focus:ring focus:ring-blue-300 m-4 py-2 px-4 rounded-lg w-full"
//             type="text"
//             placeholder="Enter Title Here"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             className="text-2xl border border-gray-300 focus:ring focus:ring-blue-300 m-4 py-2 px-4 rounded-lg w-full resize-none"
//             rows="3"
//             placeholder="Enter Description Here"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//           <button className="bg-black hover:bg-gray-800 text-white font-bold text-2xl m-4 py-2 px-4 rounded-lg transition-all duration-300 w-full">
//             Add Task
//           </button>
//         </form>

//         <hr className="my-8" />

//         <div className="p-8 bg-slate-400 rounded-lg shadow-lg">
//           <h1 className="text-5xl font-bold text-center mb-8">My Tasks</h1>
//           <ul className="space-y-4">{renderTask}</ul>
//           {mainTask.length > 0 && (
//             <button
//               onClick={deleteTask}
//               className="bg-black hover:bg-gray-800 text-white font-bold text-2xl mt-8 py-4 px-8 rounded-lg transition-all duration-300 w-full"
//             >
//               Delete All Tasks
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [delTask, setDelTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString(); // Get current date and time
    setMainTask([{ title, desc, timestamp }, ...mainTask]); // Add timestamp to the task
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const deleteTask = (e) => {
    e.preventDefault();
    setDelTask([...delTask, ...mainTask]);
    setMainTask([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 py-10">
      <div className="container mx-auto p-5">
        <h1 className="bg-black text-white p-5 text-5xl font-bold text-center rounded-lg shadow-lg mb-8">
          My Todo List
        </h1>
        <h2 className="bg-black text-white text-center py-2 rounded-lg shadow-md mb-8">
          A project by rf-gul
        </h2>

        <form
          onSubmit={submitHandler}
          className="bg-white p-8 rounded-lg shadow-lg mb-8"
        >
          <input
            className="text-2xl border border-gray-300 focus:ring focus:ring-blue-300 m-4 py-2 px-4 rounded-lg w-full mb-4"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="text-lg border border-gray-300 focus:ring focus:ring-blue-300 m-4 py-2 px-4 rounded-lg w-full resize-none mb-4"
            rows="3"
            placeholder="Enter Description Here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="bg-black hover:bg-gray-800 text-white font-bold text-2xl m-4 py-2 px-4 rounded-lg transition-all duration-300 w-full">
            Add Task
          </button>
        </form>

        <hr className="my-8" />

        <div className="p-8 bg-slate-400 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-center mb-8">My Tasks</h1>
          {mainTask.length > 0 ? (
            <ul className="space-y-4">
              {mainTask.map((task, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInUp"
                >
                  <div className="flex flex-col items-start w-full md:w-2/3">
                    <h5 className="text-2xl font-semibold text-gray-800">
                      {task.title}
                    </h5>
                    <p className="text-lg text-gray-600 mt-2">{task.desc}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Added At: {task.timestamp}
                    </p>{" "}
                    {/* Display timestamp */}
                  </div>
                  <button
                    onClick={() => deleteHandler(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-bold rounded-lg mt-4 md:mt-0 md:ml-4 transition-all duration-300"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-2xl text-gray-600 text-center">
              No Task Available
            </p>
          )}
          {mainTask.length > 0 && (
            <button
              onClick={deleteTask}
              className="bg-black hover:bg-gray-800 text-white font-bold text-2xl mt-8 py-4 px-8 rounded-lg transition-all duration-300 w-full"
            >
              Delete All Tasks
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
