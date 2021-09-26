import Layout from '../Layout/Layout'
import SearchBar from '../SearchBar/SearchBar'
import { Carousel } from './Carousel'
import { SpecialCarousel } from './SpecialCarousel'

export const MainPage = () => {
  const isSearchResult = false // need to agree with backend on the way to fetch search results

  return (
    <Layout title="MainPage">
      <div className="mx-auto px-6 w-full">
        <SearchBar />
      </div>
      <div className="flex pl-6 flex-col gap-6">
        {isSearchResult && <Carousel title="Search results" />}
        <Carousel title="Most popular" />
        <Carousel title="Special offer" />
        <SpecialCarousel />
      </div>
    </Layout>
  )
}
