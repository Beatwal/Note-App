import React from 'react'

const Delete = (props) => {
  const delet= ()=>{
    let copytask=[...props.task]
    copytask.splice(props.val,1)
    props.setTask(copytask)
   
  }
  return (
   
      <button onClick={delet} className='bg-red-800 cursor-pointer active:scale-95 px-5 py-2 text-xl rounded-full absolute bottom-5 left-20'>Delete</button>
 
  )
}

export default Delete