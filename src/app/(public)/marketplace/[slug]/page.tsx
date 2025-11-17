import { buttonVariants } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import { ChevronLeftIcon } from "lucide-react"
import { Service } from '@/types/service';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

async function getService(slug: string) {
    return (await fetch(`${process.env.API_BASE_URL}/services/${slug}?populate=previews`, {
        headers: {
            "Authorization": process.env.API_KEY
        }
    })).json() as Promise<{ data: Service }>
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const slug = (await params).slug
    const post = (await getService(slug)).data
    return {
        title: post.title,
        description: post.description
    }
}

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
    const services = (await getService((await params).slug)).data
    const Cont = (await remark().use(html).process(services.description)).toString()
    return (<div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24 pt-20 sm:pt-24 lg:pt-32">
        <div className="p-10 container mx-auto">
            <div className='prose dark:prose-invert'>
                <h1>{services.title}</h1>
                <div>
                    <small>Создано: {new Date(services.createdAt).toLocaleString()}</small>
                    <br />
                    <small>Обновлено: {new Date(services.updatedAt).toLocaleString()}</small>
                </div>
                <h2>Описание:</h2>
            </div>
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {services.previews?.map((preview, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img className='object-cover' src={preview.url} alt="" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className='prose dark:prose-invert' dangerouslySetInnerHTML={{ __html: Cont }} />
            <Link href={"/marketplace"} className={buttonVariants({ variant: "link" })}>
                <ChevronLeftIcon />
                Назад
            </Link>
        </div></div>
    );
}
