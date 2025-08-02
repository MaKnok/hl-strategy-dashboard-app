"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface PlatformIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const PlatformIcon = ({ src, alt, className, ...props }: PlatformIconProps) => (
  <img
    src={src}
    alt={alt}
    width={32}
    height={32}
    loading="lazy"
    className={cn("shrink-0", className)}
    {...props}
  />
);

export { PlatformIcon };
