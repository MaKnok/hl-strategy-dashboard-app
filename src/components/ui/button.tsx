import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-default-button shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[var(--color-button-outline)] border-3 text-primary text-outline-button bg-background-outline shadow-xs hover:bg-primary hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        outlinelogin:
          "border border-white border-3 text-default-button bg-background-outline shadow-xs hover:bg-white hover:text-primary dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        platformlogin:
          "border-0 text-platform-button bg-white shadow-xs [&_[data-slot='platform-icon']]:size-6 [&_[data-slot='platform-icon']]:shrink-0 [&_[data-slot='platform-icon']:not([class*='size-'])]:size-6 gap-4",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "text-accent-foreground hover:text-primary dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        linklogin: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 py-2 has-[>svg]:px-3",
        sm: "h-12 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-14 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        platform: "h-16 px-5 py-3 has-[>svg]:px-4",
        link: "h-8 px-4 py-2 has-[>svg]:px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
