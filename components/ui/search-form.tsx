import Form from 'next/form'
import { Input } from './input'
import SearchFormReset from './search-form-reset'
import { Button } from './button'

import { FaSearch } from "react-icons/fa";


const SearchForm = ({ query }: { query?: string }) => {
	return (
		<Form action='/discover' scroll={false} className='search-form relative inline-block w-full' >
			<input name='query' defaultValue='' placeholder='Cerca una Startup' className='p-4 border-[1px] w-full rounded-full' />
			<div className='absolute top-2 right-2 flex gap-1 sm:gap-3 bg-white/40 backdrop-blur-sm rounded-full'>
				{/* If query, show reset button */}
				{query && <SearchFormReset />}
				<Button type='submit' className='rounded-full w-10 h-10' size='icon'>
					<FaSearch />
				</Button>
			</div>
		</Form>
	)
}

export default SearchForm