import { getInquiries } from "../actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server"; // 1. Import the server user
import { redirect } from "next/navigation"; // 2. Import Next.js redirect

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // 3. Grab the currently logged-in user's profile from Clerk
  const user = await currentUser();

  // 4. Extract their primary email address
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  // 5. THE BOUNCER: If the email doesn't match YOURS, kick them out!
  if (userEmail !== "plukyljunsenido@gmail.com") {
    redirect("/"); // Instantly boots them to the public homepage
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
