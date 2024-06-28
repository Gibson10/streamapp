"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (<header className="flex items-center justify-between py-10 px-10 lg:px-20 w-full bg-black text-white relative">
        <Link href="/">
            <Image src="assets/img/logo.svg" alt='logo' width={0} height={0} className='w-12 md:w-16' />
        </Link>
        <Image src="assets/img/ham-menu.svg" alt='ham-menu' width={0} height={0} className='md:hidden w-12' onClick={() => setMenuOpen(true)} />
        <nav className={`${menuOpen ? 'flex' : 'hidden'} h-screen md:h-full fixed left-0 top-0 z-30 md:static md:flex flex-col md:flex-row gap-y-16 md:gap-y-0 md:justify-between items-center w-screen md:w-4/5 xl:w-3/5 bg-black`}>
            <div className='flex md:hidden flex-row p-8 justify-between items-center w-full'>
                <Link href="/">
                    <Image src="assets/img/logo.svg" alt='logo' width={0} height={0} className='w-12 md:w-16' />
                </Link>
                <Image src="assets/img/menu-cross.svg" alt='cross' width={0} height={0} className='w-10 md:mt-auto' onClick={() => setMenuOpen(false)} />
            </div>
            <ul className="flex flex-col items-center md:items-start md:flex-row space-y-10 md:space-y-0 space-x-0 md:space-x-10 font-normal text-base leading-7">
                {['Our Platform', 'Our Film Library', 'Roadmap', 'Presale', 'Team'].map((item) => (
                    <li key={item}>
                        <Link className="hover:underline" href={`#${item.toLowerCase().split(' ').join('-')}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link className='font-semibold leading-6 text-center' href="/app">
                Login
            </Link>
            <Image src="assets/img/an-user.svg" alt='an-user' width={21} height={21} />
        </nav>
        <div className='absolute top-0 right-1/2 -z-10 bg-white' /> {/* TODO: */}
    </header>
    )
};

export default Header;
