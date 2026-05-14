// 1. Import your new backend function
import { getInquiries } from "../../actions"; // Adjust the path if your actions.ts is located elsewhere

// 2. Make the component 'async' so it can wait for the database
export default async function AdminDashboard() {
  
  // 3. Fetch the data securely on the server!
  const inquiries = await getInquiries();

  return (
    <main className="min-h-screen bg-gray-900 p-8 flex flex-col items-center text-white">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <p className="text-gray-400 mb-6">Recent inquiries from your contact form:</p>

        {/* The Data Table */}
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-950 border-b border-gray-700">
              <tr>
                <th className="p-4 font-semibold text-gray-300">Name</th>
                <th className="p-4 font-semibold text-gray-300">Email</th>
                <th className="p-4 font-semibold text-gray-300">Number of Guests</th>
                <th className="p-4 font-semibold text-gray-300">Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              
              {/* 4. Loop through the data and create a row for each inquiry */}
              {inquiries.map((inquiry) => (
                <tr 
                  key={inquiry.id} 
                  className="border-b border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="p-4 font-medium">{inquiry.name}</td>
                  <td className="p-4 text-gray-300">{inquiry.email}</td>
                  <td className="p-4 font-bold text-blue-400">{inquiry.guestTotal}</td>
                  <td className="p-4 text-gray-400">
                    {/* Format the timestamp into a readable date */}
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}

              {/* Show a message if the database is completely empty */}
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