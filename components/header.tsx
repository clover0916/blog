import Link from 'next/link'
import DarkSwitch from './dark-switch'

const Header = () => {
  return (
    <section className="flex-row flex items-center justify-between mb-20 mt-8 mx-8">
      <h2 className="text-4xl font-bold tracking-tight">
        <Link href="/" className="hover:underline">
          Clo.Mid
        </Link>
      </h2>
      <div>
        <DarkSwitch />
      </div>
    </section>

  )
}

export default Header
