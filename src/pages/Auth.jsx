import React, { useState } from "react";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "react-feather";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
        navigate("/videos");
      } else {
        await signup({ name, email, password });
        navigate("/videos");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Auth failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-800 shadow-lg shadow-purple-900/30 rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-purple-400">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h1>
        <p className="text-gray-400 text-center mb-8 text-sm">
          {isLogin
            ? "Login to access your premium zumba classes."
            : "Sign up and start your Zumba journey today."}
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="mt-1 w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none disabled:opacity-50"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="mt-1 w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none disabled:opacity-50"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="mt-1 w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none disabled:opacity-50 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl transition text-lg font-semibold shadow-md shadow-purple-800/40 
              ${loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`}
          >
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="h-px flex-1 bg-gray-700"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        {/* Social Login */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Switch */}
        <p className="text-center mt-6 text-gray-400 text-sm">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => !loading && setIsLogin(!isLogin)}
            className="text-purple-400 font-semibold cursor-pointer hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
