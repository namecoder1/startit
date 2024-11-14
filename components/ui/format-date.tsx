type FormatDateProps = {
	dateString: string;
};

const formatDate = (dateString: string): string => {
	// Parse the input date string
	const date = new Date(dateString);

	// Format the date using Intl.DateTimeFormat with 'it-IT' locale
	const formattedDate = new Intl.DateTimeFormat('it-IT', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZone: 'UTC' // Ensures consistent handling of the input time zone
	}).format(date);

	return formattedDate;
};

export const FormatDate: React.FC<FormatDateProps> = ({ dateString }) => {
	return <span>{formatDate(dateString)}</span>;
};
