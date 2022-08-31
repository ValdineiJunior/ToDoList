import {Header} from './Header'
import {NewTaskForm} from './NewTaskForm'
import {TaskStats} from './TaskStats' 
import {TaskList} from './TaskList'

import '../global.css'

export function App() {

  return (
    <div>
      <Header></Header>
      <NewTaskForm></NewTaskForm>
      <TaskStats></TaskStats>
      <TaskList></TaskList>
    </div>
  )
}

