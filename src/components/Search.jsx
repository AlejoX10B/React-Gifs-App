import { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/Search.css'


export function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState(5)

  const handleInput = ({ target }) => setInputValue(target.value)
  const handleSelect = ({ target }) => setSelectValue(parseInt(target.value))

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const searchTerm = inputValue.trim()
    if (searchTerm.length <= 1) return

    onSearch({ term: searchTerm, limit: selectValue })
    setInputValue('')
  }

  return (
    <search className='surface'>
      <form onSubmit={handleOnSubmit} role='form'>

        <label>
          Término de búsqueda:

          <input
            type="search"
            placeholder='Escribe aquí lo que quieres buscar...'
            value={inputValue}
            onChange={handleInput}
          />
        </label>

        <label>
          Cantidad de resultados:

          <select
            name='limit'
            title='limit'
            role='listbox'
            value={selectValue}
            onChange={handleSelect}>

            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </label>

        <button type='submit'>
          Buscar 🔎
        </button>
      </form>
    </search>
  )
}


Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}
