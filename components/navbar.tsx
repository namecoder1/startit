import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Button } from './ui/button'

import logo from "@/public/logo.png"

import { FaRegUserCircle, FaAngleDown} from 'react-icons/fa'
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbSettings } from "react-icons/tb";

const navbar = async () => {
	const session = await auth()
	return (
		<header className='rounded-full drop-shadow-xl bg-white border-[1px] border-black/10 p-3 mx-3 mt-3 sm:w-fit sm:mx-auto'>
			<nav className='flex items-center w-full gap-x-10 sm:gap-x-28 justify-between pr-1'>
				<Link href='/' className='flex gap-2 items-center justify-center'>
					<Image src={logo} alt='StartIt' width={40} height={40} />
					<h1 className='text-xl font-semibold'>StartIt</h1>
				</Link>
				{session && session?.user ? (
					<>
						<ul className='hidden sm:flex'>
							<li><Link href='/add'>Add</Link></li>
						</ul>
						<Popover>
							<PopoverTrigger className='flex items-center justify-center gap-2'>
								<Image src={`${session?.user.image}`} alt='Immagine utente' width={25} height={25} className='rounded-full' />
								<span className='text-xs sm:text-base'>{session.user.name}<FaAngleDown className='inline-block ml-1' /></span>
							</PopoverTrigger>
							<PopoverContent className='w-fit mt-1'>
								<div className='flex items-start justify-center flex-col p-1 gap-y-2'>
									<Link href='/profile' className='flex items-center justify-center gap-2'><FaRegUserCircle />Profile</Link>
									<Link href='/add' className='flex sm:hidden items-center justify-center gap-2'><IoMdAddCircleOutline />Add</Link>
									<Link href='/setting' className='flex sm:hidden items-center justify-center gap-2'><TbSettings />Setting</Link>
									<Separator className='mb-1' />
									<form action={async () => {
										'use server'
										await signOut({ redirectTo: '/' })
									}}>
										<Button variant='destructive' size='xs' type='submit'>Sign out</Button>
									</form>
								</div>
							</PopoverContent>
						</Popover>
					</>
				) : (
					<Button asChild variant='outline' size='xs' className='rounded-full px-3'><Link className='text-black' href='/'>Login</Link></Button>
				)}
			</nav>
		</header>
	)
}

export default navbar