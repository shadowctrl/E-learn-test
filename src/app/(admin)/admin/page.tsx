import { redirect } from 'next/navigation';
import { checkRole } from '@/utils/roles';
import { clerkClient } from '@clerk/nextjs/server';

export default async function AdminDashboard(params: {
	searchParams: Promise<{ search?: string }>;
}) {
	const isAdmin = await checkRole('admin');
	if (!isAdmin) {
		return redirect('/student/dashboard');
	}

	const query = (await params.searchParams).search;

	const client = await clerkClient();

	const users = query ? (await client.users.getUserList({ query })).data : [];

	return (
		<>
			<h1 className="text-center text-4xl">Admin Route</h1>
		</>
	);
}
