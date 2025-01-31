import { MessengerCard } from "@/components/MessengerCard";
import { Navbar } from "@/components/Navbar";

// Mock data for initial development
const mockMessengers = [
  {
    id: "1",
    name: "John Doe",
    rating: 4.8,
    completedOrders: 156,
    hourlyRate: 1500,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "2",
    name: "Jane Smith",
    rating: 4.9,
    completedOrders: 203,
    hourlyRate: 1800,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    id: "3",
    name: "Mike Johnson",
    rating: 4.7,
    completedOrders: 128,
    hourlyRate: 1600,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Available Messengers</h1>
          <p className="text-gray-600 mt-2">Find reliable messengers for your errands</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMessengers.map((messenger) => (
            <MessengerCard
              key={messenger.id}
              {...messenger}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
