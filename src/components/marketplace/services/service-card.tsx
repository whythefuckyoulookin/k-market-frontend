import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item"
import type { Service } from "@/types/service"
import { ExternalLinkIcon, EyeIcon, HeartIcon } from "lucide-react"
import Link from "next/link"
import type { FC } from "react"

type ServiceCardProps = {
  service: Service
}

export const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card>
      <CardHeader>
        <div className="h-56 w-full">
          <img className="mx-auto h-full" src={service.previews?.[0].url} alt="" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle>
          {service.title}
        </CardTitle>
        <div className="flex flex-wrap gap-1">
          <Badge variant={'secondary'}>Lorem.</Badge>
          <Badge variant={'secondary'}>Lorem, ipsum.</Badge>
          <Badge variant={'secondary'}>Lorem, ipsum.</Badge>
          <Badge variant={'secondary'}>Lorem, ipsum dolor.</Badge>
        </div>
      </CardContent>
      <CardFooter className="justify-between ">
        <p className="text-2xl font-extrabold leading-tight">
          {(new Intl.NumberFormat("ru", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0
          })).format(service.price)}
        </p>
        <Link href={`/marketplace/${service.documentId}`} className={buttonVariants({ variant: "link" })}>
          Подробнее
          <ExternalLinkIcon />
        </Link>
      </CardFooter>
    </Card>
  )
}