import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<Link
			className="text-4xl cursor-pointer flex justify-center hover:underline"
			href={'/admin'}
		>
			Click me for admin route
		</Link>
	);
};

export default Page;
