"use client";

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { Menu } from "lucide-react"



const Menus = [
  {title: "home"},{title: "tentang kami"},{title: "layanan kami"},{title: "galery"},{title: "kontak"}
]


const MobileNavbar = ({active, handleScrollTo}) => {
    const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);


  return (
    <>
      <div className="flex items-center justify-center text-black">
        {/* <Button color="alternative" className="bg-opacity-25" onClick={() => setIsOpen(true)}><Menu /></Button> */}
        <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md bg-gray-400 text-black hover:bg-gray-500 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            aria-label="Toggle navigation"
            >
            <Menu className="w-6 h-6" />
        </button>

      </div>


      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="MENU" />
        <DrawerItems>
          <ul className="flex flex-col mt-9 gap-y-9">
              {
                Menus.map(({ title }) => {
                  const id = title.replace(/\s/g, "-")
                  return (
                    <li
                      key={id}
                      onClick={() => handleScrollTo(id)}
                      className={`md:text-lg capitalize font-bold font-poppins px-5 py-1 rounded-full cursor-pointer w-fit
                        ${active === title ? 'bg-primary-color text-white' : 'bg-transparent text-white'
                      }`}
                    >
                      {title}
                    </li>
                  )
                })
              }
              
            </ul>
        </DrawerItems>
      </Drawer>
    </>
  )
}

export default MobileNavbar