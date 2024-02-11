import { render, screen } from '@testing-library/react'
import { Spinner } from '../../src/components/Spinner'


describe('Tests on <Spinner />', () => {

  test('should render', () => {
    const { container } = render(<Spinner />)
    expect(container).toBeDefined()
  })

})