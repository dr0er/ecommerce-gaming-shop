import { FormEvent, useState } from 'react'
import c from 'clsx'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const isComponentVisible = useSelector((state: RootState) => state.menu.isVisible)

  // need to agree with backend on the way to post/fetch search results
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = ''
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(search),
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <span className="sr-only">Search products by category or brand</span>
        </label>
        <input
          className={c('input-field my-4', !isComponentVisible && 'hidden')}
          value={search}
          type="text"
          name="search"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  )
}

export default SearchBar
