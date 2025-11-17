import { ServiceCard } from "@/components/marketplace/services/service-card";
import { ItemGroup } from "@/components/ui/item";
import type { Service } from "@/types/service";

async function getServices() {
  return (await fetch(`${process.env.API_BASE_URL}/services?populate=previews`, {
    headers: {
      "Authorization": process.env.API_KEY
    }
  })).json() as Promise<{
    data: Service[]
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }>
}

export default async function () {
  const services = await getServices()
  return (
    <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24 pt-20 sm:pt-24 lg:pt-32">
      <ItemGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.data?.map(service => <ServiceCard key={service.id} service={service} />)}
      </ItemGroup>
    </div>
  );
}
