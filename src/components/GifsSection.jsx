import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { Spinner } from './Spinner'
import PropTypes from 'prop-types'

import '../styles/GifsSection.css'


export function GifsSection({ term, limit, removeSearch }) {

  const { gifs, isLoading } = useFetchGifs(term, limit)

  return (
    <section className='surface'>
      <header>
        <h3>
          {term} ({isLoading ? 'cargando...' : `${gifs.length} resultados`})
        </h3>

        <button
          type='button'
          onClick={() => removeSearch(term)}>

          <i className='material-symbols-rounded'>
            remove
          </i>
        </button>
      </header>

      <hr />

      <div className='img-grid'>
        {
          isLoading
            ? <Spinner />
            : (
              gifs.length === 0
                ? <p>No se encontraron GIFs para mostrar 😿</p>
                : (
                  gifs.map(img => (
                    <GifItem key={img.id} {...img} />
                  ))
                )
            )
        }
      </div>
    </section>
  )
}

GifsSection.propTypes = {
  term: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  removeSearch: PropTypes.func.isRequired
}
