import React from 'react'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { FormatDate } from '@/components/ui/format-date';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaRegUserCircle } from 'react-icons/fa';

import markdownit from 'markdown-it'

const md = markdownit()

export const experimental_ppr = true;

const StartupPage = async ({ params }: { params: Promise<{ id: string}>}) => {
	const id = (await params).id;
	const startup = await client.fetch(STARTUP_BY_ID_QUERY,  { id })

	if (!startup) notFound();

	const parsedContent = md.render(startup?.pitch || '')

	return (
		<section className='flex flex-col my-20'>
			<div className='flex items-center justify-between f-full'>
				<div>
					<h1 className='text-2xl font-bold'>{startup.title}</h1>
					<h2><FormatDate dateString={startup._createdAt}/></h2>
				</div>
				<Badge>{startup.category}</Badge>
			</div>
			<Image src={startup.image} width={1000} height={600} alt={startup.title} className='w-full h-full my-3 rounded-2xl aspect-square object-cover sm:aspect-auto sm:object-fill' />
			<div className='flex items-center justify-between w-full border bg-gray-100 p-5 rounded-2xl mt-2'>
				<div className='flex items-center justify-start gap-2'>
					<Image src={startup.author?.image} alt='Immagine profilo' width={60} height={60} className='rounded-full drop-shadow-md' />
					<div className='flex flex-col items-start justify-center text-left'>
						<p>{startup.author?.name}</p>
						<p className='underline underline-offset-2 text-zinc-500'>@{startup.author?.username}</p>
					</div>
				</div>
				<div>
					<Button asChild>
						<Link href={`/user/${startup.author?._id}`}><FaRegUserCircle className='inline-block' />Profilo</Link>
					</Button>
				</div>
			</div>
			<div>
				{parsedContent ? (
					<article dangerouslySetInnerHTML={{ __html: parsedContent }} />
				) : (
					<p>Nessun dettaglio è stato fornito dal creatore di questo post.</p>
				)}
			</div>
		</section>
	)
}

export default StartupPage