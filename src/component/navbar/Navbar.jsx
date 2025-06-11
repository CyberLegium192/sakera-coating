'use client'
import Logo from "@/assets/logo-navbar.png"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import MobileNavbar from "./MobileNavbar"
const Menus = [
  {title: "home"},{title: "tentang kami"},{title: "layanan kami"},{title: "galery"},{title: "kontak"}
]


const Navbar = () => {
  const [active, setActive] = useState("home")



  // Scroll dan set aktif ketika diklik
  const handleScrollTo = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActive(id)
      } else {
        console.warn("Elemen tidak ditemukan untuk ID:", id)
      }
    }, 100) // tunggu 100ms
  }

  // Cek scroll posisi untuk auto highlight menu aktif
  useEffect(() => {
    const handleScroll = () => {
      let current = "home"
      Menus.forEach(({ title }) => {
        const el = document.getElementById(title.replace(/\s/g, "-"))
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = title
          }
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <>
    <div className='bg-white md:px-7 lg:px-9 sm:px-9 max-sm:px-2 text-black sticky z-50 top-0 w-screen shadow-md'>
      <div className="flex justify-between items-center">
        
        {/* IMAGE LOGO */}
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-32 md:32 lg:w-36 max-sm:w-28" />
        </Link>

        {/* NAVBAR FOR DESKTOP */}
        <div className="md:hidden lg:block sm:hidden max-sm:hidden">
            <ul className="flex items-center md:gap-x-0 lg:gap-x-3">
              {
                Menus.map(({ title }) => {
                  const id = title.replace(/\s/g, "-")
                  return (
                    <li
                      key={id}
                      onClick={() => handleScrollTo(id)}
                      className={`md:text-sm lg:text-[16px] capitalize font-bold font-poppins px-5 py-1 rounded-full cursor-pointer ${
                        active === title ? 'bg-primary-color text-white' : 'bg-transparent text-black'
                      }`}
                    >
                      {title}
                    </li>
                  )
                })
              }
            </ul>
        </div>
        
        <div className="lg:hidden">
          <MobileNavbar active={active} handleScrollTo={handleScrollTo}/>
        </div>


      </div>
    </div>


    </>
  )
}

export default Navbar