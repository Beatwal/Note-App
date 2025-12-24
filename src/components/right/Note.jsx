import React from 'react'
import Title from './Title'
import Hero from './Hero'
import Delete from './Delete'

const Note = (props) => {
  return (
    <div className=' w-70 h-70 bg-cover px-5 py-8 bg-center relative bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s)] '>
      <Title title={props.title}/>
      <Hero box={props.box}/>
      <Delete task={props.task} setTask={props.setTask} val={props.val}/>

      
    </div>
  )
}

export default Note
