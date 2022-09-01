import style from '../styles/NewTaskForm.module.css'


export function NewTaskForm() {
  return (
    <div className={style.container}>
      <form action="">
        <input className={style.input} type="text" autoFocus placeholder='Adicione uma nova tarefa'/>
        <button type="submit">criar</button>
      </form>
    </div>
  )
}