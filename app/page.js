"use client"
import React, { useState } from 'react'
const page = () => {
  const[title,settitle] = useState("")
  const[desc,setdesc] = useState("")
  const[mainTask,setmainTask] = useState("")
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    console.log("adf")
    setdesc("")
    settitle("")
  }
  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask (copytask)
  }
  let rendertask = <h2> No Task </h2>
  if(mainTask.length >0){
    rendertask = mainTask.map((t,i)=>{
    return (
      <li className='flex items-cnter justify-between mb-8'>
    <div className='flex items-cnter justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>
    <button onClick = { deleteHandler }className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
    );
  });}

  return (
    <>
    <h1 className='bg-black text-white text-5xl font-bold text-center p-5'> TO-DO</h1>
    <form onSubmit={submitHandler}>
      <input 
      type = "text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder = "enter task"
      value = {title}
      onChange={(e)=>{
        settitle(e.target.value)
      }
      }
      />
      <input 
      type = "text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder = "description"
      value = {desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }
      }
      />
      <button 
      className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'> Add task</button>
    </form>
    <hr />
    <div className='p-3 bg-slate-50'>
    <ul>
      {rendertask}
    </ul>
    </div>
    </>
  )
}

export default page