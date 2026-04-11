'use client'

import { Button } from "@/components/ui/button"
import  logo from "@/public/assets/Logo.svg"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
import { MdAddIcCall, MdMarkEmailRead } from "react-icons/md"

export default function PopoverBasic() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="w-fit boder shadow text-gray-900  bg-gray-300">Contact Us</Button>} />
        <PopoverContent align="center">
          <PopoverHeader>
            <PopoverTitle>
                <Image className="w-20 mt-2 opacity-40" alt="logo" src={logo}/>
            </PopoverTitle>
            <PopoverDescription>
             <div className="mt-6 rounded-xl text-sm border border-gray-200 bg-gray-100 p-2 shadow-sm">
  
  <div className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
    <span className="text-blue-600"></span> Need Help?
  </div>

  <span className="text-sm text-gray-600 mb-3">
    If you require any assistance, please contact us using the details below.
  </span>

  <div className="space-y-2 text-sm">
    
    <div className="flex items-center gap-1">
      <span className="text-gray-500"><MdMarkEmailRead size={18} /></span>
      <span className="text-gray-700 font-medium">Email:</span>
      <a
        href="mailto:sanjay.shirsat@soliteck.com"
        className="text-blue-600 hover:underline"
      >
        sanjay.shirsat@soliteck.com
      </a>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-gray-500"><MdAddIcCall size={18} /></span>
      <span className="text-gray-700 font-medium">Phone:</span>
      <a
        href="tel:+917977525091"
        className="text-blue-600 hover:underline"
      >
        +91 79775 25091
      </a>
    </div>

  </div>

</div>
              
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  )
}
