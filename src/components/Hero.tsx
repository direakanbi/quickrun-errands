import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Campus Errand Service
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Connect with trusted student messengers to handle your errands quickly and reliably.
        </p>
        <div className="space-x-4">
          <Link to="/signup">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </Link>
          <Link to="/messengers">
            <Button size="lg" variant="outline" className="bg-white/10">
              Browse Messengers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};