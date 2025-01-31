import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface MessengerCardProps {
  id: string;
  name: string;
  rating: number;
  completedOrders: number;
  hourlyRate: number;
  imageUrl: string;
}

export const MessengerCard = ({
  id,
  name,
  rating,
  completedOrders,
  hourlyRate,
  imageUrl,
}: MessengerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">
            {completedOrders} orders completed
          </p>
          <p className="text-sm font-semibold">
            ₦{hourlyRate}/hour
          </p>
        </div>
        <Link to={`/messenger/${id}`}>
          <Button className="w-full" variant="secondary">
            View Profile
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};