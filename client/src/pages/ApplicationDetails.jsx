import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  FileText,
  CheckCircle2,
  Clock,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ApplicationDetails() {
  const navigate = useNavigate();

  // Mock data
  const application = {
    id: "1",
    company: "Google",
    role: "Software Engineer Intern",
    status: "Interview",
    dateApplied: "Jan 15, 2024",
    resumeVersion: "Resume_v2_GoogleOptimized.pdf",
    currentStage: "Interview",
  };

  const timeline = [
    { stage: "Applied", date: "Jan 15, 2024", status: "completed" },
    { stage: "OA Pending", date: "Jan 20, 2024", status: "completed" },
    { stage: "Interview", date: "Jan 28, 2024", status: "active" },
    { stage: "Offer", date: null, status: "pending" },
  ];

  const notes = `OA was difficult. Need to improve arrays and time complexity.
The coding round had 2 questions:
1. Two Sum Variation
2. Tree Traversal with Constraints`;

  const aiSuggestion = `Most candidates fail at interview stage due to weak fundamentals.
Focus on DSA, clean code, and explaining your approach clearly.
Practice mock interviews regularly.`;

  const getStatusColor = (status) => {
    const colors = {
      Applied: "bg-green-500/10 text-green-500 border-green-500/20",
      "OA Pending": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      Interview: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      Offer: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
      Rejected: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return colors[status] || colors.Applied;
  };

  const getTimelineIcon = (status) => {
    if (status === "completed")
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    if (status === "active")
      return <Clock className="w-5 h-5 text-yellow-500" />;
    return (
      <div className="w-5 h-5 rounded-full border-2 border-gray-700" />
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <nav className="border-b border-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">SkillForge</div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/applications")}
            className="border-gray-700 text-gray-300 bg-transparent hover:bg-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Applications
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">{application.company}</h1>
          <p className="text-xl text-gray-400 mt-2">{application.role}</p>
          <span
            className={`inline-block mt-4 px-3 py-1 rounded-full text-sm border ${getStatusColor(
              application.status
            )}`}
          >
            {application.status}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary */}
            <Card className="bg-[#111] border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Application Summary
              </h2>

              <InfoRow
                icon={<Calendar className="w-5 h-5 text-gray-500" />}
                label="Date Applied"
                value={application.dateApplied}
              />
              <InfoRow
                icon={<Clock className="w-5 h-5 text-gray-500" />}
                label="Current Stage"
                value={application.currentStage}
              />
              <InfoRow
                icon={<FileText className="w-5 h-5 text-gray-500" />}
                label="Resume Used"
                value={application.resumeVersion}
              />
            </Card>

            {/* Notes */}
            <Card className="bg-[#111] border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Notes & Feedback
              </h2>
              <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                {notes}
              </p>
            </Card>

            {/* AI Suggestions */}
            <Card className="bg-[#111] border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-indigo-500" />
                <h2 className="text-xl font-semibold">AI Suggestions</h2>
              </div>
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {aiSuggestion}
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div>
            <Card className="bg-[#111] border-gray-800 p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6">
                Status Timeline
              </h2>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {getTimelineIcon(item.status)}
                      {idx < timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-800 mt-2" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-medium ${
                          item.status === "active"
                            ? "text-yellow-500"
                            : item.status === "completed"
                            ? "text-gray-200"
                            : "text-gray-600"
                        }`}
                      >
                        {item.stage}
                      </p>
                      {item.date && (
                        <p className="text-sm text-gray-500 mt-1">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- Helper -------- */

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-200">{value}</p>
      </div>
    </div>
  );
}
