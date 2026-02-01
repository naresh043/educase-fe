import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerFunction } from "../Services/Apis";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName) newErrors.fullName = "Full name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Must be 10 digits";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (!form.company) newErrors.company = "Company name is required";
    if (!form.agency) newErrors.agency = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    const payload = {
      name: form.fullName,
      email: form.email,
      password: form.password,
      companyName: form.company,
      mobileNumber: form.phone,
      isAgency: form.agency === "yes",
    };

    try {
      const res = await registerFunction(payload);
      if (res.status === 201) navigate("/login");
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-purple-400"
            />
            <p className="text-xs text-red-500">{errors.fullName || " "}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-purple-400"
            />
            <p className="text-xs text-red-500">{errors.phone || " "}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-purple-400"
            />
            <p className="text-xs text-red-500">{errors.email || " "}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-purple-400"
            />
            <p className="text-xs text-red-500">{errors.password || " "}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-purple-400"
            />
            <p className="text-xs text-red-500">{errors.company || " "}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
            <p className="text-xs text-red-500">{errors.agency || " "}</p>
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
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
