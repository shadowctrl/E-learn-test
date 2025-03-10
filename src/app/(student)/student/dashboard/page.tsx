import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<>
			<h1 className="text-center text-4xl">Student unprotected Route</h1>
		</>
	);
};

export default Page;
