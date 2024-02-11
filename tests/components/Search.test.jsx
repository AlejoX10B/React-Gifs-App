import { fireEvent, render, screen } from '@testing-library/react'
import { Search } from '../../src/components/Search'


describe('Tests in <Search />', () => {

  test('should change the value of search input and select', () => {
    render(<Search onSearch={() => { }} />)

    const input = screen.getByRole('searchbox')
    const select = screen.getByRole('listbox')
    fireEvent.input(input, { target: { value: 'developer' } })
    fireEvent.change(select, { target: { value: 20 } })

    expect(input.value).toBe('developer')
    expect(parseInt(select.value)).toBe(20)
  })

  test('should call onSearch if input has a value', () => {
    const onSearchMock = jest.fn()

    render(<Search onSearch={onSearchMock} />)

    const input = screen.getByRole('searchbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: 'developer' } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onSearchMock).toHaveBeenNthCalledWith(1, {
      term: 'developer',
      limit: 5
    })
  })

  test('should not call onSearch if input is empty', () => {
    const onSearchMock = jest.fn()

    render(<Search onSearch={onSearchMock} />)

    const input = screen.getByRole('searchbox')
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onSearchMock).not.toHaveBeenCalled()
  })

})
