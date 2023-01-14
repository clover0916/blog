import { useEffect, useState } from "react"

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PageTransition from '../components/PageTransition'

import '../styles/index.scss'

import Loading from "../components/loading"
import { useRouter } from "next/router"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [Loaded, setLoaded] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(1)
    }, 3500)
    setTimeout(() => {
      setLoaded(2)
    }, 3800)
  }, []);

  return (
    <PageTransition>
      <ThemeProvider attribute="class">
        {!(Loaded === 2) && <Loading Loaded={Loaded} />}
        <Component {...pageProps} />
      </ThemeProvider>
    </PageTransition>
  )
}
