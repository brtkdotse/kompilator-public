import React from "react"
import { Link } from "gatsby"
import Seo from "./seo"
import Discord from "../../content/assets/Discord.png"
import toplogo from "../../content/assets/header-logo.png"
import HamburgerMenu from "./hamburger-menu"
  

const Layout = ({ location, title, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = () => alert("hej");
  
  return (
   <>
   <Seo title={title} />
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 no-boxshadow">
      <div className="relative bg-white overflow-hidden">

        <div x-data="{ open: false }" className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <img className="h-8 w-auto sm:h-10" src={toplogo} alt="" />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden md:block md:ml-10">
                <a href="/avsnitt" className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Avsnitt</a>
                {/* <a href="/delta-i-kompilator" className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Delta</a>
                <a href="/sponsorer" className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Sponsorer</a>
                <a href="/om-kompilator" className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Om podcasten</a> */}
              </div>
            </div>
            <div class="hidden md:block text-right">
        <span class="inline-flex rounded-md shadow-md">
          <span class="inline-flex rounded-md shadow-xs">
            <a href="https://discord.gg/AhdGPV6" target="_blank" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-grey-600 bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
             <img className="h-8 w-auto" src={Discord} />
            </a>
          </span>
        </span>
      </div>
          </nav>

          <HamburgerMenu visible={false}/>

          {children}

        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center md:order-2">
           <a href="https://twitter.com/kompilatorpod" className="ml-6 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
           
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2020 <a href="https://yoisho.se">Yoisho AB</a>
      </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout
