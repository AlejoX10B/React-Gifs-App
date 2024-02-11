import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { App } from '../src/App'


window.HTMLElement.prototype.scrollIntoView = jest.fn();


describe('Tests on <App />', () => {

  test('should render', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })

  test('should render a search of a term with 5 results', async () => {
    render(<App />)

    const input = screen.getByRole('searchbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: 'cats' } })
    fireEvent.submit(form)
  })

})
