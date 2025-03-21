'use client'

import { open_sans } from "@/ui/fonts"
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavItems = () => {

    const pathname = usePathname();


    const navItems = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Blog Page',
            link: '/blog',
        },
        {
            title: 'PBOT Info',
            link: 'https://www.portland.gov/transportation',
        },
       
    ];

    return (
        <div className={`${open_sans.className} nav-links`} style={{ display: 'flex', gap: 80, }}>
            {navItems.map(navItem => {
                return (
                    <Link 
                        key={navItem.title} href={navItem.link}
                        className={open_sans.className} 
                        style={{color: pathname === navItem.link ? '#FBAD18' : '#fff', textDecoration: 'none', fontWeight: 700}} 
                    >
                        {navItem.title}
                    </Link>   
                )
            })}
        </div>
    )

}

export default NavItems