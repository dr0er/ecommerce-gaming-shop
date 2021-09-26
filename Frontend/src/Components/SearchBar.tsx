import { useState } from 'react'

const SearchBar = () => {
  const itemList = ['mouse', 'keyboard', 'monitor']
  const [search, setSearch] = useState('')

  const filterItems =
    search.length === 0
      ? itemList
      : itemList.filter((item) => item.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <input
        value={search}
        type="text"
        name="search"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filterItems.map((item) => (
          <p key={filterItems.indexOf(item)}>{item}</p>
        ))}
      </div>
    </>
  )
}

export default SearchBar
