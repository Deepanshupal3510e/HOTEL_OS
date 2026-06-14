"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/public/logos/loader_rm_bg.png";

import {
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

import { Switch } from "@mui/material";

const SearchBar = () => {
  const [isDay, setIsDay] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{
        y: 300,
        width: 160,
        height: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        width: "90%",
        opacity: 1,
      }}
      transition={{
        y: {
          type: "spring",
          stiffness: 90,
          damping: 8,
        },
        width: {
          delay: 0.45,
          type: "spring",
          stiffness: 120,
          damping: 18,
        },
      }}
      className="flex justify-center items-center"
    >
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="logo"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.75,
            }}
            transition={{
              duration: 0.3,
            }}
            className="h-32 w-auto primary-bg rounded-md"
          >
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </motion.div>
        ) : (
          <motion.div
            key="search-card"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
            }}
            className="w-fit primary-bg rounded-xl shadow-lg p-4 md:p-6"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col"
              >
                <p className="text-[#C5A059] font-semibold text-sm">
                  Starting from
                </p>

                <span
                  className="text-[#1B3B5D] text-3xl font-bold cursor-pointer"
                >
                  ₹ 2599
                </span>
              </motion.div>

              {/* Day Usage */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3"
              >
                <Switch
                  checked={isDay}
                  onChange={() => setIsDay(!isDay)}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#C5A059",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                      {
                        backgroundColor: "#C5A059",
                      },
                  }}
                />

                <span
                  onClick={() => setIsDay(!isDay)}
                  className="text-[#1B3B5D] font-medium cursor-pointer"
                >
                  Day Usage
                </span>
              </motion.div>

              {/* Dates */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <CalendarDays className="w-5 h-5 text-[#C5A059]" />

                <span className="text-[#1B3B5D] font-semibold">
                  15 Jun - 16 Jun
                </span>
              </motion.div>

              {/* Guests */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-3 flex-1"
              >
                <Users className="w-5 h-5 text-[#C5A059]" />

                <span className="text-[#1B3B5D] font-semibold">
                  1 Guest, 1 Room
                </span>
              </motion.div>

              {/* Search Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                className="premium-button h-14 px-8 rounded-xl flex items-center gap-2 font-semibold"
              >
                <Search size={18} />
                Search
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchBar;