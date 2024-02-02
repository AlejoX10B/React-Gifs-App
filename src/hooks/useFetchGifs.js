import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


export function useFetchGifs(term, limit) {

  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    setGifs(await getGifs(term, limit))
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    gifs,
    isLoading
  }
}
