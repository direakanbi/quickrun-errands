import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for initial development
const mockMessengerData = {
  "1": {
    name: "John Doe",
    rating: 4.8,
    completedOrders: 156,
    hourlyRate: 1500,
    imageUrl: "/placeholder.svg",
    matricNumber: "2019/1234",
    availability: "Available",
    bio: "Fast and reliable messenger with 2 years of experience.",
  },
  "2": {
    name: "Jane Smith",
    rating: 4.9,
    completedOrders: 203,
    hourlyRate: 1800,
    imageUrl: "/placeholder.svg",
    matricNumber: "2020/5678",
    availability: "Busy",
    bio: "Specializing in quick campus deliveries and errands.",
  },
  "3": {
    name: "Mike Johnson",
    rating: 4.7,
    completedOrders: 128,
    hourlyRate: 1600,
    imageUrl: "/placeholder.svg",
    matricNumber: "2019/9012",
    availability: "Available",
    bio: "Experienced in handling various types of errands with care.",
  },
};

const MessengerProfile = () => {
  const { id } = useParams();
  const messenger = mockMessengerData[id as keyof typeof mockMessengerData];

  if (!messenger) {
    return <div className="container mx-auto px-4 py-8">Messenger not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex flex-row items-center gap-4 p-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={messenger.imageUrl} alt={messenger.name} />
            <AvatarFallback>{messenger.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{messenger.name}</h1>
                <p className="text-sm text-gray-500">Matric Number: {messenger.matricNumber}</p>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{messenger.rating.toFixed(1)}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                messenger.availability === "Available" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {messenger.availability}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-gray-600">{messenger.bio}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold">₦{messenger.hourlyRate}</p>
              <p className="text-sm text-gray-500">Hourly Rate</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold">{messenger.completedOrders}</p>
              <p className="text-sm text-gray-500">Orders Completed</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold">{messenger.rating}</p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Book This Messenger
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessengerProfile;