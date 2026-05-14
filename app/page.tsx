// 1. Import the Link component at the top of the file
import Link from 'next/link';
import VenueCard from '../components/VenueCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-6 mt-10">
        Grand Marikina Events Place
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Book your dream wedding or corporate event today.
      </p>

      {/* 2. Use your component multiple times! */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
        <VenueCard 
          title="The Grand Ballroom" 
          description="A luxurious space for up to 500 guests with crystal chandeliers." 
          imageUrl="/wedding_bg1.jpg"
        />
        <VenueCard 
          title="The Garden Pavilion" 
          description="An outdoor, nature-inspired venue perfect for intimate weddings." 
          imageUrl="/wedding_bg2.jpeg"
        />
      </div>
      
      <div className="flex gap-4">
        <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition">
          View Availability
        </button>
        
        {/* 2. Use the Link component here */}
        <Link href="/About" className="bg-transparent border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">
          Learn More About Us
        </Link>
      </div>
    </main>
  );
}