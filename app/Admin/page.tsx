import { getInquiries } from "../actions";
import { UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const inquiries = await getInquiries();

  return (
    <main className="min-h-screen bg-gray-900 p-8 flex flex-col items-center text-white">

      {/* 1. The Header Row: Matches the table width and pushes the button to the far right */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        
        {/* 2. The Bigger User Button: Using Clerk's appearance prop to inject Tailwind sizing */}
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "!w-16 !h-16", 
              userButtonTrigger: "!w-16 !h-16" // Increases size to 56px (default is much smaller!)
            }
          }}
        /> 
      </div>

      {/* 3. The Table Container */}
      <div className="w-full max-w-5xl">
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
