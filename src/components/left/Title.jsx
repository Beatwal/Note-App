import React from 'react'

const Title = (props) => {
  const input=(e)=>{
    props.setvalue(e.target.value)
  }
  return (
    <div>
        <input onChange={input} className=' border px-5 outline-none py-5 w-full rounded-2xl text-xl' type="text" placeholder='Enter Notes Heading' value={props.value} />
      
    </div>
  )
}

export default Title
