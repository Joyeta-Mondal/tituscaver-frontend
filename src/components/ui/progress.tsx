"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showSegments?: boolean;
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, showSegments = false, ...props }, ref) => {
    if (showSegments) {
      // Calculate which segments should be filled
      const segment1Filled = (value || 0) >= 25;
      const segment2Filled = (value || 0) >= 50;
      const segment3Filled = (value || 0) >= 75;
      const segment4Filled = (value || 0) >= 100;

      return (
        <div
          ref={ref as React.ForwardedRef<HTMLDivElement>}
          className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-200", className)}
          {...props}
        >
          <div className="flex h-full w-full">
            <div className={cn("h-full w-1/4", segment1Filled ? "bg-blue-500" : "bg-gray-200")} />
            <div className={cn("h-full w-1/4", segment2Filled ? "bg-blue-500" : "bg-gray-200")} />
            <div className={cn("h-full w-1/4", segment3Filled ? "bg-blue-500" : "bg-gray-200")} />
            <div className={cn("h-full w-1/4", segment4Filled ? "bg-blue-500" : "bg-gray-200")} />
          </div>
        </div>
      );
    }

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="bg-primary h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  },
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
