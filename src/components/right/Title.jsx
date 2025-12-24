import React from 'react'

const Title = (props) => {
  return (
    <div>
      <h1 className='text-2xl text-black font-bold'>{props.title}</h1>
    </div>
  )
}

export default Title