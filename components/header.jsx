// components/Header.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparentPages = ['/', '/ongoing', '/about'];
  const isDetailPage = router.pathname.startsWith('/details');
  const isTransparent =
    (transparentPages.includes(router.pathname) || isDetailPage) && !scrolled;

  const headerBackground = isTransparent ? 'bg-transparent' : 'bg-white';
  const textColor = isTransparent ? 'text-white' : 'text-gray-800';

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBackground}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.h1
            className={`text-2xl font-bold transition duration-300 ${textColor}`}
          >
            Pusula Alüminyum
          </motion.h1>
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX size={24} className={textColor} />
            ) : (
              <HiMenu size={24} className={textColor} />
            )}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {[
            { name: 'Hakkımızda', path: '/about' },
            { name: 'Referanslarımız', path: '/references' },
            { name: 'Devam Eden Çalışmalarımız', path: '/ongoing' },
            { name: 'İletişim', path: '/contact' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Link href={item.path}>
                <a
                  className={`text-sm font-medium ${textColor} transition-all hover:text-blue-500`}
                >
                  {item.name}
                </a>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center"
          >
            {[
              { name: 'Hakkımızda', path: '/about' },
              { name: 'Referanslarımız', path: '/references' },
              { name: 'Devam Eden Çalışmalarımız', path: '/ongoing' },
              { name: 'İletişim', path: '/contact' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="mb-4"
                onClick={() => setMenuOpen(false)}
              >
                <Link href={item.path}>
                  <a className="text-white text-xl font-semibold hover:text-blue-400">
                    {item.name}
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
