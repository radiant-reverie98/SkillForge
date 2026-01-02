import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, CheckCircle2 } from "lucide-react";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <nav className="border-b border-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="text-2xl font-bold">SkillForge</div>
        </div>
      </nav>

      {/* Main */}
      <main className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Upload Your Resume
            </h1>
            <p className="text-xl text-gray-400">
              Upload your resume to get instant ATS and skill insights.
            </p>
          </div>

          {/* Upload Card */}
          <Card
            className={`bg-[#111111] border-gray-800 p-12 transition-all ${
              isDragging ? "border-indigo-600 bg-[#151515]" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border border-gray-800">
                  <Upload className="w-10 h-10 text-gray-400" />
                </div>

                <div className="text-center space-y-2">
                  <p className="text-lg text-gray-300">
                    {selectedFile
                      ? selectedFile.name
                      : "Drag and drop your resume here, or click to browse"}
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF or DOCX • Max size 2MB
                  </p>
                </div>
              </div>

              <input
                id="file-upload"
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileSelect}
              />
            </label>
          </Card>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              disabled={!selectedFile}
              className="bg-indigo-600 hover:bg-indigo-700 px-12 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Analyze Resume
            </Button>
          </div>

          {/* Guidance */}
          <div className="space-y-6 pt-8 border-t border-gray-900">
            <p className="text-center text-sm text-gray-500">
              Your resume is processed securely and never shared.
            </p>

            <div className="space-y-3 max-w-md mx-auto">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide text-center">
                Tips for best results
              </h3>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-600 mt-0.5" />
                <p className="text-sm text-gray-500">
                  Single-column resumes work best
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-600 mt-0.5" />
                <p className="text-sm text-gray-500">
                  Avoid images and tables
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-600 mt-0.5" />
                <p className="text-sm text-gray-500">
                  Clearly list your skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 mt-20">
        <div className="container mx-auto px-4 py-12 text-center space-y-2">
          <div className="text-2xl font-bold">SkillForge</div>
          <p className="text-sm text-gray-500">
            AI-powered career assistant for placements
          </p>
        </div>
      </footer>
    </div>
  );
}
