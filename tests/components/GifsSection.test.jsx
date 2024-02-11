import { fireEvent, render, screen } from '@testing-library/react'
import { GifsSection } from '../../src/components'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')


describe('Tests on <GifsSection />', () => {

  const params = {
    term: 'developer',
    limit: 10,
    removeSearch: jest.fn()
  }

  test('should render loading text', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    })

    render(<GifsSection {...params} />)

    expect(screen.getByText(`${params.term} (cargando...)`)).toBeDefined()
  })

  test('should render a list of Gifs when useFetchGifs return an array of gifs', () => {
    const gifs = [
      {
        id: 'my_img_1',
        title: 'My Image 1',
        url: 'http://my-url.test.com/my_img_1.png'
      },
      {
        id: 'my_img_2',
        title: 'My Image 2',
        url: 'http://my-url.test.com/my_img_2.png'
      }
    ]

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false
    })

    render(<GifsSection {...params} />)

    expect(screen.getByText(`${params.term} (${gifs.length} resultados)`)).toBeDefined()
    expect(screen.getAllByRole('img').length).toBe(gifs.length)
  })

  test('should render no founded gifs when useFetchGifs return an empty array of gifs', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: false
    })

    render(<GifsSection {...params} />)

    expect(screen.getByText(`${params.term} (${0} resultados)`)).toBeDefined()
    expect(screen.getByText('No se encontraron GIFs para mostrar 😿')).toBeDefined()
  })

  test('should call removeSearch when button is clicked', () => {
    const gifs = [
      {
        id: 'my_img_1',
        title: 'My Image 1',
        url: 'http://my-url.test.com/my_img_1.png'
      }
    ]

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false
    })

    render(<GifsSection {...params} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(params.removeSearch).toHaveBeenCalledWith(params.term)
  })

})