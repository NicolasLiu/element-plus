import { withInstall, withNoopInstall } from '@lkq-element-plus/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

export const ElCarousel = withInstall(Carousel, {
  CarouselItem,
})

export default ElCarousel

export const ElCarouselItem = withNoopInstall(CarouselItem)

export * from './src/carousel'
export * from './src/carousel-item'

export type { CarouselInstance, CarouselItemInstance } from './src/instance'
