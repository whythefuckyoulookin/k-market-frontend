import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ArrowRightIcon, BadgeRussianRubleIcon, BanknoteIcon, BellRingIcon, BookCheckIcon, BriefcaseBusinessIcon, ChartLineIcon, CheckIcon, ChevronRightIcon, ClipboardListIcon, CreditCardIcon, EarthIcon, GalleryVerticalEndIcon, NewspaperIcon, SearchIcon, ShoppingBagIcon, StoreIcon, UndoDotIcon, User2Icon, UserCircle2Icon } from "lucide-react";

export default () => (
  <>
    <section className="bg-primary/10">
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24 pt-20 sm:pt-24 lg:pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Korzilla Admin
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-lg lg:text-xl">
            Идеальное место для управления вашим сайтом.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
          <a href="#" className={buttonVariants()}>
            Зарегистрироваться
          </a>
          <a
            href="#"
            className={buttonVariants({ variant: "outline" })}
          >
            Войти 
            <ArrowRightIcon />
          </a>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <img
            className="relative z-20 mx-auto border rounded shadow dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg"
            alt="dashboard overview"
          />
          <img
            className="relative z-20 hidden mx-auto border rounded shadow dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg"
            alt="dashboard overview dark"
          />
        </div>
      </div>
      <div className="pt-48 pb-8 -mt-48 lg:pb-16 sm:pt-72 sm:-mt-80 z-2 bg-background">
        <div className="px-4 mx-auto text-center md:max-w-3xl lg:max-w-5xl lg:px-20">
          <div className="flex flex-wrap items-center justify-center sm:justify-between">
            <a href="#" className="mb-5 mr-5 lg:mb-0">
              <img
                className="w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/amazon-grayscale.svg"
                alt=""
              />
            </a>
            <a href="#" className="mb-5 mr-5 lg:mb-0">
              <img
                className="w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg"
                alt=""
              />
            </a>
            <a href="#" className="mb-5 mr-5 lg:mb-0">
              <img
                className="w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg"
                alt=""
              />
            </a>
            <a href="#" className="mb-5 mr-5 lg:mb-0">
              <img
                className="w-auto h-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/oracle-grayscale.svg"
                alt=""
              />
            </a>
            <a href="#" className="mb-5 lg:mb-0">
              <img
                className="w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="grid items-center grid-cols-1 gap-12 xl:grid-cols-3 lg:gap-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Все в одном месте
            </h2>
            <p className="text-muted-foreground sm:text-xl">
              Теперь не будет никаких недопониманий.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 xl:col-span-2 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center size-12 rounded bg-primary/20">
                <StoreIcon className="size-8 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Маркетплейс
              </h3>
              <p className="mt-2 text-muted-foreground">
                Можно приобрести интеграцию на сайт, которая тут же начнет работать на вас
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center size-12 rounded bg-primary/20">
                <BookCheckIcon className="size-8 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Система тикетов
              </h3>
              <p className="mt-2 text-muted-foreground">
                Своя система запросов в нашу поддержку и быстрый ответ на ваши вопросы
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center size-12 rounded bg-primary/20">
                <BellRingIcon className="size-8 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Уведомления с ваших сайтов
              </h3>
              <p className="mt-2 text-muted-foreground">
                Получайте уведомления с заказов из ваших сайтов прямо на телефон или почту
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center size-12 rounded bg-primary/20">
                <NewspaperIcon className="size-8 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Новости
              </h3>
              <p className="mt-2 text-muted-foreground">
                Будьте в курсе всех новостей о работе ваших сайтов и интеграций
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="space-y-12 lg:space-y-20">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Работайте с сайтами быстрее
              </h2>
              <p className="mb-8 lg:text-xl text-muted-foreground">
                С Korzilla Admin вы сможете быстро получить нужную вам информацию о сайте
              </p>
              <ul className="pt-8 space-y-5 border-t my-7">
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Безграничное дополнение сайтов интеграциями
                  </span>
                </li>
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Development workflow
                  </span>
                </li>
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Knowledge management
                  </span>
                </li>
              </ul>
              <p className="mb-8 lg:text-xl text-muted-foreground">
                Deliver great service experiences fast - without the complexity of
                traditional ITSM solutions.
              </p>
            </div>
            <div className="hidden mb-4 lg:flex lg:mb-0">
              <img
                className="w-full border rounded shadow dark:hidden"
                src="https://flowbite.com/marketing-ui/demo/images/to-do-app-mockup.png"
                alt=""
              />
              <img
                className="hidden w-full border rounded shadow dark:block"
                src="https://flowbite.com/marketing-ui/demo/images/to-do-app-mockup-dark.png"
                alt=""
              />
            </div>
          </div>
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="hidden mb-4 lg:flex lg:mb-0">
              <img
                className="w-full border rounded shadow dark:hidden"
                src="https://flowbite.com/marketing-ui/demo/images/billing-mockup.png"
                alt=""
              />
              <img
                className="hidden w-full border rounded shadow dark:block"
                src="https://flowbite.com/marketing-ui/demo/images/billing-mockup-dark.png"
                alt=""
              />
            </div>
            <div className="sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl ">
                We invest in the world’s potential
              </h2>
              <p className="mb-8 lg:text-xl text-muted-foreground">
                Deliver great service experiences fast - without the complexity of
                traditional ITSM solutions.Accelerate critical development work,
                eliminate toil, and deploy changes with ease.
              </p>
              <ul className="pt-8 space-y-5 border-t my-7">
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Templates for everyone
                  </span>
                </li>
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Development workflow
                  </span>
                </li>
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Limitless business automation
                  </span>
                </li>
                <li className="flex space-x-3">
                  <div className="inline-flex items-center justify-center size-5 text-primary bg-primary/20 rounded-full">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-medium leading-tight">
                    Knowledge management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Testimonials
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-6 mt-8 lg:grid-cols-3 sm:mt-12 lg:mt-16">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Solid foundation for any project
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "This is a very complex and beautiful set of elements. Under the
                    hood it comes with the best things from 2 different worlds:
                    Figma and Tailwind."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-muted-foreground">
                    CTO at Open AI
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    A must-have for designers
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "This is a very complex and beautiful set of elements. Under the
                    hood it comes with the best things from 2 different worlds:
                    Figma and Tailwind."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Lana Byrd</div>
                  <div className="text-sm text-muted-foreground">
                    Software Engineer at Tesla
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Speechless with how easy this was to integrate
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "I recently got my hands on Flowbite Pro, and holy crap, I'm
                    speechless with how easy this was to integrate within my
                    application. Most templates are a pain, code is scattered, and
                    near impossible to theme."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Jese Leos</div>
                  <div className="text-sm text-muted-foreground">
                    CEO at Oracle
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Efficient Collaborating
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Joseph McFall</div>
                  <div className="text-sm text-muted-foreground">
                    Junior Designer at Adobe
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Mindblowing workflow and variants
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "Flowbite provides a robust set of design tokens and components
                    based on the popular Tailwind CSS framework.
                  </p>
                  <p>
                    From the most used UI components like forms and navigation bars
                    to the whole app screens designed both for desktop and mobile,
                    this UI kit provides a solid foundation for any project."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Helene Engels</div>
                  <div className="text-sm text-muted-foreground">
                    CFO at Microsoft
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Perfect choice for a SaaS application
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "Flowbite provides a robust set of design tokens and components
                    based on the popular Tailwind CSS framework.
                  </p>
                  <p>
                    From the most used UI components like forms and navigation bars
                    to the whole app screens designed both for desktop and mobile,
                    this UI kit provides a solid foundation for any project."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Leslie Livingston</div>
                  <div className="text-sm text-muted-foreground">
                    Creative Director at Apple
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Solid foundation for any project
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "I recently got my hands on Flowbite Pro, and holy crap, I'm
                    speechless with how easy this was to integrate within my
                    application. Most templates are a pain, code is scattered, and
                    near impossible to theme."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Michael Gough</div>
                  <div className="text-sm text-muted-foreground">
                    Front-end engineer at Meta
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Mindblowing workflow and variants
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Neil Sims</div>
                  <div className="text-sm text-muted-foreground">
                    Software architect at Amazon
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>
                    Speechless with how easy this was to integrate
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>
                    "This is a very complex and beautiful set of elements. Under the
                    hood it comes with the best things from 2 different worlds:
                    Figma and Tailwind."
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <img
                  className="rounded-full size-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium ">
                  <div>Robert Brown</div>
                  <div className="text-sm text-muted-foreground">
                    Junior developer at SAP
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="mt-8 text-center sm:mt-12 lg:mt-16">
          <a href="#" className={buttonVariants({ variant: "outline" })}>
            View more
          </a>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="items-center gap-8 mx-auto lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-muted-foreground sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Stats that matter
            </h2>
            <p className="mb-8 lg:text-xl">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className="grid gap-6 lg:grid-cols-1 sm:grid-cols-2">
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <ShoppingBagIcon className="size-8 text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-foreground">
                    $76 billion
                  </p>
                  <p className="text-muted-foreground">
                    24h trading volume on Flowbite exchange
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <User2Icon className="size-8 text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-foreground">
                    90%
                  </p>
                  <p className="text-muted-foreground">
                    of U.S adults have bought from businesses using Flowbite
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <BanknoteIcon className="size-8 text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-foreground">
                    135+
                  </p>
                  <p className="text-muted-foreground">
                    currencies and payment methods supported
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <EarthIcon className="size-8 text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-foreground">
                    40%
                  </p>
                  <p className="text-muted-foreground">
                    countries with local acquiring optimizing acceptance rates
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hidden mx-auto mb-4 sm:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/table-professor.svg"
            alt="table professor illustration"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Choose the right plan for your business
          </h2>
          <p className="mb-5 text-muted-foreground sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid gap-8 mt-8 mb-8 xl:grid-cols-3 sm:mt-12">
          <Card className="max-w-lg mx-auto w-full">
            <CardHeader className="text-center">
              <CardTitle>
                <h3 className="text-2xl font-semibold">
                  Starter
                </h3>
              </CardTitle>
              <CardDescription>
                <p className="sm:text-lg">
                  Best option for personal use and for your next side projects.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  $29
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>No setup, monthly, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className={buttonVariants({ className: "w-full" })}>
                Get started
              </a>
            </CardFooter>
          </Card>
          <Card className="max-w-lg mx-auto w-full">
            <CardHeader className="text-center">
              <CardTitle>
                <h3 className="text-2xl font-semibold">
                  Company
                </h3>
              </CardTitle>
              <CardDescription>
                <p className="sm:text-lg">
                  Relevant for multiple users, extended &amp; premium support.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  $99
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>No setup, monthly, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">10 developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className={buttonVariants({ className: "w-full" })}>
                Get started
              </a>
            </CardFooter>
          </Card>
          <Card className="max-w-lg mx-auto w-full">
            <CardHeader className="text-center">
              <CardTitle>
                <h3 className="text-2xl font-semibold">
                  Enterprise
                </h3>
              </CardTitle>
              <CardDescription>
                <p className="sm:text-lg">
                  Best for large scale uses and extended redistribution rights.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  $499
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>No setup, monthly, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">100+ developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="shrink-0 size-5 text-primary" />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className={buttonVariants({ className: "w-full" })}>
                Get started
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How can we help you?
          </h2>
          <p className="mb-8 text-muted-foreground sm:text-xl">
            Here are a few of the questions we get the most. If you don't see
            what's on your mind, reach out to us anytime on phone, chat, or email.
          </p>
          <label htmlFor="email-adress-icon" className="sr-only">
            Your Email
          </label>
          <InputGroup>
            <InputGroupInput
              type="text"
              placeholder="Type keywords to find answers"
              id="email-adress-icon"
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <p className="mt-4 text-sm text-muted-foreground">
            You can also browse the topics below to find what you are looking for.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center size-10 rounded bg-primary/20 lg:size-12">
                <ClipboardListIcon className="size-5 text-primary lg:size-6" />
              </div>
              <CardTitle>
                <h3 className="text-xl font-bold">
                  General
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    About forwarding limits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to update Flowbite?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to change privacy settings?
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className="font-medium underline underline-offset-4 text-primary">
                See all
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center size-10 rounded bg-primary/20 lg:size-12">
                <CreditCardIcon className="size-5 text-primary lg:size-6" />
              </div>
              <CardTitle>
                <h3 className="text-xl font-bold">
                  License
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    Verifying your number
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to restore your chat history
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to manage your notifications
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className="font-medium underline underline-offset-4 text-primary">
                See all
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center size-10 rounded bg-primary/20 lg:size-12">
                <UndoDotIcon className="size-5 text-primary lg:size-6" />
              </div>
              <CardTitle>
                <h3 className="text-xl font-bold">
                  Refund policy
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to restore your chat history
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to use status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to manage your notifications
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className="font-medium underline underline-offset-4 text-primary">
                See all
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center size-10 rounded bg-primary/20 lg:size-12">
                <UserCircle2Icon className="size-5 text-primary lg:size-6" />
              </div>
              <CardTitle>
                <h3 className="text-xl font-bold">
                  Account
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    About WhatsApp Web and Desktop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to log in or out
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-foreground">
                    How to manage your notifications
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className="font-medium underline underline-offset-4 text-primary">
                See all
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Start your free trial today
          </h2>
          <p className="mb-6 text-muted-foreground md:text-lg">
            Try Flowbite Platform for 30 days. No credit card required.
          </p>
          <a href="#" className={buttonVariants()}>
            Free trial for 30 days
          </a>
        </div>
      </div>
    </section>
  </>
)