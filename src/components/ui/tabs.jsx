"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex flex-wrap md:flex-nowrap items-center justify-between bg-transparent p-2 text-muted-foreground md:gap-x-[20px] border border-[#e5e7e5] h-full md:h-[145px] rounded-[13px] md:rounded-[20px]",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "whitespace-nowrap rounded-[8px] md:rounded-[15px] px-2 lg:px-5 py-2 text-sm font-medium disabled:pointer-events-none data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg w-auto md:w-[130px] h-auto md:h-[125px] flex flex-col items-center justify-center",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
