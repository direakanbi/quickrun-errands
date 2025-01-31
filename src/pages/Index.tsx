import { Hero } from "@/components/Hero";
import { MessengerCard } from "@/components/MessengerCard";
import { Navbar } from "@/components/Navbar";

// Mock data for initial display
const featuredMessengers = [
  {
    id: "1",
    name: "John Doe",
    rating: 4.8,
    completedOrders: 156,
    hourlyRate: 1500,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Jane Smith",
    rating: 4.9,
    completedOrders: 203,
    hourlyRate: 1800,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Mike Johnson",
    rating: 4.7,
    completedOrders: 128,
    hourlyRate: 1600,
    imageUrl: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Messengers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMessengers.map((messenger) => (
            <MessengerCard key={messenger.id} {...messenger} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;