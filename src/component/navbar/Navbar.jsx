'use client'
import Logo from "@/assets/logo-navbar.png"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

const Menus = [
  {title: "home"},{title: "tentang kami"},{title: "layanan kami"},{title: "galery"},{title: "kontak"}
]


const Navbar = () => {
  const [active, setActive] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)


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

  const OnClickMenu =() =>{
    setIsMenuOpen(!isMenuOpen)
    console.log("clicked: ", isMenuOpen)
  }

  return (
    <>
    <div className='bg-white md:px-7 lg:px-9 text-black sticky z-50 top-0 w-screen shadow-md'>
      <div className="flex justify-between items-center">
        
        {/* IMAGE LOGO */}
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-32 md:32 lg:w-36" />
        </Link>

        {/* NAVBAR FOR DESKTOP */}
        <div className="md:hidden lg:block">
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
        
        <button className="bg-gray-200 p-1 rounded-sm text-gray-600 lg:hidden"
        onClick={OnClickMenu}
        ><Menu size={28} /></button>


      </div>
    </div>

    {/* MOBILE NAVBAR */}
      <div className={`bg-black bg-opacity-75 w-full fixed left-0 top-16 z-40 grid grid-cols-3 ${isMenuOpen ? "h-full" : "h-0"} duration-500 lg:hidden overflow-hidden`} 
      onClick={() => setIsMenuOpen(false)} >
        <div className="col-span-2"></div>
        <div className={`bg-gray2 h-full py-7 px-4 ${isMenuOpen ? "h-full" : "h-0"} transition-all duration-500`} onClick={(e) => e.stopPropagation()}>
          <ul className="flex flex-col gap-y-4">
              {
                Menus.map(({ title }) => {
                  const id = title.replace(/\s/g, "-")
                  return (
                    <li
                      key={id}
                      onClick={() => handleScrollTo(id)}
                      className={`md:text-lg capitalize font-bold font-poppins px-5 py-1 rounded-full cursor-pointer w-fit
                        ${active === title ? 'bg-primary-color text-white' : 'bg-transparent text-black'
                      }`}
                    >
                      {title}
                    </li>
                  )
                })
              }
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar