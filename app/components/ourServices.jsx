import React from 'react'
import { packagesdata } from './data'

const OurServices = () => {
  return (
      <div className="container mx-auto w-full">
          <div className='relative py-16 lg:py-20 mx-auto'>
               <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-400">
           Our Service
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
          <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
              {packagesdata.map((packages) => (
                  <div className="max-w-md sm:mx-auto sm:text-center" key={packages.id}>
                      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50 sm:mx-auto sm:w-24 sm:h-24">
                          <svg
                              className="w-12 h-12 text-green-400 sm:w-16 sm:h-16"
                              stroke="currentColor"
                              viewBox="0 0 52 52"
                          >
                              <polygon
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                                  
                              />
                          </svg>
                      </div>
                      <h6 className="mb-3 text-xl font-bold leading-5">{packages.desc}</h6>
                      <p className="mb-3 text-sm text-gray-900">
                          {packages.text}
                      </p>
                      <a
                          href="/"
                          aria-label=""
                          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      >
                          Learn more
                      </a>
                  </div>
              ))}
          </div>
          </div>
     
      </div>
  )
}

export default OurServices
