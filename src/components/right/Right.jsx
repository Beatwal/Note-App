import React from 'react'
import Note from './note'
import Title from './Title'
import Hero from './Hero'
import Delete from './Delete'

const Right = (props) => {
  return (
    <div className='lg:w-1/2  flex flex-col gap-5 px-5 py-4 '>
      <h1 className="text-3xl font-bold ">Recent Notes</h1>
      <div className='flex flex-wrap items-center justify-center md:items-center md:justify-start gap-5   '>
        {props.task.map((ele,idx)=>{
         
          return <Note task={props.task} setTask={props.setTask} key={idx} val={idx} title={ele.title} box={ele.box}/>
          
        })
        }
      
      
      </div>
      
    </div>
  )
}

export default Right
