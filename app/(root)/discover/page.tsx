import { STARTUPS_QUERY } from '@/sanity/lib/queries'
import StartupCard, { StartupTypeCard } from '@/components/ui/startup-card'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import Header from '@/components/header'
import SearchForm from '@/components/ui/search-form'
import { Separator } from '@/components/ui/separator'

const DiscoverPage = async ({ searchParams }: { searchParams: Promise<{ query?: string }>}) => {
	const query = (await searchParams).query;
	const params = { search: query || null}
	const { data: startups } = await sanityFetch({ query: STARTUPS_QUERY, params })
	return (
		<section>
			<Header title='Discover' text='Scopri le ultime novità dalla community nel campo delle startups. Crea e visualizza subito post e opportunità.'>
				<SearchForm query={query} />
			</Header>	
		  <h2 className='text-left text-2xl font-bold mb-4'>
				{query ? (`Risultati per "${query}"`) : ('Tutte le startups')}
			</h2>
			<Separator className='my-1' />
			<ul className='flex flex-col gap-y-10 gap-x-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-7'>
				{startups.map((startup: StartupTypeCard) => {
					return <StartupCard startup={startup} />
				})}
				<SanityLive />
			</ul>
		</section>
	)
}

export default DiscoverPage