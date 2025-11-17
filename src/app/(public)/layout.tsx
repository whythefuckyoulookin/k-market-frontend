import { Header } from "@/components/blocks/public/header";
import { Separator } from "@/components/ui/separator";
import { AxeIcon } from "lucide-react";
import type { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="w-full *:even:bg-secondary *:even:border-y">
      {children}
      <footer>
        <div className="p-4 mx-auto max-w-7xl sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:space-y-0">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">
                Company
              </h3>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">
                Help center
              </h3>
              <ul className="text-muted-foreground ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">
                Legal
              </h3>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">
                Company
              </h3>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">
                Download
              </h3>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="mb-6 lg:mb-8" />
          <div className="flex flex-col justify-between items-center text-center lg:flex-row">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold lg:mb-0"
            >
              <AxeIcon className="mr-2 size-8" />
              Flowbite
            </a>
            <span className="block mb-6 text-sm text-muted-foreground lg:mb-0">
              © 2021-2022{" "}
              <a href="#" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div className="mb-6 lg:mb-0">
              {/* <ModeToggle /> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  </>
)