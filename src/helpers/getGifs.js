
export const getGifs = async(term, limit) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=UeI8XjVOvJQOj20Fovli3vZbqH1mqxWK&q=${term}&limit=${limit}`
  const { data } = await (await fetch(url)).json()
  
  const images = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }))

  return images
}
