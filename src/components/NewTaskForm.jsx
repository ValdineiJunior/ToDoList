import style from '../styles/NewTaskForm.module.css'


export function NewTaskForm() {
  return (
    <>
    <input className={style.NewTaskForm} type="text" placeholder='Adcione uma nova tarefa' />
    
    <button>Criar</button>
    </>
  )
}