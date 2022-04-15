import { useState } from 'react'
import Tasks from './components/Tasks.js'
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, SetTasks] = useState([
    {
        id: 1,
        text: 'Food shoping',
        day: 'Feb 5 at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dentist',
        day: 'Feb 6 at 3:00pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Going to church',
        day: 'Feb 7 at 12:00am',
        reminder: false,
    }
  ])
  // Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task } 
      SetTasks([...tasks, newTask])
    }

  // Delete Task
  const deleteTask = (id) => {
  SetTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle reminder

   const toggleReminder = (id) => {
     SetTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
   }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?  
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :
      ('No tasks to show')}
    </div>
  )
}
export default App
