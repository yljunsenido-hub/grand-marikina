import { getInquiries } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const inquiries = await getInquiries();

  return (
    <main className="min-h-screen bg-gray-900 p-8 flex flex-col items-center text-white">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full text-left">
            <thead className="bg-gray-950">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Guests</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="border-t border-gray-700">
                  <td className="p-4">{inquiry.name}</td>
                  <td className="p-4">{inquiry.email}</td>
                  <td className="p-4">{inquiry.guestTotal}</td>
                  <td className="p-4">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}

              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No inquiries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
