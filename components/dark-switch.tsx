import React, { useState, useEffect } from 'react'

import { motion } from "framer-motion";
import { useTheme } from 'next-themes'

import { RiMoonFill, RiSunFill } from 'react-icons/ri'

import style from "../styles/dark-switch.module.scss"

export default function DarkModeSwitch() {
  const { resolvedTheme, theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 40
  };

  return (
    <>
      {mounted && (
        <div onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={`flex-start flex ${style.TapHighlightColor} h-[50px] w-[100px] rounded-[50px] bg-zinc-200 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${resolvedTheme === 'dark' ? 'place-content-end' : ""}`}>
          <motion.div
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white dark:bg-zinc-900"
            layout
            transition={spring}
          >
            <motion.div>
              {!(resolvedTheme === 'dark') ? (<RiSunFill className="h-6 w-6 text-slate-900" />) : (<RiMoonFill className="h-6 w-6 text-slate-200" />)}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  )
}