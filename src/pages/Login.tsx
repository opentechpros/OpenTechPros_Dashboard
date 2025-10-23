import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { auth } from "@/firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuthenticated", "true");
      toast.success(`Welcome back${userCredential.user.displayName ? `, ${userCredential.user.displayName}` : ""}!`);
      navigate("/dashboard");
    } catch (error: any) {
      const code = error.code || "";
      if (code.includes("auth/user-not-found") || code.includes("auth/wrong-password")) {
        toast.error("Invalid email or password");
      } else if (code.includes("auth/invalid-email")) {
        toast.error("Invalid email address");
      } else {
        toast.error(error.message || "Failed to sign in");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("isAuthenticated", "true");
      toast.success(`Welcome, ${user.displayName || "User"}!`);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Google sign-in failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0B0205]">
      {/* Left side: background image */}
      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/D1.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2C1B47]/60 via-[#724C9D]/40 to-[#9356A0]/60 mix-blend-overlay" />
      </div>

      {/* Right side: form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-[#0B0205]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <a href="https://opentechpros.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/logo.png"
                alt="OpenTechPros Logo"
                className="mx-auto mb-4 w-40 h-auto object-contain"
              />
            </a>
          </div>

          <div className="bg-[#2C1B47]/30 backdrop-blur-lg p-8 rounded-2xl border border-[#724C9D]/30 shadow-lg">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center text-white">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#DCCAE9]/10 border-[#724C9D]/30 text-white placeholder-gray-400 focus:border-[#9356A0] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#DCCAE9] hover:text-[#9356A0] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#DCCAE9]/10 border-[#724C9D]/30 text-white placeholder-gray-400 focus:border-[#9356A0] transition-colors"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#724C9D] to-[#9356A0] hover:from-[#9356A0] hover:to-[#724C9D] text-white font-medium py-6 rounded-xl transition-all hover:shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* OR divider */}
            <div className="my-6 flex items-center justify-center">
              <div className="h-px w-1/3 bg-[#724C9D]/30" />
              <span className="text-sm text-gray-400 mx-2">OR</span>
              <div className="h-px w-1/3 bg-[#724C9D]/30" />
            </div>

            {/* Google Sign-In */}
            <Button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-6 rounded-xl hover:bg-gray-100 transition-all"
              disabled={isLoading}
            >
              <FcGoogle size={22} /> Sign in with Google
            </Button>

            {/* Signup link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#DCCAE9] hover:text-[#9356A0] font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
