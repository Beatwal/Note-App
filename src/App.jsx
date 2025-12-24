import React,{useState} from 'react'
import Left from './components/left/Left'
import Right from './components/right/Right'

const App = () => {
    const [task, setTask] = useState([])
  
  return (
    <div className='bg-black px-5 min-h-screen  flex  text-white'>
      <Left task={task} setTask={setTask}/>
      <Right task={task} setTask={setTask}/>
    </div>
  )
}

export default App
