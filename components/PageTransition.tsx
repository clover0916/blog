import { useRouter } from "next/router";
import { motion, AnimatePresence } from 'framer-motion'
import { Children } from "react";

type Props = {
  children: React.ReactNode
}

const PageTransition = ({children}: Props) => {
  const router = useRouter();

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        key={router.asPath}
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.5
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence >
  )
}

export default PageTransition
