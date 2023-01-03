import React, { useState, useEffect } from 'react'
import DarkSwitch from './dark-switch'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-4">
      <h1 className="text-5xl font-bold tracking-tighter">
        Clo.Mid
      </h1>
      <div>
        <DarkSwitch />
      </div>
    </section>
  )
}

export default Intro
