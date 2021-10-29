/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div className="bg-transparent">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex-shrink flex justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-5 w-auto sm:h-5"
                        src="https://ik.imagekit.io/misfans/logo-white_7Uy8UN3Sx.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-white border-opacity-5 text-base font-medium rounded-md text-white bg-white bg-opacity-5 hover:bg-opacity-10 transition duration-500 ease-in-out"
                    >
                      Iniciar sesión
                    </a>
                  </span>
                </div>
              </nav>
            </div>
          </Popover>

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-6xl tracking-tight font-extrabold text-white sm:text-6xl md:text-8xl">
              El link-in-bio de los creadores
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-50 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
                Crea, crece y monetiza tu audiencia. Todo desde un solo lugar.
              </p>
              <button
                type="button"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base text-center font-medium rounded-full text-white bg-purple-600 mt-6 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Crear mi cuenta
              </button>
            </div>
          </div>

          

          <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="https://ik.imagekit.io/misfans/Bloques_-_Selector_Open_2__xy5S7Zwo.png"
              alt="App screenshot"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
