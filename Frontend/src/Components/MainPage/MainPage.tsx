import Layout from '../Layout/Layout'
import { Carousel } from './Carousel'
import { SpecialCarousel } from './SpecialCarousel'

export const MainPage = () => {
  return (
    <Layout title={'MainPage'}>
      <div className={'flex pl-6 flex-col gap-6'}>
        <Carousel title={'Most popular'} />
        <Carousel title={'Special offer'} />
        <SpecialCarousel />
      </div>
    </Layout>
  )
}
