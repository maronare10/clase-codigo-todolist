import { useState } from 'react'

const App = () => {
  const [taskInput, setTaskInput] = useState("")
  const [taskList, setTaskList] = useState([])

  const handleChange = (event) => {
    setTaskInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTaskList(taskList.concat(taskInput))
    setTaskInput("")
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} value={taskInput} />
        <button> Agregar </button>
      </form>
      
      {/* {taskInput} */}
      {/* {taskList} */}

      <ul>
        {
          taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
