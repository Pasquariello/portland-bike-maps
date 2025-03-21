'use client'

import { open_sans } from "@/ui/fonts"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './nav.module.css';

const navItems = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Skills Assessment Notes',
        link: '/notes',
    },
    {
        title: 'PBOT Info',
        link: 'https://www.portland.gov/transportation',
    },
    
];

const NavItems = ({backgroundColor}: {backgroundColor: string}) => {
    const pathname = usePathname();
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control hamburger menu visibility

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {      
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      }     
      else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = ''; // Cleanup on unmount
      };
    }, [isMenuOpen, windowWidth]);

    useEffect(() => {
      // Ensure the code runs only on the client-side
      if (typeof window !== 'undefined') {

        const handleResize = () => {
          setWindowWidth(window.innerWidth);

          if (window.innerWidth > 768) {
            setIsMenuOpen(false);
          }
        };
        handleResize();
          window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);

  
    return (
      <nav 
        className={styles.nav}
        style={{
          background: backgroundColor
        }}
      >
        {/* Hamburger icon for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
  
        {/* Nav links */}
        <div
          className={`${open_sans.className} ${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}
        >
          {navItems.map((navItem) => (
            <Link
              key={navItem.title}
              href={navItem.link}
              className={open_sans.className}
              style={{
                color: pathname === navItem.link ? '#FBAD18' : '#fff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              {navItem.title}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

export default NavItems