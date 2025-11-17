import type { IEntity } from "./i-entity"
import type { Media } from "./media"
import type { ServicesCategory } from "./services-category"

export interface Service extends IEntity {
  title: string
  description: string
  price: number
  slug: string
  previews?: Media[]
  category?: ServicesCategory
}
