import { Card } from './card';
import { Badge } from './badge';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from './separator';
import { Button } from './button';

import { FaEye } from 'react-icons/fa'
import { Author, Startup } from '@/sanity/types';

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ startup }: { startup: StartupTypeCard }) => {
const { 
	_createdAt,
	views, 
	author,
	title,
	category,
	_id,
	slug,
	image,
	description
 } = startup;
	return (
		<li key={_id}>
			<Card className='w-full md:max-w-md border-none drop-shadow-lg mx-auto'>
				<time className='hidden'>{_createdAt}</time>
				<div className='relative inline-block w-full'>
					<Image className='object-cover w-fit h-64 rounded-t-lg' src={`${image}`} alt='Immagine di copertina' width={400} height={200} />
					<Badge className='absolute top-3 right-3'>{category}</Badge>
				</div>
				<div className='flex flex-col items-start justify-center px-3 pb-3 mt-2'>
					<h1 className='text-2xl font-bold mb-2'>{title}</h1>
					<p className='line-clamp-3 mb-2'>{description}</p>
					<Button asChild variant='outline' size='sm' className='w-full'><Link href={`/startup/${_id}`}>Leggi tutto</Link></Button>
					<Separator className='mt-3' />
					<div className='flex items-center justify-between mt-3 w-full'>
						<div className='flex items-center justify-center gap-1.5'>
							<Image className='w-8 h-8 rounded-full border-[1px] border-gray-300' src={`${author?.image}`} alt={`${author?.name}`} width={20} height={20} />
							<p className='text-sm text-gray-500 hover:text-gray-700'>{author?.name}</p>
						</div>
						<div className='mr-1'>
							<FaEye className='inline-block mr-1 size-5 mb-1 text-gray-700' /><span>{views}</span>
						</div>
					</div>
				</div>
			</Card>
		</li>

	)
}

export default StartupCard