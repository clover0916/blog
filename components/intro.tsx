import React from 'react'
import DarkSwitch from './dark-switch'

const Intro = () => {
  return (
    <section className="flex-initial">
      <div className='flex-row flex items-center justify-between  py-4'>
        <h1 className="text-5xl font-bold tracking-tighter">
          Clo.Mid
        </h1>
        <div>
          <DarkSwitch />
        </div>
      </div>
    </section>
  )
}

export default Intro
