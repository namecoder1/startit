'use client'
import Link from "next/link";
import { Button } from "./button"
import { RiDeleteBack2Fill } from "react-icons/ri";

const SearchFormReset = () => {
	const reset = () => {
		const form = document.querySelector('form') as HTMLFormElement;
		if(form) form.reset()
	}
	return (
		<Button type='reset' onClick={reset} size='icon' className='rounded-full w-10 h-10' asChild>
			<Link href='/discover'>
				<RiDeleteBack2Fill />
			</Link>
		</Button>
	)
}

export default SearchFormReset