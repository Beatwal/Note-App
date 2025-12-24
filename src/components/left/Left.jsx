import React, { useState } from 'react'
import Title from './Title'
import Box from './Box'
import Button from './Button'

const Left = (props) => {
  const [title, setTitle] = useState("")
  const [box, setBox] = useState("")
  
  const submit=(e)=>{
    e.preventDefault()
    
    setTitle("")
    setBox("")
    let coptask=[...props.task]
    coptask.push({title,box})
    props.setTask(coptask)
  }
  return (
    <div className='lg:w-1/2 lg:h-screen lg:border-r-2 border-white' >
        <form onSubmit={submit} className='p-10 flex flex-col gap-3 '>
      <Title value={title} setvalue={setTitle}></Title>
      <Box box={box} setBox={setBox}></Box>
      <Button></Button>
      </form>
    </div>
  )
}

export default Left
