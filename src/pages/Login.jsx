import { useNavigate } from "react-router-dom";
import { LoginFunction } from "../Services/Apis";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await LoginFunction({ email, password });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/profile");
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Invalid email or password",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Signin to your <br /> PopX account
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            <p className="text-xs text-red-500 mt-1">{errors.email || " "}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors.password || " "}
            </p>
          </div>

          {serverError && <p className="text-xs text-red-600">{serverError}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 text-white text-sm font-medium transition ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Logging..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
