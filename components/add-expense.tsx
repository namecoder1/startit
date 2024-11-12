import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


const AddExpense = () => {
	return (
		<div>
			<form action="/" className="flex flex-col items-center justify-center gap-y-5 max-w-fit mx-auto my-10">
			<div className="flex flex-col items-start justify-center gap-y-5">
				<div>
					<Label htmlFor="causal">Causal:</Label>
					<Input type="text" name="causal"  />
				</div>
				<div>
					<Label htmlFor="price">Price:</Label>
					<Input type="text" name="price"  />
				</div>
			</div>
				<Button type="submit">Add</Button>
			</form>
		</div>
	);
};

export default AddExpense;