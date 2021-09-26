import { useState } from 'react'
import c from 'clsx'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const isComponentVisible = useSelector((state: RootState) => state.menu.isVisible)

  return (
    <>
      <input
        // add label with sr-only class
        className={c('input-field my-4', !isComponentVisible && 'hidden')}
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
