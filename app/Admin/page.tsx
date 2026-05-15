import { getInquiries } from "../actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  // THE NEW BOUNCER: Show a locked door, but give them the log out button!
  if (userEmail !== "plukyljunsenido@gmail.com") { // <-- Put your real email here!
    return (
      <main className="min-h-screen bg-gray-900 p-8 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Access Denied</h1>
        <p className="text-gray-400 mb-8">
          The account <span className="text-white font-bold">{userEmail}</span> is not authorized to view this page.
        </p>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg border border-gray-700">
          <p className="mb-4 text-sm text-gray-300">Switch accounts or log out below:</p>
          <UserButton 
            appearance={{
              elements: { userButtonAvatarBox: "!w-16 !h-16", userButtonTrigger: "!w-16 !h-16" }
            }} 
          />
        </div>
      </main>
    );
  }

  // If they pass the check, load the secure database data!
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
              userButtonAvatarBox: "!w-12 !h-12", 
              userButtonTrigger: "!w-12 !h-12" // Increases size to 56px (default is much smaller!)
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
