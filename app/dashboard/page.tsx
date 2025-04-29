import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-5">
      <div>
        <h1 className="text-2xl font-bold">Wellcome John</h1>
        <p className="text-gray-500 mt-5">manage your forms and responses</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Your forms</h2>
          <p className="text-3xl font-bold mt-2">10</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms">View all forms</Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Total Response</h2>
          <p className="text-3xl font-bold mt-2">100</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Create new</h2>
          <p className="text-3xl font-bold mt-2">Start Building Form</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms/create">Create</Link>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-xl font-medium mb-4">Recent Forms</h2>

        <div className="space-y-4">
          <div className="items-center flex justify-between border-b pb-4">
            <div>
              <h3 className="font-medium">This iS title</h3>
              <p className="text-gray-500 mt-2">
                responses . Created on 30 April 2025
              </p>
            </div>
            <div className="flex gap-2">
              <Button asChild>
                <Link href={`/dashboard/forms/1`}>View</Link>
              </Button>
              <Button asChild>
                <Link href={`/dashboard/forms/1/responses`}>Responses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
