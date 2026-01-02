import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import {
  Briefcase,
  XCircle,
  Calendar,
  Trophy,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";

/* ---------------- MOCK DATA ---------------- */

const stats = {
  totalApplications: 24,
  rejections: 8,
  interviews: 5,
  offers: 2,
};

const funnel = [
  { label: "Applied", value: 24 },
  { label: "OA Cleared", value: 12 },
  { label: "Interviews", value: 5 },
  { label: "Offers", value: 2 },
];

const recentApplications = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    status: "Interview",
  },
  {
    company: "Meta",
    role: "Frontend Developer",
    status: "OA Pending",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    status: "Applied",
  },
];

const statusStyles = {
  Interview: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "OA Pending": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Applied: "bg-green-500/10 text-green-500 border-green-500/20",
};

/* ---------------- DASHBOARD ---------------- */

export default function Dashboard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="border-b border-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">SkillForge</div>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Application
          </Button>
        </div>
      </nav>

      {/* ---------------- MAIN ---------------- */}
      <main className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400 text-lg">
            Overview of your job applications and progress
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Briefcase className="w-8 h-8 text-indigo-500" />}
            value={stats.totalApplications}
            label="Total Applications"
          />
          <StatCard
            icon={<XCircle className="w-8 h-8 text-red-500" />}
            value={stats.rejections}
            label="Rejections"
          />
          <StatCard
            icon={<Calendar className="w-8 h-8 text-yellow-500" />}
            value={stats.interviews}
            label="Interviews"
          />
          <StatCard
            icon={<Trophy className="w-8 h-8 text-green-500" />}
            value={stats.offers}
            label="Offers"
          />
        </section>

        {/* Insights + Funnel */}
        <section className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-[#111] border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-500" />
              <h2 className="text-xl font-semibold">AI Insights Summary</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Most rejections occur after online assessments. Improving DSA
              fundamentals and problem-solving speed can significantly increase
              interview conversion.
            </p>
          </Card>

          <Card className="bg-[#111] border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-indigo-500" />
              <h2 className="text-xl font-semibold">Application Funnel</h2>
            </div>
            <div className="space-y-3">
              {funnel.map((step) => (
                <div
                  key={step.label}
                  className="flex justify-between p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg"
                >
                  <span className="text-gray-300">{step.label}</span>
                  <span className="font-semibold">{step.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Recent Applications */}
        <section>
          <Card className="bg-[#111] border-gray-800 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 bg-transparent hover:bg-gray-900"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Application
              </Button>
            </div>

            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div
                  key={app.company}
                  className="flex justify-between items-center p-4 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-gray-700"
                >
                  <div>
                    <p className="font-semibold">{app.company}</p>
                    <p className="text-sm text-gray-400">{app.role}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm border ${statusStyles[app.status]}`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>

      {/* ---------------- ADD APPLICATION MODAL ---------------- */}
      <ApplicationModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
      />
    </div>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({ icon, value, label }) {
  return (
    <Card className="bg-[#111] border-gray-800 p-6">
      <div className="flex justify-between items-center mb-4">
        {icon}
        <div className="text-3xl font-bold">{value}</div>
      </div>
      <p className="text-sm text-gray-400">{label}</p>
    </Card>
  );
}
