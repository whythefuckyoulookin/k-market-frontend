import type { IEntity } from "./i-entity"

interface IMediaData {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
}

interface MediaFormat extends IMediaData {
  path: unknown
  sizeInBytes: number
}

type MEDIA_FORMATS = "large" | "medium" | "small" | "thumbnail"

export interface Media extends IEntity, IMediaData {
  formats: Partial<{ [key in MEDIA_FORMATS]: MediaFormat }>
  previewUrl: string | null
  alternativeText: string | null
  caption: unknown
  provider: string
  provider_metadata: unknown
} 
