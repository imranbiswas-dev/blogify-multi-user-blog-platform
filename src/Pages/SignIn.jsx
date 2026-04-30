import React, { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", "Invalid email or password", "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 py-12 px-5 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 shadow-2xl shadow-zinc-200 dark:shadow-none rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden">
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight">
              Sign In
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 ml-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl shadow-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-[1.02] mt-4"
            >
              Sign In
            </button>

            {/* Footer Links */}
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-8">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;