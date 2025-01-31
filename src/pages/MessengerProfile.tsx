import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageCircle } from "lucide-react";
import { ErrandBookingForm } from "@/components/ErrandBookingForm";
import { MessengerReviews } from "@/components/MessengerReviews";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NotFound } from "./NotFound";

// Mock data for initial development
const mockMessengerData = {
  "1": {
    name: "John Doe",
    rating: 4.8,
    completedOrders: 156,
    hourlyRate: 1500,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    matricNumber: "2019/1234",
    availability: "Available",
    bio: "Fast and reliable messenger with 2 years of experience.",
    reviews: [
      {
        id: "1",
        userId: "user1",
        userName: "Alice Smith",
        rating: 5,
        comment: "Very professional and quick delivery!",
        date: "2024-02-15",
      },
      {
        id: "2",
        userId: "user2",
        userName: "Bob Johnson",
        rating: 4,
        comment: "Good service, would use again.",
        date: "2024-02-14",
      },
    ],
  },
  "2": {
    name: "Jane Smith",
    rating: 4.9,
    completedOrders: 203,
    hourlyRate: 1800,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    matricNumber: "2020/5678",
    availability: "Busy",
    bio: "Specializing in quick campus deliveries and errands.",
    reviews: [],
  },
  "3": {
    name: "Mike Johnson",
    rating: 4.7,
    completedOrders: 128,
    hourlyRate: 1600,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    matricNumber: "2019/9012",
    availability: "Available",
    bio: "Experienced in handling various types of errands with care.",
    reviews: [],
  },
};

const MessengerProfile = () => {
  const { id } = useParams();
  const messenger = mockMessengerData[id as keyof typeof mockMessengerData];

  if (!messenger) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Avatar className="w-full h-auto aspect-square">
                <AvatarImage src={messenger.imageUrl} alt={messenger.name} />
                <AvatarFallback>{messenger.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold">{messenger.name}</h1>
                  <p className="text-sm text-gray-500">Matric Number: {messenger.matricNumber}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{messenger.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  messenger.availability === "Available" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {messenger.availability}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{messenger.bio}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold">₦{messenger.hourlyRate}</p>
                  <p className="text-sm text-gray-500">Hourly Rate</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold">{messenger.completedOrders}</p>
                  <p className="text-sm text-gray-500">Orders</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold">{messenger.rating}</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1" size="lg">
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <ErrandBookingForm 
                      messengerId={id as string} 
                      messengerName={messenger.name}
                    />
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="lg" className="flex-1">
                  <MessageCircle className="mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <MessengerReviews reviews={messenger.reviews} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessengerProfile;