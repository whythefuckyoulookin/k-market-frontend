import { GalleryVerticalEndIcon } from "lucide-react";
import type { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => (
  <div className="bg-primary/10 flex min-h-svh flex-col items-center gap-6 p-6 md:p-10 md:justify-center">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <a href="#" className="flex items-center gap-2 self-center font-medium">
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <GalleryVerticalEndIcon className="size-4" />
        </div>
        Acme Inc.
      </a>
      {children}
    </div>
  </div>
)