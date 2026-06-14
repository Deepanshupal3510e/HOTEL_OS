"use client"
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import navLogo from "../../public/logos/main.png"
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Contact, Handshake, House } from 'lucide-react'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const user = useSelector(state => state.user)
    const pathname = usePathname()

    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: House
        },
        {
            path: "/deals",
            text: "Deal",
            icon: Handshake
        },
        {
            path: "/contact",
            text: "Contact",
            icon: Contact
        },
    ]



    return (
        <div className='nav-bg fixed top-0 px-2 z-100 md:px-20 py-1 flex justify-between items-center w-full overflow-hidden'>
            <Link href="/">
                <motion.div initial={{
                    opacity: 1,
                    x: -250,
                }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}

                    transition={{
                        duration: 0.4,
                        delay: 0.5,
                        type: "spring"
                    }}
                >
                    <Image
                        className='h-15 w-auto'
                        src={navLogo}
                        width={500}
                        height={500}
                        alt='Logo'
                    />
                </motion.div>
            </Link>
            <motion.div
                initial={{
                    x: 600,
                    opacity: 1,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.5,
                    type: "spring"
                }}
                className='h-full flex justify-end items-center gap-3'>


                <div className='flex justify-center items-center gap-5 mr-5'>
                    {navItems.map((value) => {
                        const Icon = value.icon
                        return (
                            <Link key={value.text} href={value.path} className={`flex ${pathname === value?.path ? "nav-active" : "nav-text"} flex-col gap-0 justify-center items-center cursor-pointer`}>
                                <Icon />
                                <p className='text-sm '>{value.text}</p>
                            </Link>
                        )
                    })}
                </div>

                <Link href="/login" className='secondary-button border-2 px-8 py-1.5 cursor-pointer duration-300 rounded-sm  text-lg' >
                    Login
                </Link>
                <Link href="/register" className='primary-button px-8 py-2 cursor-pointer duration-300 rounded-sm  text-lg'>
                    Register
                </Link>
            </motion.div>
        </div>
    )
}

export default Navbar