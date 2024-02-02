import { useEffect, useRef, useState } from 'react'
import { GifsSection, Search } from './components'

import './styles/App.css'


export function App() {
  const sectionsRef = useRef(null)

  const [history, setHistory] = useState([])
  const [gifsLimit, setGifsLimit] = useState(0)

  useEffect(() => {
    if (sectionsRef.current) {
      const lastSearch = sectionsRef.current.lastElementChild

      if (lastSearch) {
        lastSearch.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })
      }
    }
  }, [history])

  const updateHistory = ({ term, limit }) => {
    const normalizedHistory = history.map(item => item.toLowerCase())
    if (normalizedHistory.includes(term.toLowerCase())) return

    setHistory(prevItems => [...prevItems, term])
    setGifsLimit(limit)
  }

  const removeSearch = (term) => {
    setHistory(prevItems => prevItems.filter(item => item != term))
  }

  return (
    <>
      <header>
        <h1>Gifs App</h1>
        <h2>Busca los Gifs que quieras!!!</h2>
      </header>

      <Search onSearch={updateHistory} />

      <article ref={sectionsRef}>
        {
          history.map(term => (
            <GifsSection
              key={term}
              term={term}
              limit={gifsLimit}
              removeSearch={removeSearch}
            />
          ))
        }
      </article>
    </>
  )
}
