import PropTypes from 'prop-types'

import '../styles/GifItem.css'


export function GifItem({ id, title, url }) {
  return(
    <figure>
      <img src={url} alt={id}/>
      <figcaption>{ title || '(Sin título)' }</figcaption>
    </figure>
  )
}

GifItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
