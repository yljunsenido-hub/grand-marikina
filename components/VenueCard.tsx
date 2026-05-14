// 1. Import the Image component from Next.js
import Image from 'next/image';

// 2. Add an 'imageUrl' to our expected properties
type VenueCardProps = {
  title: string;
  description: string;
  imageUrl: string; 
};

export default function VenueCard({ title, description, imageUrl }: VenueCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-white transition cursor-pointer">
      
      {/* 3. The Image Container */}
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill // This tells the image to fill the parent container
          className="object-cover" // This prevents the image from looking stretched
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

    </div>
  );
}