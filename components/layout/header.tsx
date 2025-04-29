import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-background border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl">
            Form Builder
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-3 ">
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/forms"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {" "}
                  My Forms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/dashboard/forms/create">Create Form</Link>
          </Button>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
