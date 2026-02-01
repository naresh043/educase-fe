import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-[360px]  px-6 py-8 flex flex-col bg-gray-100">
        
        <div className="mt-auto">
          <h2 className="text-xl font-semibold text-gray-900">
            Welcome to PopX
          </h2>

          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="w-full py-3 text-sm font-medium text-white bg-purple-600 rounded-md"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 text-sm font-medium text-purple-700 bg-purple-100 rounded-md"
            >
              Already Registered? Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
