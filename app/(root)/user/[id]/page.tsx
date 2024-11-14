import { client } from '@/sanity/lib/client';
import { USER_BY_ID } from '@/sanity/lib/queries';
import React from 'react'

const UserPage = async ({ params } : { params: Promise<{ id: string }>}) => {
	const id = (await params).id;
	const user = await client.fetch(USER_BY_ID, { id })
	return (
		<section>
			<h1>{user.name}</h1>
		</section>
	)
}

export default UserPage