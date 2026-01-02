import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter, Plus } from "lucide-react";
import { ApplicationModal } from "@/components/ui/ApplicationModal";

/* ---------------- MOCK DATA ---------------- */

const mockApplications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer Intern",
    status: "Interview",
    dateApplied: "2024-01-15",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Frontend Developer",
    status: "Applied",
    dateApplied: "2024-01-12",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Full Stack Developer",
    status: "OA Pending",
    dateApplied: "2024-01-10",
  },
  {
    id: 4,
    company: "Meta",
    role: "Software Engineer",
    status: "Interview",
    dateApplied: "2024-01-08",
  },
  {
    id: 5,
    company: "Apple",
    role: "iOS Developer",
    status: "Rejected",
    dateApplied: "2024-01-05",
  },
  {
    id: 6,
    company: "Netflix",
    role: "Backend Engineer",
    status: "Applied",
    dateApplied: "2024-01-03",
  },
  {
    id: 7,
    company: "Tesla",
    role: "Software Engineer",
    status: "OA Pending",
    dateApplied: "2023-12-28",
  },
];

const statusStyles = {
  Applied: "bg-green-950 text-green-400 border-green-900",
  "OA Pending": "bg-blue-950 text-blue-400 border-blue-900",
  Interview: "bg-yellow-950 text-yellow-400 border-yellow-900",
  Rejected: "bg-red-950 text-red-400 border-red-900",
};

/* ---------------- APPLICATIONS PAGE ---------------- */

export default function Applications() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* ---------- NAVBAR ---------- */}
      <nav className="border-b border-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">SkillForge</div>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 gap-2"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Add Application
          </Button>
        </div>
      </nav>

      {/* ---------- CONTENT ---------- */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <header className="mb-8 space-y-2">
          <h1 className="text-4xl font-bold">Applications</h1>
          <p className="text-lg text-gray-400">
            Track and manage all your job applications
          </p>
        </header>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6 p-4 bg-[#111] border border-gray-800 rounded-lg">
          <p className="text-gray-300">
            <span className="font-semibold text-white">
              {mockApplications.length}
            </span>{" "}
            total applications
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-300 bg-transparent hover:bg-gray-900 gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Applications List */}
        <div className="space-y-3">
          {mockApplications.map((app) => (
            <Card
              key={app.id}
              className="bg-[#111] border-gray-800 p-5 hover:border-gray-700 cursor-pointer transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <h3 className="font-semibold">{app.company}</h3>

                <p className="md:col-span-2 text-gray-300">{app.role}</p>

                <div className="flex justify-between md:justify-end items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      statusStyles[app.status]
                    }`}
                  >
                    {app.status}
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {app.dateApplied}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* ---------- ADD APPLICATION MODAL ---------- */}
      <ApplicationModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
      />
    </div>
  );
}
