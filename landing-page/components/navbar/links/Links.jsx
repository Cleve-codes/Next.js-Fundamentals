"use client";
import React from 'react'
import { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
import Image from 'next/image'

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
]


const Links = () => {
  // Mobile Nav State
  const [openMobileNav, setOpenMobileNav] = useState(false)

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
        <div className=''>
    <div className={styles.links}>
      {links.map((link, index) => (
        <NavLink key={index} item={link} />
        ))}
      { session ? (
        <>
        { isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} /> }
        <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} />
        ) }
    </div>

    {/* <button className={styles.menuButton} onClick={() => setOpenMobileNav(prev => !prev)}>Menu</button> */}

        <Image
          src='/menu.png'
          alt='' width={20}
          height={20}
          className={styles.menuButton}
          onClick={() => setOpenMobileNav(prev => !prev)}
        />

    {openMobileNav && (

      <div className={styles.mobileLinks}>
        {
          links.map((link, index) => (
          <NavLink key={index} item={link} />
          ))}
          { session ? (
            <>
            { isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} /> }
            <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: 'Login', path: '/login' }} />
            ) }
        </div>

      )}

    </div>
  )
}

export default Links