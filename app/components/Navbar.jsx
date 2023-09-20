import React from 'react'
import Link from 'next/link'
import Logo from '../../public/logo.png'
import Image from 'next/image'

const Navbar = () => {
	return (
		<nav>
			<Image
				src={Logo}
				alt='logo'
				width={48}
				quality={100}
				className='rounded-full'
				placeholder='blur'
			/>
			<Link href='/'>Dashboard</Link>
			<Link href='/tickets'>Tickets</Link>
		</nav>
	)
}

export default Navbar
