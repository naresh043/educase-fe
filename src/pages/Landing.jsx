import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Welcome to PopX
      </h2>

      <p className="text-sm text-gray-500 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-purple-200 text-purple-800 py-3 rounded-lg text-sm font-medium hover:bg-purple-300 transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
