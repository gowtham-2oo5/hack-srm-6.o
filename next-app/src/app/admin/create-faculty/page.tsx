"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type React from "react"; // Added import for React

export default function CreateFaculty() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Faculty</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="department">Department</Label>
          <Input id="department" required />
        </div>
        <div>
          <Label htmlFor="specialization">Specialization</Label>
          <Input id="specialization" required />
        </div>
        <Button type="submit">Create Faculty</Button>
      </form>
    </div>
  );
}
