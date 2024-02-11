import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'


describe('Tests on <GifItem />', () => {

  const id = (Math.random() * 100).toString()
  const title = 'My Image'
  const url = 'https://my-url.test/img.png'

  test('should render and generate snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toBeDefined()
  })

  it('should render image with indicated url and alt', () => {
    render(<GifItem id={id} title={title} url={url} />)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(id)
  })

  test('should render title in component', () => {
    render(<GifItem id={id} title={title} url={url} />)
    expect(screen.getByText(title)).toBeDefined()
  })

})
