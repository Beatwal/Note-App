import React from 'react'

const Box = (props) => {
  const textarea=(e)=>{
    props.setBox(e.target.value)
  }
  return (
    <div >
      <textarea onChange={textarea} className='border outline-none rounded-2xl text-xl px-5 py-5 w-full  h-50' name=""
      placeholder='Write Details here' value={props.box}></textarea>
    </div>
  )
}

export default Box
