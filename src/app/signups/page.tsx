import { prisma } from '@/lib/prisma';

interface Signup {
  id: string;
  email: string;
  userType: string;
  createdAt: Date;
}

export default async function SignupsPage({ searchParams }: { searchParams: Promise<{ password?: string }> }) {
  const params = await searchParams;
  if (params.password !== 'charity') {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-2 text-gray-600">Invalid password. Use ?password=</p>
      </div>
    );
  }

  const signups: Signup[] = await prisma.waitlist.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Email Signups ({signups.length})</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {signups.map((signup) => (
              <tr key={signup.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{signup.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                  {signup.userType.replace('_', ' ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {signup.createdAt.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}