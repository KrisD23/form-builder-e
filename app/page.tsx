import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl">Form Builder</h1>
          <div>
            <Button>Sign in</Button>
          </div>
        </div>
      </header>
      <div className="bg-blue-50 flex-1">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Create Forms with Ease
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Build forms, Collect responses and analyse data
          </p>
          <Button asChild size="lg">
            <Link href="/dashboard/forms/create">Create a Form</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
