import { useState } from 'react'
import c from 'clsx'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <input
        className={c('input-field my-4 transform duration-200', !isMenuOpen && 'hidden')}
        value={search}
        type="text"
        name="search"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  )
}

export default SearchBar
