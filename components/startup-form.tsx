import { Input } from "./ui/input"
import { Label } from "./ui/label"

const StartupForm = () => {
	return (
		<section className="mt-10">
			<h1 className="text-center text-2xl font-bold">Aggiungi un post</h1>
				<form action="/" className="flex flex-col max-w-xl mx-auto my-10">
					<div>
						<Label htmlFor="title">Title</Label>
						<Input type="text" name="title" placeholder="My New Startup" required />
					</div>
					<div>
						<Label htmlFor="email">Email</Label>
						<Input type="text" name="email" placeholder="My New Startup" required />
					</div>
				</form>
		</section>
	)
}

export default StartupForm