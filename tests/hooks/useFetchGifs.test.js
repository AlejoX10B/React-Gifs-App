import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'


describe('Tests on hook useFetchGifs', () => {

  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('developer', 10))
    const { gifs, isLoading } = result.current

    expect(gifs.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('should return an array of gifs and isLoading as true', async () => {
    const { result } = renderHook(() => useFetchGifs('developer', 10))

    await waitFor(() => {
      expect(result.current.gifs.length).toBeGreaterThan(0)
    })

    const { gifs, isLoading } = result.current

    expect(gifs.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })

})
