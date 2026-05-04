"use client";

import { Button } from "@/components/ui/button";
import logo from "@/public/assets/Logo.svg";
import { Contact } from "@/app/constants/GlobalConstants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { MdAddIcCall, MdMarkEmailRead } from "react-icons/md";

export default function PopoverBasic() {
  return (
    <Popover>
      {/* ✅ FIX: use render prop to avoid nested button */}
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className="text-foreground px-4 py-2 transition"
          />
        }
      >
        Contact Us
      </PopoverTrigger>

      {/* ✅ Clean Content */}
      <PopoverContent
        side="bottom"
        align="center"
        className="w-72 p-4 rounded-xl shadow-lg border border-border bg-popover"
      >
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <Image src={logo} alt="logo" width={80} height={40} className="opacity-50" />
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground text-center">
          Need Help?
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground text-center mt-1 mb-4">
          Reach out to us using the details below.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          {/* Email */}
          <a
            href={`mailto:${Contact.email}`}
            className="flex items-center gap-2 hover:bg-muted/50 p-2 rounded-md transition"
          >
            <MdMarkEmailRead size={18} className="text-muted-foreground" />
            <span className="font-medium text-foreground">Email:</span>
            <span className="text-primary truncate">{Contact.email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${Contact.number}`}
            className="flex items-center gap-2 hover:bg-muted/50 p-2 rounded-md transition"
          >
            <MdAddIcCall size={18} className="text-muted-foreground" />
            <span className="font-medium text-foreground">Phone:</span>
            <span className="text-primary">{Contact.number}</span>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}