"use client"
import SearchBar from "@/components/home/SearchBar"
import hero_bg from "../public/bg/hero_bg.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="relative w-full h-screen bg-cover" style={{ backgroundImage: `url(${hero_bg.src})` }} >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full flex flex-col items-center pt-50 text-center px-6"
        >
          <h1 className="secondary-text text-5xl md:text-7xl font-bold leading-tight">
            Every Stay Has a Story.
          </h1>

          <p className=" max-w-3xl mt-4 text-lg font-semibold primary-text">
            Discover handpicked hotels, exceptional comfort, and memorable
            experiences crafted for every journey.
          </p>
        </motion.div >
        <div className="w-full flex justify-center mt-15">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Home