import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // Set display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: formData.name });
      }
      // Optionally store a flag; Firebase persists auth state
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      const code = error.code || "";
      if (code.includes("auth/email-already-in-use")) {
        toast.error("Email already in use");
      } else if (code.includes("auth/invalid-email")) {
        toast.error("Invalid email address");
      } else if (code.includes("auth/weak-password")) {
        toast.error("Password is too weak");
      } else {
        toast.error(error.message || "Failed to create account");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex bg-[#0B0205]">
      {/* Left side: background image */}
      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/D2.png')",
        }}
      >
        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2C1B47]/60 via-[#724C9D]/40 to-[#9356A0]/60 mix-blend-overlay" />
      </div>

      {/* Right side: signup form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-[#0B0205]">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <a
              href="https://opentechpros.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo.png" // replace with your logo path
                alt="OpenTechPros Logo"
                className="mx-auto mb-4 w-40 h-auto object-contain"
              />
            </a>
          </div>

          {/* Form Card */}
          <div className="bg-[#2C1B47]/30 backdrop-blur-lg p-8 rounded-2xl border border-[#724C9D]/30 shadow-lg">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center text-white">
              Create Account
            </h2>

            <form onSubmit={handleSignup} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#DCCAE9]/10 border-[#724C9D]/30 text-white placeholder-gray-400 focus:border-[#9356A0] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#DCCAE9]/10 border-[#724C9D]/30 text-white placeholder-gray-400 focus:border-[#9356A0] transition-colors"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-[#DCCAE9]/10 border-[#724C9D]/30 text-white placeholder-gray-400 focus:border-[#9356A0] transition-colors"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-[#DCCAE9]/10 border-[#724C9D]/30 text-white placeholder-gray-400 focus:border-[#9356A0] transition-colors"
                  required
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#724C9D] to-[#9356A0] hover:from-[#9356A0] hover:to-[#724C9D] text-white font-medium py-6 rounded-xl transition-all hover:shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>

            {/* Login link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#DCCAE9] hover:text-[#9356A0] font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
