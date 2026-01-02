import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SigninPage() {
  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleGithubAuth = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        
        {/* Branding */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-100">SkillForge</h1>
          <p className="text-sm text-gray-500">
            AI-powered career assistant
          </p>
        </div>

        {/* Auth Card */}
        <Card className="bg-[#111111] border-gray-800 p-8">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold text-gray-100">
                Sign in to SkillForge
              </h2>
              <p className="text-sm text-gray-500">
                Choose your preferred sign-in method
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                onClick={handleGoogleAuth}
                className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium border border-gray-300 shadow-sm transition-colors"
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Continue with Google
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleGithubAuth}
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white font-medium bg-transparent transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                Continue with GitHub
              </Button>
            </div>

            {/* Trust Text */}
            <p className="text-xs text-center text-gray-500 leading-relaxed pt-2">
              We only use your account to sign you in. Your data is secure and
              never shared without permission.
            </p>
          </div>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <a href="#" className="text-indigo-500 hover:text-indigo-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-500 hover:text-indigo-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
