interface HeaderProps {
	title: string;
	text: string;
	children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, text, children  }) => {
	return (
		<header className="border-[1px] bg-gray-100 w-full my-10 rounded-lg text-center py-5 px-5" >
			<h1 className="font-bold text-2xl">{title}</h1>
			<p className="mt-2 max-w-lg mx-auto">{text}</p>
			<div className="mt-4">
				{children}
			</div>
		</header>
	);
};

export default Header;