"use client"
import {delay, motion} from "framer-motion"
import Mesin from "@/assets/mesin-suzuki3.png"
import Shadow from "@/assets/decoration/shadow.png"
import Image from "next/image"



const textVariant = (num) => {
  const resutls = {
    hidden: {width: "100%", right: 0},
    visible: {
      width: "0%",
      transition: {
        duration: 0.7,
        delay: num,
        ease: "easeInOut"
      }
    }
  }
  return resutls
}

const Hero = () => {
  const headingText = [
    {title: "sand", sub: "blasting", delay: 0.1},
    {title: "vapor", sub: "blasting", delay: 0.3 , style: "my-4"},
    {title: "powder", sub: "coating", delay: 0.5}
  ]

  return (
    <div className='relative  h-screen w-full overflow-hidden' id="hero">


        <div className="grid grid-cols-2 h-full">
          
          {/* LEFT SECTION */}
          <div className="flex flex-col lg:pl-16 md:pl-6  justify-center pb-14 ">

          {/* HERO TEXT */}
          {
            headingText.map((item, i ) => 
              <motion.h1 className={`font-lucidity md:text-5xl lg:text-6xl tracking-wide text-primary-color relative w-fit overflow-hidden ${item.style}`}
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.1}}
              >{item.title}
                <span className="text-black">{item.sub}</span>
                  {/* TEXT ANIMATION */}
                  <motion.div className="absolute w-full h-full rounded-md top-0 left-0 bg-primary-color" variants={textVariant(item.delay)}></motion.div>
                  {/* TEXT ANIMATION */}
              </motion.h1>
            )
          }


            <motion.p className="font-poppins lg:text-lg md:text-md my-7 font-semibold lg:w-3/4 md:w-5/6"
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 100}}
            viewport={{once: true, amount: 0.1}}
            transition={{duration: .8, ease: "easeInOut"}}
            > Perbaiki dan percantik tampilan part motor atau mobil Anda dengan hasil finishing yang tahan lama dan profesional.
            </motion.p>





            <div className="">
              <motion.button className="bg-primary-color font-poppins text-lg capitalize font-bold py-2 px-8 rounded-full text-white relative overflow-hidden shadow-lg md:text-sm md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
              >lihat hasil kerja
                {/* ANIMATION MOTION */}
                <motion.div className="absolute w-full h-full rounded-md top-0 left-0 bg-primary-color" variants={textVariant(0.5)}></motion.div>

              </motion.button>
            </div>


          </div>
          {/* LEFT SECTION END */}





          {/* HERO IMAGE SECTION */}
          <motion.div
            className="flex items-center justify-center overflow-hidden relative w-full z-20"
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Image src={Mesin} alt="mesin" className="bg-cover lg:w-4/5 md:w-full md:-mt-16 md:-ml-6 ml-9 lg:-mt-6 z-10" />
            <Image src={Shadow} alt="SHADOW" className="bg-cover lg:w-4/5 md:w-full md:-ml-6 ml-9 lg:-mt-6 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Image src={Shadow} alt="SHADOW" className="bg-cover lg:w-4/5 md:w-full md:-ml-6 ml-9 lg:-mt-6 absolute top-2/3 md:top-[58%] left-2/3 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>


        </div>





    </div>
  )
}

export default Hero