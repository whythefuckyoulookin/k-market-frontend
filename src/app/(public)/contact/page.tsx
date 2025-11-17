import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoyIcon, MailIcon, PhoneIcon } from "lucide-react";

export default () => (
  <>
    <section>
      <div className="bg-primary/10">
        <div className="max-w-2xl px-4 mx-auto text-center pb-72 lg:pb-80 pt-20 sm:pt-24 lg:pt-32">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mb-16 text-muted-foreground sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
      </div>
      <div className="max-w-7xl px-4 py-16 mx-auto -mt-96 sm:py-24">
        <Card className="max-w-3xl mx-auto mb-16 lg:mb-28">
          <CardContent>
            <form action="#" className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="first-name">
                  First Name
                </FieldLabel>
                <Input type="text" id="first-name" placeholder="Bonnie" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="last-name">
                  Last Name
                </FieldLabel>
                <Input type="text" id="last-name" placeholder="Green" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">
                  Your email
                </FieldLabel>
                <Input type="email" id="email" placeholder="name@flowbite.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone-number">
                  Phone Number
                </FieldLabel>
                <Input type="number" id="phone-number" placeholder="+12 345 6789" required />
              </Field>
              <div className="sm:col-span-2 space-y-4">
                <Field>
                  <FieldLabel htmlFor="message">
                    Your message
                  </FieldLabel>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Leave a comment..."
                    defaultValue={""}
                  />
                </Field>
                <Field orientation='horizontal'>
                  <Checkbox id="default-checkbox-1" />
                  <FieldLabel htmlFor="default-checkbox-1">
                    <span>
                      I confirm that I have read and agree to our{" "}
                      <a
                        className="font-medium underline underline-offset-4"
                        href="#"
                      >
                        Terms of Service
                      </a>.
                    </span>
                  </FieldLabel>
                </Field>
                <Field orientation='horizontal'>
                  <Checkbox id="default-checkbox-2" />
                  <FieldLabel htmlFor="default-checkbox-2">
                    <span>
                      I confirm that I have read and agree to our{' '}
                      <a
                        className="font-medium underline underline-offset-4"
                        href="#"
                      >
                        Privacy Statement
                      </a>
                      .
                    </span>
                  </FieldLabel>
                </Field>
              </div>
              <Button type="submit" className="sm:w-fit">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-16 md:space-y-0">
          <div>
            <div className="flex items-center justify-center size-10 mx-auto mb-4 bg-muted rounded lg:size-16">
              <MailIcon className="size-5 text-muted-foreground lg:size-8" />
            </div>
            <p className="mb-2 text-xl font-bold">
              Email us:
            </p>
            <p className="mb-3 text-muted-foreground">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="mailto:abc@example.com"
              className="font-medium underline underline-offset-4"
            >
              hello@flowbite.com
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center size-10 mx-auto mb-4 bg-muted rounded lg:size-16">
              <PhoneIcon className="size-5 text-muted-foreground lg:size-8" />
            </div>
            <p className="mb-2 text-xl font-bold ">
              Call us:
            </p>
            <p className="mb-3 text-muted-foreground">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <span className="font-medium underline underline-offset-4">
              +1 (646) 786-5060
            </span>
          </div>
          <div>
            <div className="flex items-center justify-center size-10 mx-auto mb-4 bg-muted rounded lg:size-16">
              <LifeBuoyIcon className="size-5 text-muted-foreground lg:size-8" />
            </div>
            <p className="mb-2 text-xl font-bold">
              Support
            </p>
            <p className="mb-3 text-muted-foreground">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a href="#" className={buttonVariants({ variant: "outline" })}>
              Support center
            </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get started with Flowbite today
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Connecting with your audience has never been easier with Flowbite
            straightforward email marketing and automation tools.
          </p>
        </div>
        <form action="#" className="max-w-lg mx-auto mt-8">
          <div className="block sm:flex items-center mb-3">
            <div className="w-full mr-3 mb-4 sm:mb-0">
              <label htmlFor="member_email" className="sr-only">
                Email address
              </label>
              <InputGroup>
                <InputGroupInput id="member_email" type="email" placeholder="Enter your email" required />
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div>
              <Button type="submit" className="w-full sm:w-auto">
                Try for free
              </Button>
            </div>
          </div>
          <div className="text-sm text-left">
            Instant signup. No credit card required.
          </div>
        </form>
      </div>
    </section>
  </>
)