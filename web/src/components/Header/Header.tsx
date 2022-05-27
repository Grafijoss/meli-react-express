import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './styles.scss'
import searchIcon from '../icons/search.svg'

const Header = ({ searchValue }: {searchValue: string | null}) => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handlerOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate(`items?search=${search}`)
  }

  useEffect(() => {
    let textValue = ''
    if (searchValue) {
      textValue = searchValue
    }
    setSearch(textValue)
  }, [searchValue])

  return (
    <header className='header' data-testid='header'>
      <div className='header__content'>
        <Link to='/'>
          <button className='header__logo-meli'>
            <img src='images/ml-logo.png' alt='' />
          </button>
        </Link>
        <form
          onSubmit={handlerOnSubmit}
          className='header__search-form'
        >
          <input
            type='text'
            className='header__search-form__input'
            placeholder='Nunca dejes de buscar'
            onChange={handlerOnChage}
            value={search}
            data-testid='buscador'
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
