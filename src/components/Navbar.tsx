import Link from 'next/link';
import StickyText from './StickyText';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownToLine, CornerDownRight, Earth, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [hasMixBlend, setHasMixBlend] = useState(false);
  const [isScrollMenuOpen, setIsScrollMenuOpen] = useState(false);

  const toggleScrollMenu = () => {
    setIsScrollMenuOpen(!isScrollMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      setHasMixBlend(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${hasMixBlend ? 'mix-blend-exclusion' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <StickyText text='ulive' className='uppercase text-xl font-regular text-blanco-50' />
            </div>
            <ul className={`hidden text-lg text-blanco-50 font-regular sm:flex items-center ${hasMixBlend ? "space-x-5" : "space-x-8"} `}>
              <div className='flex items-center justify-center rounded-full border-1 w-15'>
                <Link href="/login" className="bg-secondary-500 items-center justify-center text-white px-2 py-2 rounded-md hover:bg-secondary-600">
                  <ArrowDownToLine size={16} strokeWidth={1.25} />
                </Link>
              </div>
              
              <AnimatePresence mode="wait">
                {!hasMixBlend ? (
                  <motion.div
                    key="menu-items"
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-8"
                  >
                    
                    <li>
                      <a href="#about" className="text-blanco-50 hover:text-gray-900 navbar-link-white">About</a>
                    </li>
                    <li>
                      <a href="#features" className="text-blanco-50 hover:text-gray-900 navbar-link-white">Features</a>
                    </li>
                    <li>
                      <a href="#trends" className="text-blanco-50 hover:text-gray-900 navbar-link-white">Trends</a>
                    </li>
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-button"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="hidden lg:block z-50 items-center justify-center rounded-full border-1 bg-secondary-500 text-white px-2 py-2 hover:bg-secondary-600"
                      onClick={toggleScrollMenu}
                      aria-label="Toggle scroll menu"
                    >
                      {isScrollMenuOpen ? <X size={16} /> : <Menu size={16} />}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </ul>
            <div className="sm:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu overlay fuera del nav para evitar mix-blend */}
      <div className="isolation-auto">
        <AnimatePresence>
          {(isScrollMenuOpen && hasMixBlend) && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:block fixed inset-0 backdrop-blur-[2px] z-40"
                onClick={toggleScrollMenu}
              />
              <motion.div
                className="hidden lg:block p-2 fixed w-80 top-2 right-6 bg-slate-100 shadow-md z-40 rounded-xl overflow-hidden"
                initial={{ opacity: 0, height: 0, x: 300 }}
                animate={{ opacity: 1, height: 'auto', x: 0 }}
                exit={{ opacity: 0, height: 0, x: 100 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col py-8 px-6 space-y-4">
                  <li><a className="navbar-link text-3xl" href="#home">Home</a></li>
                  <li><a className="navbar-link text-3xl" href="#about">About</a></li>
                  <li><a className="navbar-link text-3xl" href="#features">Features</a></li>
                  <li><a className="navbar-link text-3xl" href="#trends">Trends</a></li>
                  <li><a className="navbar-link text-3xl" href="#ourapp">Our App</a></li>
                  <li><a className="navbar-link text-3xl" href="#more">More</a></li>
                </ul>
                <div className='px-6 pb-8 flex flex-col'>
                  <div className='w-auto h-[1.5px] bg-zinc-500 mb-5' />
                  <p className='text-slate-700 text-lg mb-2 flex items-center gap-2'>Send me an email <span><Earth width={18} /></span></p>

                  <div className='flex items-center gap-2'>
                    <div className='bg-stone-500 w-fit p-1' style={{ borderRadius: 4 }}>
                      <CornerDownRight width={32} />
                    </div>
                    <li className='list-none'><a className='navbar-link text-3xl' target='_blank'>Contact Me</a></li>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
