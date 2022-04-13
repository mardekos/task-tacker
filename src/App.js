import { useState } from 'react'
import Tasks from './components/Tasks.js'
import Button from './components/Button.js'
import Header from './components/Header.js'


const App = () => {
  const [tasks, SetTasks] = useState([
    {
        id: 1,
        text: 'Food shoping',
        day: 'Feb 5 at 2:30pm',
        reminder: false,
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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}
export default App
