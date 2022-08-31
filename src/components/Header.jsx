import style from '../styles/Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <>
    <header className={style.header}>
      <div>Hello</div>
      <img src= {logo} alt="logo" />
    </header>

    </>
  )
}