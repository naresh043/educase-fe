import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Minimum 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid =
    email &&
    password &&
    /\S+@\S+\.\S+/.test(email) &&
    password.length >= 6;

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setServerError("Invalid email or password");
        return;
      }

      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile");
    } catch {
      setServerError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center ">
      <div className="w-[360px] px-6 py-8 bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 leading-snug">
          Signin to your <br /> PopX account
        </h2>

        <p className="text-sm text-gray-400 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-6">
          {/* Email */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6C2EFF]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-md border px-3 py-3 text-sm placeholder-gray-400 focus:outline-none ${
                errors.email
                  ? "border-red-400"
                  : "border-gray-300 focus:border-[#6C2EFF]"
              }`}
            />
            <p className="text-xs text-red-500 mt-1">{errors.email || " "}</p>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6C2EFF]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-md border px-3 py-3 text-sm placeholder-gray-400 focus:outline-none ${
                errors.password
                  ? "border-red-400"
                  : "border-gray-300 focus:border-[#6C2EFF]"
              }`}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors.password || " "}
            </p>
          </div>

          {serverError && (
            <p className="text-xs text-red-600">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-md text-sm font-medium transition ${
              isFormValid && !loading
                ? "bg-[#6C2EFF] text-white"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
          >
            {loading ? "Logging..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
