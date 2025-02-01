import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-foreground text-xl font-bold">
            QuickRun Errands
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-foreground hover:text-secondary transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Errands, Our Messengers</h1>
        <p className="text-muted-foreground mb-8">
          QuickRun connects you with reliable messengers to handle your errands quickly and
          efficiently.
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-secondary/90 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose QuickRun?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Fast & Reliable</h3>
              <p className="text-muted-foreground">
                Our messengers are verified and ready to handle your errands promptly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Secure Payments</h3>
              <p className="text-muted-foreground">
                Pay directly to messengers with no hidden fees.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Transparent Ratings</h3>
              <p className="text-muted-foreground">
                Choose the best messengers based on client reviews and ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2023 QuickRun Errands. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;