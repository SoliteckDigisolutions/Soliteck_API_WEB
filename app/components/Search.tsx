"use client";

import * as React from "react";
import { payoutDocs } from "@/app/constants/payOut";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { IoSearchOutline } from "react-icons/io5";

export default function CommandSearch() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4 bg-white">
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="flex items-center gap-2"
      >
        <IoSearchOutline />
        Search API's
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search API..." />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="API Navigation">
              {payoutDocs.Endpoints.map((endpoint: any, index: number) => {
                const id = `endpoint-${index}`;

                return (
                  <CommandItem
                    key={id}
                    value={endpoint.title}
                    onSelect={() => {
                      const element = document.getElementById(id);
                      console.log(element, "shad");

                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                        });
                      }

                      setOpen(false);
                    }}
                  >
                    {endpoint.title}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
