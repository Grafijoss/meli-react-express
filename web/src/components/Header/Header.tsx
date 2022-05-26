import { useState } from 'react'
import './styles.scss'
import searchIcon from '../icons/search.svg'

const Header = () => {
  const [search, setSearch] = useState('')

  const handlerOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert(search)
  }

  return (
    <header className='header'>
      <div className='header__content'>
        <button className='header__logo-meli' style={{ backgroundImage: 'url("images/meli-logo.png")' }} />
        <form
          onSubmit={handlerOnSubmit}
          className='header__search-form'
        >
          <input
            type='text'
            className='header__search-form__input'
            placeholder='Buscar productos, marcas y más…'
            onChange={handlerOnChage}
          />
          <button className='header__search-form__button'>
            <img className='header__search-form__icon' src={searchIcon} alt='Icono de buscar' />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
