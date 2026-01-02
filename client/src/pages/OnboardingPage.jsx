import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

export default function OnboardingPage() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  const [customSkill, setCustomSkill] = useState("");

  const roles = [
    { id: "frontend", label: "Frontend Developer" },
    { id: "backend", label: "Backend Developer" },
    { id: "fullstack", label: "MERN / Full-Stack Developer" },
  ];

  const experienceLevels = [
    { value: "student", label: "Student / Fresher" },
    { value: "0-1", label: "0–1 years" },
    { value: "1-3", label: "1–3 years" },
    { value: "3+", label: "3+ years" },
  ];

  const availableSkills = [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "SQL",
    "TypeScript",
    "Express.js",
    "Next.js",
    "DSA",
    "Git",
    "HTML/CSS",
    "REST APIs",
    "Redux",
    "Tailwind CSS",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const addCustomSkill = () => {
    const skill = customSkill.trim();
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setCustomSkill("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file only");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10MB");
      return;
    }

    setResumeFile(file);
  };

  const isFormValid =
    selectedRole && experience && selectedSkills.length > 0 && resumeFile;

  const handleSubmit = () => {
    if (!isFormValid) return;

    // TODO: Send onboarding data to backend
    console.log({
      role: selectedRole,
      experience,
      skills: selectedSkills,
      resume: resumeFile,
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl font-bold text-gray-100">
            Let&apos;s personalize SkillForge for you
          </h1>
          <p className="text-lg text-gray-400">
            This will take less than 2 minutes
          </p>
        </div>

        <Card className="bg-[#111] border-gray-800 p-8 space-y-8">
          {/* Target Role */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-200">
              Target Role <span className="text-red-500">*</span>
            </Label>
            <div className="grid gap-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedRole === role.id
                      ? "border-indigo-600 bg-indigo-600/10"
                      : "border-gray-800 bg-[#0a0a0a] hover:border-gray-700"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-200">
              Experience Level <span className="text-red-500">*</span>
            </Label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-800 bg-[#0a0a0a] text-gray-300 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Select experience</option>
              {experienceLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-200">
              Skills <span className="text-red-500">*</span>
            </Label>

            {selectedSkills.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-indigo-600/20 text-indigo-400 rounded-md"
                  >
                    {skill}
                    <button onClick={() => toggleSkill(skill)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1.5 rounded-md text-sm ${
                    selectedSkills.includes(skill)
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Add custom skill"
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
                className="bg-[#0a0a0a] border-gray-800"
              />
              <Button variant="outline" onClick={addCustomSkill}>
                Add
              </Button>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-200">
              Upload Resume <span className="text-red-500">*</span>
            </Label>

            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div
                className={`p-6 border-2 border-dashed rounded-lg ${
                  resumeFile
                    ? "border-indigo-600 bg-indigo-600/10"
                    : "border-gray-800 bg-[#0a0a0a]"
                }`}
              >
                <div className="text-center space-y-2">
                  <Upload className="mx-auto w-8 h-8 text-gray-400" />
                  <p className="text-sm">
                    {resumeFile ? resumeFile.name : "Upload PDF (max 10MB)"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-lg"
          >
            Continue to Dashboard
          </Button>
        </Card>
      </div>
    </div>
  );
}
