import React from 'react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Target, TrendingUp, BarChart3, Zap, Award } from "lucide-react";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Navigation Header */}
      <nav className="border-b border-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-100">SkillForge</div>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Forge the Skills Companies Want
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              AI-powered resume analysis, skill gap detection, and placement-focused insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
                Analyze My Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <Card className="bg-[#111111] border-gray-800 p-6 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-200">Resume Analysis</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-400">Active</span>
                  </div>
                </div>

                {/* Score Circle */}
                <div className="flex items-center justify-center py-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full border-8 border-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-indigo-500">78</div>
                        <div className="text-xs text-gray-500">Score</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full border-8 border-indigo-600 border-t-transparent border-l-transparent transform rotate-45"></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-gray-800">
                    <span className="text-sm text-gray-300">ATS Readiness</span>
                    <span className="text-sm font-semibold text-green-500">Good</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-gray-800">
                    <span className="text-sm text-gray-300">Skill Gaps Found</span>
                    <span className="text-sm font-semibold text-yellow-500">4 gaps</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-gray-800">
                    <span className="text-sm text-gray-300">Improvements</span>
                    <span className="text-sm font-semibold text-indigo-500">12 tips</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 border-t border-gray-900">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border border-gray-800 mb-4">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">Upload Resume</h3>
            <p className="text-gray-500">Upload your resume in PDF or DOCX format</p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border border-gray-800 mb-4">
              <Target className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">AI Skill Analysis</h3>
            <p className="text-gray-500">Our AI analyzes your skills and experience</p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border border-gray-800 mb-4">
              <TrendingUp className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">Actionable Improvements</h3>
            <p className="text-gray-500">Get specific tips to improve your resume</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 border-t border-gray-900">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">
          Everything You Need to Stand Out
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-[#111111] border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <BarChart3 className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Resume Score & ATS Readiness</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Get an instant score and ensure your resume passes ATS systems
            </p>
          </Card>
          <Card className="bg-[#111111] border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <Zap className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Skill Gap Analysis</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Identify missing skills that companies are looking for
            </p>
          </Card>
          <Card className="bg-[#111111] border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <Target className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Role-Based Career Suggestions</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Get personalized career paths based on your profile</p>
          </Card>
          <Card className="bg-[#111111] border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <Award className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Progress Tracking</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Monitor your improvement and readiness over time</p>
          </Card>
        </div>
      </section>

      {/* Why SkillForge */}
      <section className="container mx-auto px-4 py-20 border-t border-gray-900">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why SkillForge</h2>
          <div className="space-y-6 text-left">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">Built specifically for placements</h3>
                <p className="text-gray-500">Designed with college placements and early-career hiring in mind</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Structured AI insights, not chat-style output
                </h3>
                <p className="text-gray-500">Get clear, actionable feedback instead of vague suggestions</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Designed like a real product, not a generic tool
                </h3>
                <p className="text-gray-500">Professional interface that delivers results you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof */}
      <section className="container mx-auto px-4 py-20 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#111111] border-gray-800 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg border border-gray-800">
                    <span className="text-gray-300">Overall Score</span>
                    <span className="text-2xl font-bold text-indigo-500">78/100</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Content Quality</span>
                      <span className="text-gray-300">85%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ATS Compatibility</span>
                      <span className="text-gray-300">72%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Skills Match</span>
                      <span className="text-gray-300">68%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-200">Clear, focused insights</h3>
                <p className="text-gray-500 leading-relaxed">
                  Every analysis is structured, easy to understand, and immediately actionable. No fluff, no
                  confusion—just clear paths to improvement.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 border-t border-gray-900">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Ready to Forge Your Career?</h2>
          <p className="text-xl text-gray-400">Join thousands of students landing their dream placements</p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6 text-lg">
            Upload Resume Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-900">
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-gray-200">SkillForge</div>
          <p className="text-sm text-gray-500">AI-powered career assistant for placements</p>
        </div>
      </footer>
      </div>
    </>
  )
}

export default Home
