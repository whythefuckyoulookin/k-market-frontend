import type { IEntity } from "./i-entity";
import type { Service } from "./service";

export interface ServicesCategory extends IEntity {
  title: string
  slug: string
  description: string
  services?: Service[]
}